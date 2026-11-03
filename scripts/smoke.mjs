// Browser smoke test against a running preview (pnpm build && pnpm preview).
// Uses the locally installed Chrome. Usage: node scripts/smoke.mjs [baseUrl] [shotsDir]
import { chromium, devices } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:4321/darkest-companion/';
const shots = process.argv[3];
const browser = await chromium.launch({ channel: 'chrome' });
let failed = 0;
const check = (name, ok, extra = '') => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name} ${extra}`);
  if (!ok) failed++;
};
const visibleTitles = (page) =>
  page.$$eval('.curio-group', (gs) => gs.filter((g) => g.offsetParent).map((g) => g.querySelector('h3').textContent));

// 1. v1 saved state is migrated
{
  const ctx = await browser.newContext(devices['iPhone 13']);
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('reduxPersist:mission', '{"selectedLocation":"cove","selectedLength":"medium"}');
      sessionStorage.setItem('seeded', '1');
    }
  });
  await page.goto(url);
  check('v1 region restored', await page.isChecked('#region-cove'));
  check('v1 length restored', await page.isChecked('#length-medium'));
  check('only cove curios', JSON.stringify(await visibleTitles(page)) === '["Cove curios","Common curios (all base regions)","Special & quest curios"]', JSON.stringify(await visibleTitles(page)));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check('no horizontal scroll on mobile', overflow <= 0, `(${overflow}px)`);
  if (shots) await page.screenshot({ path: `${shots}/mobile.png`, fullPage: false });

  // 2. switching persists to v2 and leaves v1 alone
  await page.click('label:has(#region-warrens)');
  await page.click('label:has(#length-long)');
  const v2 = await page.evaluate(() => localStorage.getItem('darkest-companion:v2'));
  check('v2 saved', v2 === '{"region":"warrens","length":"long"}', v2);
  check('v1 untouched', (await page.evaluate(() => localStorage.getItem('reduxPersist:mission'))).includes('cove'));
  check('hash updated', page.url().endsWith('#warrens/long'), page.url());
  await page.goto(url);
  check('v2 restored after reload', await page.isChecked('#region-warrens'));
  check('visible loadout matches', (await page.$$eval('.loadout', (ls) => ls.filter((l) => l.offsetParent).length)) === 1);
  await ctx.close();
}

// 2b. search + item filter
{
  const ctx = await browser.newContext(devices['iPhone 13']);
  const page = await ctx.newPage();
  await page.goto(url + '#weald/short');
  const visible = () => page.$$eval('.curio', (cs) => cs.filter((c) => c.offsetParent).map((c) => c.dataset.name));
  await page.fill('#curio-search', 'tree');
  check('search filters', JSON.stringify(await visible()) === '["old tree"]', JSON.stringify(await visible()));
  await page.fill('#curio-search', '');
  await page.click('label.chip:has(input[value="shovel"])');
  const shovel = await visible();
  check('item filter keeps only shovel curios', shovel.length > 0 && (await page.$$eval('.curio', (cs) => cs.filter((c) => c.offsetParent).every((c) => c.dataset.items.split(' ').includes('shovel')))), JSON.stringify(shovel));
  await page.fill('#curio-search', 'zzz');
  check('no-match message', await page.isVisible('.no-match'));
  await ctx.close();
}

// 2c. picker height doesn't change between regions (no layout shift)
for (const vp of [{ width: 1280, height: 800 }, { width: 820, height: 900 }, devices['iPhone SE'].viewport]) {
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  await page.goto(url);
  const heights = new Set();
  for (const r of ['ruins', 'warrens', 'weald', 'cove', 'courtyard', 'farmstead']) {
    const tile = await page.$(`label:has(#region-${r})`);
    if (!tile) continue;
    await tile.click();
    heights.add(await page.$eval('.picker', (e) => e.offsetHeight));
  }
  check(`stable picker height @${vp.width}px`, heights.size === 1, JSON.stringify([...heights]));
  check(`no horizontal scroll @${vp.width}px`, (await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0);
  await ctx.close();
}

// 3. region page pins the region; keyboard works
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(url + 'weald/');
  check('region page pins weald', await page.isChecked('#region-weald'));
  check('region page title', (await page.title()).startsWith('Weald'), await page.title());
  await page.focus('#region-weald');
  await page.keyboard.press('ArrowRight');
  check('arrow key moves selection', await page.isChecked('#region-cove'));
  if (shots) await page.screenshot({ path: `${shots}/desktop.png` });
  await ctx.close();
}

await browser.close();
process.exit(failed ? 1 : 0);
