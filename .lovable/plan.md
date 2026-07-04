## Ziel
Den gesamten Code aus `github.com/opexxxxx/mario_handwerker` (Handwerker-Website: Wohnungsbau, Renovierung, Neugestaltung, Kontakt, Impressum, Datenschutz) in das aktuelle Lovable-Projekt übernehmen.

## Ausgangslage
- **Quell-Repo**: Vite + React 18 + `react-router-dom` + shadcn/ui + Tailwind v3 + Supabase Edge Function (`submit-contact`, Deno).
- **Ziel-Projekt (dieses hier)**: TanStack Start v1 + React 19 + `@tanstack/react-router` + shadcn/ui + Tailwind v4 (`src/styles.css`) + Cloudflare Worker Runtime.

Direkt „git pull" geht nicht — die Frameworks sind unterschiedlich. Ich portiere den Code strukturiert.

## Vorgehen

**1. Assets kopieren (1:1)**
- `public/lovable-uploads/*.png` (8 Bilder)
- `public/videos/` (README)
- `public/favicon.ico`, `robots.txt`
- `public/placeholder.svg`

**2. Komponenten übernehmen (nahezu 1:1)**
- `src/components/HeroSection.tsx`, `ServicesSection.tsx`, `AdvantagesSection.tsx`, `ProcessSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `ScrollReveal.tsx`
- Alle `react-router-dom`-Imports → `@tanstack/react-router` (`Link to=...` statt `to=`, `useNavigate`).
- shadcn-UI-Komponenten sind hier bereits vorhanden — nur fehlende ergänzen.

**3. Pages → TanStack-Routes portieren**
| Alt (`src/pages/`) | Neu (`src/routes/`) |
|---|---|
| `Index.tsx` | `index.tsx` (ersetzt Placeholder) |
| `Contact.tsx` | `contact.tsx` |
| `Impressum.tsx` | `impressum.tsx` |
| `Datenschutz.tsx` | `datenschutz.tsx` |
| `Wohnungsbau.tsx` | `wohnungsbau.tsx` |
| `Renovierung.tsx` | `renovierung.tsx` |
| `Neugestaltung.tsx` | `neugestaltung.tsx` |
| `NotFound.tsx` | wird `notFoundComponent` in `__root.tsx` |

Jede Route bekommt eigenes `head()` mit `title` / `description` / `og:*` (deutsch, seiten-spezifisch).

**4. Styles / Theme**
- Design-Tokens aus `src/index.css` (HSL-Variablen, Farb-Palette) in `src/styles.css` (Tailwind v4 `@theme`-Block) übernehmen.
- Tailwind-Plugins (`tailwindcss-animate` etc.) prüfen und ergänzen.

**5. Root-Layout**
- `__root.tsx` behält TanStack-Shell, bekommt globale Provider (`QueryClientProvider` ist bereits da, `TooltipProvider`, `<Toaster />`, `<Sonner />` ergänzen).
- Site-weite Metadaten (Titel: „Mario Handwerker" o.ä.) im `head()` setzen.

**6. Kontaktformular-Backend**
- Die Supabase-Deno-Function `submit-contact` (Validierung + In-Memory-Ratelimit) wird zu einer TanStack **Server Function** `src/lib/contact.functions.ts` mit `createServerFn` portiert.
- Validierung via `zod`, Ratelimit in-memory (Hinweis: Worker-Instanzen sind kurzlebig — für Produktion später auf DB/KV umziehen).
- Kein Supabase erforderlich, solange keine Persistenz gewünscht ist. Falls du Anfragen in einer DB speichern willst → Lovable Cloud aktivieren (separater Schritt, frage ich dann).

**7. Fehlende npm-Pakete installieren**
Vergleich `package.json` alt vs. neu; ergänzen z.B.: `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `vaul`, `cmdk`, `next-themes` etc. — nur was tatsächlich importiert wird.

**8. Verifikation**
- Build läuft grün.
- Playwright-Screenshot von `/`, `/wohnungsbau`, `/contact` — vergleichen mit Original.

## Was NICHT übernommen wird
- `BrowserRouter`/`Routes`/`Route` aus `react-router-dom` (durch TanStack ersetzt).
- `vite.config.ts`, `tsconfig*.json`, `tailwind.config.ts`, `postcss.config.js` (Ziel-Projekt hat eigene, inkompatible Konfiguration).
- `bun.lockb`, `package-lock.json`, `eslint.config.js`, `components.json` aus dem alten Repo.

## Offene Punkte (bestätigen vor Umsetzung)
- Sollen Kontaktanfragen **nur per E-Mail** rausgehen (dann brauchen wir einen Mail-Provider wie Resend + Secret) oder erstmal nur **serverseitig geloggt** werden? Im alten Code werden sie nicht versendet und nicht gespeichert — nur validiert.
- Reicht In-Memory-Ratelimit fürs Erste?
