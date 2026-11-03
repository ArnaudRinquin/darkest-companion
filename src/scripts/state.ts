// Picker state: which region + length is selected.
//
// Both functions are serialized with .toString() and inlined into the page
// (right after the radios, so the saved choice is applied before first paint).
// Keep them self-contained: no imports, no references to module scope.
//
// Persistence: v1 (redux-persist 1.5) stored
//   localStorage['reduxPersist:mission'] = '{"selectedLocation":"weald","selectedLength":"long"}'
// We read that when our own key is missing, and never touch it.

export interface State {
  region: string;
  length: string;
}

export interface Config {
  key: string;
  legacyKey: string;
  regions: string[];
  lengths: string[];
  fallback: State;
  /** Region pages (/weald/) pin the region: only the hash can override it. */
  pinnedRegion?: string;
}

/** Priority: URL hash (#weald/long) > v2 key > v1 redux-persist key > fallback. Invalid values fall back per field. */
export function pickState(hash: string, getItem: (k: string) => string | null, cfg: Config): State {
  const read = (k: string) => {
    try {
      const v = JSON.parse(getItem(k) || 'null');
      return v && typeof v === 'object' ? v : null;
    } catch (e) {
      return null;
    }
  };
  const parts = hash.replace(/^#\/?/, '').split('/');
  const fromHash = { region: parts[0], length: parts[1] };
  const v2 = read(cfg.key);
  const v1 = v2 ? null : read(cfg.legacyKey);
  const saved = v2 || (v1 ? { region: v1.selectedLocation, length: v1.selectedLength } : {});
  const ok = (list: string[], ...vals: unknown[]) => vals.find((v) => typeof v === 'string' && list.indexOf(v) !== -1) as string | undefined;
  return {
    region: ok(cfg.regions, fromHash.region, cfg.pinnedRegion || saved.region) || cfg.fallback.region,
    length: ok(cfg.lengths, fromHash.length, saved.length) || cfg.fallback.length,
  };
}

/** Applies the picked state to the radios and persists changes. */
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
  // @ts-ignore pickState is inlined next to boot
  const state: State = pickState(location.hash, get, cfg);
  const radio = (name: string, value: string) =>
    document.querySelector<HTMLInputElement>('input[name="' + name + '"][value="' + value + '"]');
  const r = radio('region', state.region);
  const l = radio('length', state.length);
  if (r) r.checked = true;
  if (l) l.checked = true;

  document.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.name !== 'region' && t.name !== 'length') return;
    const current = {
      region: (document.querySelector<HTMLInputElement>('input[name="region"]:checked') || r)!.value,
      length: (document.querySelector<HTMLInputElement>('input[name="length"]:checked') || l)!.value,
    };
    try {
      if (store) store.setItem(cfg.key, JSON.stringify(current));
    } catch (e) {
      // ignore
    }
    history.replaceState(null, '', '#' + current.region + '/' + current.length);
  });
}
