// app/api/chat/route.ts
// Serwerowa część czatu: tu strona rozmawia z AI. Klucz API nigdy nie trafia do przeglądarki.
//
// TRYB DEMO: jeśli w .env.local NIE ma ANTHROPIC_API_KEY, czat odpowiada
// przykładowymi, gotowymi odpowiedziami (bez AI i bez kosztów).
// Gdy dodasz klucz i zrestartujesz "npm run dev", czat sam przełączy się na prawdziwe AI.

import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/agent-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Ustawienia – możesz je zmieniać
const MODEL = process.env.CHAT_MODEL || "claude-haiku-5-5"; // mały, szybki i tani model
const MAX_TOKENS = 800; // maksymalna długość jednej odpowiedzi
const MAX_HISTORY = 30; // ile ostatnich wiadomości wysyłamy do AI
const MAX_CHARS = 2000; // maksymalna długość jednej wiadomości klienta
const RATE_LIMIT = 20; // ile wiadomości z jednego adresu IP...
const WINDOW_MS = 10 * 60 * 1000; // ...w ciągu 10 minut

const API_KEY = process.env.ANTHROPIC_API_KEY;
const DEMO_MODE = !API_KEY;

// Klient AI tworzony tylko, gdy jest klucz
const client = API_KEY ? new Anthropic({ apiKey: API_KEY }) : null;

// Prosty limiter (chroni budżet przed nadużyciami)
const hits = new Map<string, number[]>();

type Msg = { role: "user" | "assistant"; content: string };

// ---------- TRYB DEMO: przykładowe odpowiedzi ----------
const DEMO_ANSWERS: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["cen", "wycen", "koszt", "ile kosztuje", "oferta cenowa"],
    answer:
      "Chętnie przygotuję zapytanie o wycenę. Proszę napisać:\n- jakiego produktu lub zastosowania dotyczy zapytanie,\n- przybliżoną ilość,\n- podłoże (np. stal, aluminium) i kolor (np. RAL).\nNa końcu podsumuję zapytanie, a wyślą je Państwo przez stronę /kontakt.",
  },
  {
    keywords: ["kolor", "ral", "colormatch", "odcień", "barw"],
    answer:
      "Do dobrania koloru służy nasze narzędzie ColorMatch – znajdzie je Pan/Pani na stronie /colormatch. Jeśli zna Pan/Pani numer RAL, mogę też pomóc ustalić, jaki rodzaj powłoki będzie do niego pasował.",
  },
  {
    keywords: ["stal", "metal", "rdz", "korozj", "ocynk", "alumin"],
    answer:
      "Do metalu dobór powłoki zależy od kilku rzeczy. Czy element będzie pracował wewnątrz czy na zewnątrz? I jaką metodą planują Państwo nakładać farbę – pędzlem, natryskiem czy proszkowo?",
  },
  {
    keywords: ["kontakt", "telefon", "mail", "adres", "godzin", "gdzie"],
    answer:
      "Najszybciej skontaktują się Państwo z nami przez stronę /kontakt – tam są wszystkie dane i formularz. Handlowiec odpowie na każde pytanie.",
  },
  {
    keywords: ["kim", "firma", "lankwitzer", "czym się zajmuj", "o was"],
    answer:
      "Paint Coat Consulting z Bydgoszczy jest dystrybutorem farb i lakierów przemysłowych niemieckiej marki Lankwitzer. Więcej o tym, z kim współpracujemy, znajdą Państwo na stronie /dla-kogo, a przykładowe projekty na /realizacje.",
  },
  {
    keywords: ["cześć", "dzień dobry", "witam", "hej", "siema"],
    answer:
      "Dzień dobry! W czym mogę pomóc? Mogę doradzić rodzaj powłoki, pomóc z doborem koloru albo przygotować zapytanie o wycenę.",
  },
];

const DEMO_DEFAULT =
  "(Tryb demo – to przykładowa odpowiedź, prawdziwe AI zostanie podłączone po dodaniu klucza API.)\n\nDziękuję za pytanie! Spróbuj zapytać np. o wycenę, dobór koloru, farbę do stali albo o kontakt z firmą.";

function demoAnswer(messages: Msg[]): string {
  const last = messages[messages.length - 1].content.toLowerCase();
  const match = DEMO_ANSWERS.find((d) => d.keywords.some((k) => last.includes(k)));
  return match ? match.answer : DEMO_DEFAULT;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
// ---------------------------------------------------------

export async function POST(req: Request) {
  // 1. Limit zapytań
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    return new Response(
      "Wysłano zbyt wiele wiadomości. Proszę spróbować za kilka minut lub skontaktować się przez stronę /kontakt.",
      { status: 429 }
    );
  }
  recent.push(now);
  hits.set(ip, recent);

  // 2. Odczyt i oczyszczenie wiadomości
  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Błędne zapytanie.", { status: 400 });
  }

  const messages: Msg[] = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (m) =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  // Rozmowa z AI musi zaczynać się od wiadomości klienta
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length) {
    return new Response("Brak wiadomości.", { status: 400 });
  }

  // 3. Odpowiedź przesyłana na bieżąco (tekst pojawia się słowo po słowie)
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        if (DEMO_MODE || !client) {
          // Udajemy "pisanie" – wysyłamy odpowiedź słowo po słowie
          await sleep(600);
          const words = demoAnswer(messages).split(/(\s+)/);
          for (const w of words) {
            controller.enqueue(encoder.encode(w));
            await sleep(30);
          }
          return;
        }

        const aiStream = client.messages.stream({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: SYSTEM_PROMPT,
          messages,
        });
        aiStream.on("text", (text) => controller.enqueue(encoder.encode(text)));
        await aiStream.finalMessage();
      } catch (err) {
        console.error("[chat] Błąd AI:", err);
        controller.enqueue(
          encoder.encode(
            "\n\nPrzepraszam, wystąpił błąd. Proszę spróbować ponownie lub skontaktować się przez stronę /kontakt."
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
