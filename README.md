# Paint Coat ColorMatch

Aplikacja webowa do precyzyjnego dopasowania kolorów lakierów przemysłowych z wykorzystaniem technologii rozpoznawania obrazu.

## O projekcie

Paint Coat ColorMatch to narzędzie stworzone dla Paint Coat Consulting sp. z o.o., dystrybutora lakierów przemysłowych Lankwitzer. Aplikacja umożliwia skanowanie kolorów za pomocą kamery i automatyczne dopasowanie do dostępnej palety produktów.

**Główne funkcje:**
- Skanowanie kolorów w czasie rzeczywistym
- Algorytm dopasowania do palety Lankwitzer
- Katalog lakierów przemysłowych
- Dedykowane rozwiązanie dla przemysłu ciężkiego i metalurgii

## Stack technologiczny

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Instalacja

Wymagania: Node.js 18 lub nowszy
```bash
git clone https://github.com/TWOJA-NAZWA/colormatch-nextjs.git
cd colormatch-nextjs
npm install
npm run dev
```

Aplikacja uruchomi się pod adresem http://localhost:3000

## Dostępne komendy
```bash
npm run dev      # Serwer deweloperski
npm run build    # Build produkcyjny
npm run start    # Uruchomienie buildu
npm run lint     # Linter
```

## Struktura katalogów
```
colormatch-nextjs/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── logo21-1.png
│   └── xLogoPAINTCOATGROUP-1.webp
├── components/
└── package.json
```

## Status rozwoju

**Wersja aktualna (0.1.0):**
- Strona główna z animacjami
- Responsywny layout
- Branding firmowy

**W planach:**
- Moduł skanera kolorów
- Baza danych lakierów
- System filtrowania
- Historia skanowań
- Panel kontaktowy

**Przyszłe rozszerzenia:**
- Panel administracyjny
- Eksport do PDF
- Integracja z systemem zamówień

## Design

Aplikacja oparta jest na identyfikacji wizualnej Paint Coat:
- Kolory: pomarańczowy, czarny, biały
- Typografia: czcionki systemowe
- Animacje: Framer Motion

## Paint Coat Consulting sp. z o.o.

Firma działa od 2005 roku jako dystrybutor lakierów przemysłowych Lankwitzer. Specjalizujemy się w doborze rozwiązań dla przemysłu ciężkiego, zastosowań warsztatowych i aplikacji półprofesjonalnych.

**Kontakt:**
- Adres: ul. Wąbrzeska 41, 85-144 Bydgoszcz
- Telefon: +48 724 909 099
- Email: biuro@paintcoat.pl
- Strona: paintcoat.pl

## Autor

Jakub Łączkowski  
Paint Coat Consulting sp. z o.o.

## Licencja

Copyright 2025 Paint Coat Consulting sp. z o.o. Wszystkie prawa zastrzeżone.