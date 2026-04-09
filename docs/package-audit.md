# Package Audit — April 2026

## Current vs Latest

| Package | Installed | Latest | Risk |
|---|---|---|---|
| `next` | 13.4.12 | 16.2.2 | High |
| `eslint-config-next` | 13.4.12 | 16.2.2 | High |
| `react` | 18.2.0 | 19.2.4 | Medium |
| `react-dom` | 18.2.0 | 19.2.4 | Medium |
| `@types/react` | 18.2.16 | 19.2.14 | (match React) |
| `@types/react-dom` | 18.2.7 | 19.2.3 | (match React) |
| `typescript` | 5.1.6 | 6.0.x | Medium |
| `eslint` | 8.45.0 | 10.2.0 | Medium |
| `react-icons` | 4.10.1 | 5.6.0 | Low |
| `@sendgrid/mail` | 7.7.0 | 8.1.6 | Low |
| `@types/node` | 20.4.5 | ~25.x | Low |

---

## Breaking Changes by Package

### Next.js 13 → 16

**13 → 14**
- App Router is now the primary paradigm; Pages Router still works but deprioritized
- `next/image` prop names changed
- Minimum Node.js bumped to 18.17

**14 → 15**
- `cookies()`, `headers()`, `params`, and `searchParams` must now be `await`ed everywhere
- `fetch()` is no longer cached by default — previously cached unless opted out, now uncached unless explicitly set
- `NextRequest.geo` and `NextRequest.ip` removed
- Codemod available: `npx @next/codemod@canary upgrade`

**15 → 16**
- Synchronous access to request APIs fully removed (no more sync fallback)
- `middleware.ts` named export renamed from `middleware` to `proxy`
- Turbopack is now the default dev server; Webpack is opt-in via `--webpack` flag

---

### React 18 → 19

- `ReactDOM.render()` fully removed — use `ReactDOM.createRoot()`
- `ReactDOM.hydrate()` removed — use `ReactDOM.hydrateRoot()`
- `defaultProps` on function components removed — use ES6 default parameters
- `forwardRef` no longer needed — `ref` is now a plain prop on function components
- `propTypes` checks silently removed — no longer run at all
- Legacy Context API (`contextTypes`, `getChildContext`) removed
- String refs removed — use `useRef` or callback refs

**Strategy:** Upgrade to 18.3 first — it adds deprecation warnings for all the above. Fix warnings, then upgrade to 19.

---

### TypeScript 5 → 6

- `target: "es5"` deprecated — minimum is now ES2015 *(your tsconfig currently uses `"es5"`)*
- `moduleResolution: "classic"` removed — use `"node16"`, `"nodenext"`, or `"bundler"`
- `module Foo {}` namespace syntax is a hard error — must use `namespace Foo {}`
- Many compiler defaults changed: `strict` defaults to `true`, `target` defaults to `"es2025"`, `moduleResolution` defaults to `"bundler"`
- Codemod available: `npx @andrewbranch/ts5to6`

---

### ESLint 8 → 10

**8 → 9**
- Flat config (`eslint.config.js`) became the default; `.eslintrc.*` still worked via env var

**9 → 10**
- Legacy `.eslintrc` format completely removed — must use flat config
- Node.js < 20.19 no longer supported
- Config file lookup now starts from the linted file's directory, not cwd

> **Note:** As of April 2026, there is a reported compatibility issue between `eslint-config-next` 16 and ESLint 10. Consider staying on ESLint 9 until this is resolved.

Migration tool: `npx @eslint/migrate-config .eslintrc.json`

---

### react-icons 4 → 5

- `react-icons/all` import path removed — switch to per-library imports (e.g. `import { FaBeer } from 'react-icons/fa'`)
- Some icons renamed across libraries

**Action:** Run a search for `from 'react-icons/all'` before upgrading. If none exist, this is a safe upgrade.

---

### @sendgrid/mail 7 → 8

- Dropped support for older Node.js versions
- No API surface changes for standard `send()` usage — safe drop-in upgrade

---

## Recommended Upgrade Order

| Step | Package(s) | Command |
|---|---|---|
| 1 | `@sendgrid/mail` | `npm install @sendgrid/mail@latest` |
| 2 | `react-icons` | `npm install react-icons@latest` |
| 3 | `react`, `react-dom`, `@types/react`, `@types/react-dom` | `npm install react@18.3 react-dom@18.3` → fix warnings → `npm install react@latest react-dom@latest @types/react@latest @types/react-dom@latest` |
| 4 | `next`, `eslint-config-next` | `npx @next/codemod@canary upgrade` |
| 5 | `typescript` | `npm install typescript@latest` then `npx @andrewbranch/ts5to6` |
| 6 | `eslint` | `npm install eslint@9` then `npx @eslint/migrate-config .eslintrc.json` |
