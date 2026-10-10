// components/ChatWidget.tsx
// Okienko czatu w prawym dolnym rogu strony.

"use client";

import { useEffect, useRef, useState, FormEvent, KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Dzień dobry! Jestem asystentem Paint Coat. Pomogę dobrać rodzaj farby lub systemu powłokowego, wyjaśnię, jak działa ColorMatch, albo przygotuję zapytanie o wycenę. W czym mogę pomóc?",
};

const MAX_USER_MESSAGES = 15; // limit wiadomości w jednej rozmowie
const STORAGE_KEY = "paintcoat-chat";
const FALLBACK =
  "Przepraszam, coś poszło nie tak. Proszę spróbować ponownie lub skontaktować się przez stronę /kontakt.";

// Zamienia ścieżki typu /kontakt na klikalne linki i usuwa ewentualne gwiazdki markdown
const PATHS = /(\/(?:kontakt|colormatch|dla-kogo|realizacje)\b)/g;
function renderText(text: string) {
  const clean = text.replace(/\*\*/g, "");
  return clean.split(PATHS).map((part, i) =>
    /^\/(kontakt|colormatch|dla-kogo|realizacje)$/.test(part) ? (
      <Link key={i} href={part} className="text-orange-500 underline hover:text-orange-400">
        {part}
      </Link>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Przywróć rozmowę po przejściu na inną podstronę
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const userCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userCount >= MAX_USER_MESSAGES;

  async function send(e?: FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading || limitReached) return;

    const history: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const msg = res.status === 429 ? await res.text() : FALLBACK;
        setMessages([...history, { role: "assistant", content: msg }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) {
        setMessages([...history, { role: "assistant", content: FALLBACK }]);
      }
    } catch {
      setMessages([...history, { role: "assistant", content: FALLBACK }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    // Enter = wyślij, Shift+Enter = nowa linia
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function reset() {
    setMessages([WELCOME]);
    setInput("");
  }

  return (
    <>
      {/* Panel czatu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[600px] w-[calc(100vw-2rem)] flex-col border border-neutral-700 bg-[#2f2f2f] shadow-2xl sm:w-96"
            role="dialog"
            aria-label="Asystent Paint Coat"
          >
            {/* Nagłówek */}
            <div className="flex items-center justify-between border-b-2 border-orange-500 bg-[#1a1a1a] px-4 py-3">
              <div>
                <p className="font-semibold text-white">Asystent Paint Coat</p>
                <p className="text-xs text-neutral-400">Odpowiedzi generuje AI</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={reset}
                  className="text-xs text-neutral-400 hover:text-orange-500"
                  title="Rozpocznij nową rozmowę"
                >
                  Nowa rozmowa
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl leading-none text-neutral-400 hover:text-white"
                  aria-label="Zamknij czat"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Wiadomości */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      "max-w-[85%] whitespace-pre-wrap px-3 py-2 text-sm leading-relaxed " +
                      (m.role === "user"
                        ? "bg-orange-500 text-white"
                        : "border-l-2 border-orange-500 bg-[#1a1a1a] text-neutral-100")
                    }
                  >
                    {m.content ? (
                      renderText(m.content)
                    ) : (
                      <span className="inline-flex gap-1">
                        <span className="h-2 w-2 animate-bounce bg-orange-500 [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 animate-bounce bg-orange-500 [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 animate-bounce bg-orange-500" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Pole wpisywania */}
            <form onSubmit={send} className="border-t border-neutral-700 bg-[#1a1a1a] p-3">
              {limitReached ? (
                <p className="text-sm text-neutral-300">
                  Osiągnięto limit wiadomości w tej rozmowie. Zapraszamy do kontaktu przez stronę{" "}
                  <Link href="/kontakt" className="text-orange-500 underline">/kontakt</Link>.
                </p>
              ) : (
                <div className="flex gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    rows={1}
                    maxLength={2000}
                    placeholder="Napisz wiadomość..."
                    className="flex-1 resize-none border border-neutral-700 bg-[#2f2f2f] px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-orange-500"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="bg-orange-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-40"
                  >
                    Wyślij
                  </button>
                </div>
              )}
              <p className="mt-2 text-[10px] leading-snug text-neutral-500">
                Asystent AI może się mylić – parametry techniczne zawsze potwierdzaj w karcie produktu lub u handlowca.
                Nie podawaj danych wrażliwych.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Przycisk otwierający */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center bg-orange-500 text-white shadow-lg hover:bg-orange-600"
        aria-label={open ? "Zamknij czat" : "Otwórz czat z asystentem"}
      >
        {open ? (
          <span className="text-3xl leading-none">×</span>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
