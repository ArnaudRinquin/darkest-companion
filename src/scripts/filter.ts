// Curio search + "I have <item>" filter. Progressive enhancement: without JS
// every curio stays visible. Region switching is CSS; this only adds `hidden`.
const search = document.querySelector<HTMLInputElement>('#curio-search');
const noMatch = document.querySelector<HTMLElement>('.no-match');
const curios = [...document.querySelectorAll<HTMLElement>('.curio')];
const groups = [...document.querySelectorAll<HTMLElement>('.curio-group')];

function apply() {
  const q = (search?.value ?? '').trim().toLowerCase();
  const item = document.querySelector<HTMLInputElement>('input[name="item"]:checked')?.value ?? '';
  for (const c of curios) {
    const items = (c.dataset.items ?? '').split(' ');
    c.hidden = (!!q && !(c.dataset.name ?? '').includes(q)) || (!!item && !items.includes(item));
    for (const o of c.querySelectorAll<HTMLElement>('.option')) o.classList.toggle('match', !!item && o.dataset.activator === item);
  }
  for (const g of groups) g.classList.toggle('empty', ![...g.querySelectorAll<HTMLElement>('.curio')].some((c) => !c.hidden));
  // "no match" only counts groups visible for the current region (CSS-hidden ones have no offsetParent).
  if (noMatch) noMatch.hidden = groups.some((g) => !g.classList.contains('empty') && g.offsetParent !== null);
}

search?.addEventListener('input', apply);
document.addEventListener('change', (e) => {
  const t = e.target as HTMLInputElement;
  if (t.name === 'item' || t.name === 'region') apply();
});
apply();
