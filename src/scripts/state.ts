// Picker state: region + length (base regions) + quest/mode per DLC area.
//
// Both functions are serialized with .toString() and inlined into the page
// (right after the radios, so the saved choice is applied before first paint).
// Keep them self-contained: no imports, no references to module scope.
//
// URL hash: #<region>/<length>  for base regions   (#weald/long)
//           #<region>/<mode>    for DLC areas      (#courtyard/epic-viscount)
//
// Persistence: v1 (redux-persist 1.5) stored
//   localStorage['reduxPersist:mission'] = '{"selectedLocation":"weald","selectedLength":"long"}'
// We read that when our own key is missing, and never touch it.

export interface State {
  region: string;
  length: string;
  /** Selected quest/mode per DLC area, e.g. { courtyard: 'epic-baron' }. */
  modes: Record<string, string>;
}

export interface Config {
  key: string;
  legacyKey: string;
  regions: string[];
  lengths: string[];
  /** DLC area -> its quest/mode ids (first = default). */
  modes: Record<string, string[]>;
  fallback: { region: string; length: string };
  /** Region pages (/weald/) pin the region: only the hash can override it. */
  pinnedRegion?: string;
}

/** Priority: URL hash > v2 key > v1 redux-persist key > fallback. Invalid values fall back per field. */
export function pickState(hash: string, getItem: (k: string) => string | null, cfg: Config): State {
  const read = (k: string) => {
    try {
      const v = JSON.parse(getItem(k) || 'null');
      return v && typeof v === 'object' ? v : null;
    } catch (e) {
      return null;
    }
  };
  const ok = (list: string[], ...vals: unknown[]) =>
    vals.find((v) => typeof v === 'string' && list.indexOf(v) !== -1) as string | undefined;
  const parts = hash.replace(/^#\/?/, '').split('/');
  const hashRegion = parts[0];
  const hashSecond = parts[1];
  const v2 = read(cfg.key);
  const v1 = v2 ? null : read(cfg.legacyKey);
  const saved = v2 || (v1 ? { region: v1.selectedLocation, length: v1.selectedLength } : {});
  const savedModes = saved.modes && typeof saved.modes === 'object' ? saved.modes : {};

  const region = ok(cfg.regions, hashRegion, cfg.pinnedRegion || saved.region) || cfg.fallback.region;
  const modes: Record<string, string> = {};
  for (const area in cfg.modes) {
    const list = cfg.modes[area];
    modes[area] = ok(list, hashRegion === area ? hashSecond : undefined, savedModes[area]) || list[0];
  }
  return {
    region,
    length: ok(cfg.lengths, cfg.modes[hashRegion] ? undefined : hashSecond, saved.length) || cfg.fallback.length,
    modes,
  };
}

/** Applies the picked state to the radios, persists changes, keeps the hash in sync. */
export function boot(cfg: Config): void {
  let store: Storage | null = null;
  try {
    store = window.localStorage;
  } catch (e) {
    // blocked storage: state just isn't remembered
  }
  const get = (k: string) => {
    try {
      return store ? store.getItem(k) : null;
    } catch (e) {
      return null;
    }
  };
  const check = (name: string, value: string) => {
    const el = document.querySelector<HTMLInputElement>('input[name="' + name + '"][value="' + value + '"]');
    if (el) el.checked = true;
  };
  const value = (name: string) => {
    const el = document.querySelector<HTMLInputElement>('input[name="' + name + '"]:checked');
    return el ? el.value : '';
  };
  const apply = () => {
    // @ts-ignore pickState is inlined next to boot
    const s: State = pickState(location.hash, get, cfg);
    check('region', s.region);
    check('length', s.length);
    for (const area in s.modes) check('mode-' + area, s.modes[area]);
  };
  const isPickerInput = (n: string) => n === 'region' || n === 'length' || n.indexOf('mode-') === 0;

  apply();

  document.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement;
    if (!isPickerInput(t.name)) return;
    const modes: Record<string, string> = {};
    for (const area in cfg.modes) modes[area] = value('mode-' + area);
    const current: State = { region: value('region'), length: value('length'), modes };
    try {
      if (store) store.setItem(cfg.key, JSON.stringify(current));
    } catch (e) {
      // ignore
    }
    const second = cfg.modes[current.region] ? modes[current.region] : current.length;
    history.replaceState(null, '', '#' + current.region + '/' + second);
  });
  // Back/forward, pasted links, or hand-edited hashes.
  window.addEventListener('hashchange', apply);
}
