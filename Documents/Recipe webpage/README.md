# Recipe Webpage

A fast, modern recipe explorer with search, favorites, and rich details.

## Features
- Unified modern kitchen theme (sage/forest palette)
- Search recipes with autocomplete suggestions
- View details in a dialog (ingredients, instructions, nutrition)
- Favorites workflow with simple routing
- PWA: manifest and service worker (`sw.js`)
- E2E tests using Playwright

## Getting Started

Prerequisites: Node 18+

Install deps:

```bash
npm install
```

Start dev server:

```bash
npm start
```

Open: http://127.0.0.1:5173

## Testing (Playwright)

Install browsers:

```bash
npx playwright install
```

Run tests:

```bash
npm run test
```

Headed mode or UI:

```bash
npm run test:headed
npm run test:ui
```

## Theming

Theme tokens live in `styles.css` under `:root` (dark) and `[data-theme="light"]` (light).
Key tokens:
- `--bg`, `--bg-elev`, `--text`, `--muted`
- `--brand`, `--brand-700`, `--brand-900`
- `--ring`, `--radius`, `--border`
- `--control-bg` (tinted control backgrounds used by input/select/textarea)

Primary button uses a gradient from `--brand-700` → `--brand-900`.
Textarea, inputs, and selects use `--control-bg` to match brand.

## Project Scripts
- `npm start` — local server via http-server on 5173
- `npm run test` — Playwright tests (webServer auto-starts)

## Structure
- `index.html` — Shell
- `script.js` — App logic
- `styles.css` — Theme and component styles
- `sw.js` — Service worker
- `tests/` — Playwright tests

## Deployment
Any static host works. Build step not required.

## License
MIT
