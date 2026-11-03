# Recipe: Darkest Companion

How this site is built, and how to build your own. Written for an agent told "build me one of these". For usage see [README.md](README.md).

## 1. Pitch

A one-page reference for Darkest Dungeon players, used mid-run. Pick a region (Ruins, Warrens, Weald, Cove, plus DLC areas) and an expedition length. The page shows the recommended provisions as an in-game inventory with total cost, the region's tips, and every curio with each item you can use on it and the odds of each outcome. It's fully static, with no framework runtime and no backend, and it remembers your last pick. Version 1 (2016) was React 0.14 + Redux + webpack 1. Version 2 rebuilds it on Astro and keeps the URL and users' saved state.

## 2. Ingredients

**Services**
- GitHub repo + GitHub Pages (project site, served under `/darkest-companion/`). Settings → Pages → Source = **GitHub Actions**.
- Optional: a custom domain on the user/org Pages site (here `arnaud.rocks`, set on the `ArnaudRinquin.github.io` repo, so project sites inherit it).
- Optional: Cloudflare Web Analytics (beacon added at the DNS/proxy level, not in the code).

**Tools**
- Node 24 (`.nvmrc`), pnpm 10 (`packageManager` in `package.json`).
- `astro` (static output, no integrations), `typescript@6` (`astro check` doesn't support TS 7 yet), `@astrojs/check`, `vitest`, `playwright-core` (smoke test with the installed Chrome, no browser download).
- macOS + Google Chrome + `sips` for `scripts/images.sh`.

**Secrets**: none. The deploy uses the built-in `GITHUB_TOKEN` with `pages: write` + `id-token: write`.

## 3. Architecture

```
src/data/*.ts  (typed data: regions, curios, provisions, tips, activators)
      │  build time
      ▼
src/components/App.astro ──► every region × length rendered into the HTML
      │                       blocks tagged data-region="…" data-length="…"
      ▼
generated <style>:  .app:has(#region-weald:checked) [data-region]:not([data-region~="weald"]) {display:none}
      │             → switching regions/lengths is pure CSS, no JS needed
      ▼
inline <script> right after the radios (~1 KB, from src/scripts/state.ts via fn.toString()):
      hash (#weald/long, #courtyard/epic-viscount) > localStorage v2 > v1 redux-persist key > defaults
      (v2 = {region, length, modes:{courtyard, farmstead}}; hashchange re-applies)
      → sets the checked radios before first paint; on change: save + history.replaceState
```

Pages: `/` (default Ruins) and `/<region>/` (same app with the region pinned, its own title/description/OG image, for SEO and sharing). `sitemap.xml` is an Astro endpoint.

**Key files**
- `src/data/types.ts`: `Curio`, `CurioOption`, `Outcome`, `Region`, ids. Every curio can carry `sources[]` and `unsure`, and `unsure` shows in the UI.
- `src/data/curios.generated.ts`: v1 data, generated once by `scripts/port-legacy.mjs` from `test/fixtures/legacy.json` (a JSON dump of the old JS modules). Don't edit it. Corrections go in `fixes` in `src/data/curios.ts`, each with a source.
- `src/data/curios.ts`: legacy + `fixes` + DLC/special curios.
- `src/data/loadouts.dlc.ts`, `src/data/tips.dlc.ts`: Courtyard quest / Farmstead mode loadouts (`basis: 'community' | 'estimate'`) and tips, generated from `data/dlc-loadouts-research.json`.
- `src/components/Inventory.astro`: in-game style inventory grid + total cost.
- `src/scripts/filter.ts`: curio search + "I have <item>" chips (sets `hidden`; region switching stays CSS).
- `src/lib/tone.ts`: good/bad/neutral outcome classifier, used for the bar color + ▲/▼ glyph.
- `src/data/provisions.ts`: shop items (cost, stack size), `LOADOUTS[region][length]`, `stacks()` (inventory slot split), `provisionIcon()` (food sprite changes with quantity).
- `src/scripts/state.ts`: `pickState` (pure, unit-tested) + `boot`. Both must stay self-contained because they are inlined with `toString()`.
- `src/layouts/Base.astro`: SEO head (canonical, OG/Twitter, JSON-LD `WebApplication`, favicon, font preload).
- `src/styles/global.css`: mobile-first; sticky picker; two columns ≥1000px.
- `assets/card.html`, `assets/icon.html` + `scripts/images.sh`: social images and favicons rendered from HTML.
- `scripts/smoke.mjs`: Playwright checks (v1 migration, persistence, hash, region pages, keyboard, no horizontal scroll on iPhone).
- `test/data.test.ts`: v1 parity (every curio, loadout, cost) + integrity (unique ids, icons exist, odds add up to ~100% unless flagged `unsure`).
- `.github/workflows/deploy.yml`: check → test → build → smoke → deploy to Pages (deploy only on `master`).
- `SOURCES.md`: where each dataset comes from, plus known gaps.

## 4. Build your own

1. `pnpm create astro` (empty template), or copy `package.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`. Set `site` and `base` in `astro.config.mjs` to your Pages URL. With a project site, `base` must be `/<repo>/`.
2. Model the data in `src/data/types.ts` first. Keep outcome labels as plain strings (v1 built them with helper functions, which made them impossible to diff or cite).
3. If you are porting an old app, dump its data to JSON with a tiny ESM script, commit that dump as a test fixture, and generate typed modules from it. A parity test against the fixture catches porting mistakes.
4. Build `App.astro`: radios (`name="region"`, `name="length"`, `id="region-<id>"`), then every block rendered with `data-region`/`data-length`. Generate the `:has()` visibility rules from the same region list.
5. State: write `pickState`/`boot` as standalone functions and inline them right after the radios with `<script is:inline set:html={`${pickState.toString()};(${boot.toString()})(${JSON.stringify(cfg)})`} />`. Add a unit test that evaluates `pickState.toString()` in isolation.
6. Old saved state: find the old storage format in the old library's *source* (here `redux-persist@1.5.6`: key `reduxPersist:<reducer>`, value `JSON.stringify(state)`). Read it only when the new key is missing, validate each field, and never delete it.
7. SEO: one page per region with its own `<title>`, description and OG image, canonical URLs, JSON-LD, and a sitemap. All content is in the HTML, so crawlers see every curio.
8. Images: edit `assets/card.html`, run `pnpm images`. Upload `assets/social-preview.png` in GitHub → Settings → Social preview (manual).
9. Deploy: copy `.github/workflows/deploy.yml`, switch Pages source to GitHub Actions, push to `master`.

## 5. Design decisions and gotchas

- **Why Astro and no island.** The only state is two strings. Rendering everything up front and toggling with CSS `:has()` keeps the page at ~11 KB gzipped with ~1 KB of JS. A React island would cost more than the whole page.
- **Flash of the default region.** A deferred module script would show Ruins and then jump to the saved region. The boot script is inline and synchronous, placed right after the radios.
- **`fn.toString()` inlining.** It works because Astro's frontmatter runs compiled JS, so types are already stripped. Any import or module-level reference inside those functions breaks at runtime only. The `is self-contained` test guards against it.
- **Hash second segment is length for base regions, quest/mode for DLC areas.** Each DLC area remembers its own pick.
- **Phones: the picker scrolls away; a slim sticky bar** shows the current pick (filtered by the same `:has()` rules, no JS) with links back to the picker and to each section.
- **No layout shift on region switch:** Length / Quest / Mode share one grid cell sized for the tallest case (Courtyard's 6 quests), checked by the smoke test at 3 widths.
- **The hash beats storage, and a region page beats storage.** Shared links (`/weald/#weald/long`) must open what was shared, not the visitor's last pick.
- **Hard-coded base in CSS.** `url('/darkest-companion/…')` in `global.css`: Astro doesn't rewrite `url()` in plain CSS, and relative URLs differ between `/` and `/weald/`. If you fork, change `base` and these URLs together.
- **`robots.txt` doesn't work on a project site** (crawlers only read the domain root). Submit `sitemap.xml` in Search Console instead.
- **TypeScript 7** breaks `astro check`. It's pinned to 6.
- **v1 data quirks kept on purpose.** "Stack of books" exists in both Ruins and Warrens, and some odds don't add up to 100%. Each one is either fixed in `fixes` with a source or flagged `unsure`.
- **GitHub Pages migration.** v1 published by force-pushing build output to `gh-pages` (legacy Pages). v2 uses `actions/deploy-pages`, so the `gh-pages` branch can stay as a rollback until v2 is live.
- **Areas without lengths.** DLC areas get one radio group per region (`name="mode-courtyard"`, …), so each keeps its own default, and one `:has(#mode-…:not(:checked))` rule per mode. A single shared group would leave the Farmstead blank after picking a Courtyard quest.
- **Sources disagree or are missing.** Show the numbers anyway, but label them (Community vs Estimate) and put the reasoning one tap away. A blank panel helps nobody mid-run.
- **Wiki sprites for Courtyard curios** are before/after composites with a red divider. They're auto-cropped to the left (unused) state by finding the divider column. Without that, OG cards and cards on the site show two curios.
- **Region tiles** reuse a signature curio sprite per region, desaturated until selected. That's cheaper than commissioning art, and it still reads as the game.
- **Fonts.** `DwarvenAxe` (MyFonts webfont from v1) is woff2/woff only now. eot/ttf were dropped.

## 6. Ways to adapt it

- **Other game, same shape** (pick a context, show a loadout and reference cards): replace `src/data/*`, keep the picker, the `:has()` visibility and the state module.
- **More dimensions** (e.g. difficulty): add a radio group, a `data-<dim>` attribute and one more generated rule set. `pickState` takes one more field.
- **Search/filter:** add a text input and a tiny script toggling `hidden` on `.curio` by name. Everything is already in the DOM.
- **No custom domain:** set `site: 'https://<user>.github.io'` and keep `base`.
