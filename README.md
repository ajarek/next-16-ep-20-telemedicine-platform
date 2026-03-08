This is a <img width="2752" height="1536" alt="unnamed (1)" src="https://github.com/user-attachments/assets/07fbb209-5bdf-406f-89cc-94c769f202bf" />
[Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

 TeleMed to nowoczesna platforma telemedyczna stworzoną przy użyciu technologii Next.js
. Projekt ten umożliwia użytkownikom łatwe wyszukiwanie specjalistów oraz rezerwację wizyt lekarskich online.
Oto szczegółowy opis platformy z podziałem na aspekty techniczne i funkcjonalne:
Charakterystyka techniczna
Technologie: Aplikacja została zbudowana w oparciu o framework Next.js (wersja 16) z wykorzystaniem TypeScript (stanowiącego 93,8% kodu)
.
Struktura projektu: Kod źródłowy zorganizowany jest w folderach takich jak app (logika aplikacji), components (interfejs użytkownika), store (zarządzanie stanem wieloetapowej rezerwacji) oraz lib (komponenty rdzenia i przełącznik motywów)
.
Stylistyka: Interfejs użytkownika wykorzystuje ciemny motyw (dark mode) z wyraźnymi, kolorowymi akcentami (np. błękitne przyciski, żółte elementy wezwania do działania)
.
Główne funkcjonalności platformy
Przegląd specjalizacji: Platforma oferuje dostęp do lekarzy z różnych dziedzin, takich jak:
Lekarz Rodzinny/Internista,
Pediatria,
Zdrowie psychiczne,
Dermatologia,
Kardiologia, Ortopedia, Zdrowie kobiety oraz Dietetyka
.
Wybór lekarza: Użytkownik może przeglądać profile certyfikowanych lekarzy. Każdy profil zawiera informacje o wykształceniu (np. UM Szczecin, UM Wrocław), latach doświadczenia, znanych językach oraz ocenę w formie gwiazdek
.
Wieloetapowy proces rezerwacji wizyty: System prowadzi użytkownika przez 4 proste kroki
:
Krok 1 (Objawy): Opisanie dolegliwości, określenie czasu ich trwania, ocena nasilenia za pomocą emotikon oraz możliwość przesłania plików (np. zdjęć)
.
Krok 2 (Lekarz): Wybór konkretnego specjalisty
.
Krok 3 (Termin): Wybór daty i godziny wizyty z kalendarza podzielonego na pory dnia (rano, popołudnie, wieczór)
.
Krok 4 (Płatność): Finalizacja transakcji przy użyciu różnych metod (karta kredytowa, PayPal, ubezpieczenie). Podsumowanie zawiera koszt konsultacji oraz opłatę serwisową
.
Obsługa pacjenta po rezerwacji
Potwierdzenie wizyty: Po opłaceniu rezerwacji pacjent otrzymuje unikalny numer potwierdzenia (np. #APT-1773008800109) oraz instrukcje przygotowawcze (np. przetestowanie kamery i mikrofonu, przygotowanie historii chorób)
.
Szczegóły wizyty: Użytkownik ma dostęp do panelu z danymi pacjenta, informacjami o lekarzu oraz zgłoszonymi wcześniej objawami
.
Platforma TeleMed łączy przejrzysty interfejs z zaawansowaną logiką zarządzania wizytami lekarskimi, co czyni ją kompletnym rozwiązaniem do zdalnej opieki zdrowotnej


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
