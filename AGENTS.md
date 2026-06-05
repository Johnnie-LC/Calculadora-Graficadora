# Calculadora-Graficadora

## Commands

| Command | What it does |
|---------|-------------|
| `npm run build` | webpack production build → `dist/` |
| `npm run deploy` | `gh-pages -d dist` — publishes `dist/` to GitHub Pages |

No test, lint, typecheck, or dev server commands exist.

## Architecture

- **Entrypoint**: `src/main.js` — bootstraps chart, nav, and input logic
- **Chart.js 3.5.1** loaded via CDN as a synchronous `<script>` in `src/index.html:75` (before `</body>`)
- **HtmlWebpackPlugin** with `inject: true` appends the webpack bundle with `defer`, so Chart.js is always available first
- **Chart registry**: `chartTypes` array in `src/main.js:41` — each entry defines `id`, `label`, `chartJsType`, `inputFields`, `hasScales`, `createDataPoint`, `applyData`
- **Data isolated per chart type** via `dataStore` object; switching types preserves each type's data independently
- CSS loaded via CSS-in-JS (`style-loader`), so no separate CSS file in output

## Quirks

- `dist/` is gitignored — build before deploy, never commit it
- No dev server — serve `dist/` locally after build to test
- No CSS file in build output; CSS is inlined by `style-loader`
