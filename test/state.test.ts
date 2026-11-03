import { describe, expect, it } from 'vitest';
import { pickState, type Config } from '../src/scripts/state';

const cfg: Config = {
  key: 'darkest-companion:v2',
  legacyKey: 'reduxPersist:mission',
  regions: ['ruins', 'warrens', 'weald', 'cove', 'courtyard'],
  lengths: ['short', 'medium', 'long'],
  modes: { courtyard: ['burn-the-hives', 'epic-baron', 'epic-viscount'] },
  fallback: { region: 'ruins', length: 'short' },
};
const def = { modes: { courtyard: 'burn-the-hives' } };
const store = (o: Record<string, string>) => (k: string) => o[k] ?? null;

describe('pickState', () => {
  it('defaults with empty storage', () => {
    expect(pickState('', store({}), cfg)).toEqual({ region: 'ruins', length: 'short', ...def });
  });

  it('migrates v1 redux-persist state', () => {
    const v1 = { 'reduxPersist:mission': '{"selectedLocation":"weald","selectedLength":"long"}' };
    expect(pickState('', store(v1), cfg)).toEqual({ region: 'weald', length: 'long', ...def });
  });

  it('prefers v2 over v1', () => {
    const s = {
      'reduxPersist:mission': '{"selectedLocation":"weald","selectedLength":"long"}',
      'darkest-companion:v2': '{"region":"cove","length":"medium"}',
    };
    expect(pickState('', store(s), cfg)).toEqual({ region: 'cove', length: 'medium', ...def });
  });

  it('falls back per field on invalid or corrupt values', () => {
    expect(pickState('', store({ 'reduxPersist:mission': '{"selectedLocation":"moon","selectedLength":"long"}' }), cfg)).toEqual({ region: 'ruins', length: 'long', ...def });
    expect(pickState('', store({ 'reduxPersist:mission': 'not json' }), cfg)).toEqual({ ...cfg.fallback, ...def });
    expect(pickState('', store({ 'reduxPersist:mission': '42' }), cfg)).toEqual({ ...cfg.fallback, ...def });
  });

  it('hash wins, and accepts partial hashes', () => {
    const v2 = { 'darkest-companion:v2': '{"region":"cove","length":"medium"}' };
    expect(pickState('#warrens/long', store(v2), cfg)).toEqual({ region: 'warrens', length: 'long', ...def });
    expect(pickState('#warrens', store(v2), cfg)).toEqual({ region: 'warrens', length: 'medium', ...def });
    expect(pickState('#bogus/also-bogus', store(v2), cfg)).toEqual({ region: 'cove', length: 'medium', ...def });
  });

  it('pinned region (region pages) beats storage but not the hash', () => {
    const v2 = { 'darkest-companion:v2': '{"region":"cove","length":"long"}' };
    const pinned = { ...cfg, pinnedRegion: 'weald' };
    expect(pickState('', store(v2), pinned)).toEqual({ region: 'weald', length: 'long', ...def });
    expect(pickState('#ruins', store(v2), pinned)).toEqual({ region: 'ruins', length: 'long', ...def });
  });

  it('DLC hash selects the quest, keeps the saved length', () => {
    const v2 = { 'darkest-companion:v2': '{"region":"weald","length":"long"}' };
    expect(pickState('#courtyard/epic-viscount', store(v2), cfg)).toEqual({
      region: 'courtyard',
      length: 'long',
      modes: { courtyard: 'epic-viscount' },
    });
  });

  it('restores saved quest per DLC area, ignores invalid ones', () => {
    const v2 = { 'darkest-companion:v2': '{"region":"courtyard","length":"short","modes":{"courtyard":"epic-baron"}}' };
    expect(pickState('', store(v2), cfg).modes).toEqual({ courtyard: 'epic-baron' });
    const bad = { 'darkest-companion:v2': '{"region":"courtyard","length":"short","modes":{"courtyard":"nope"}}' };
    expect(pickState('', store(bad), cfg).modes).toEqual({ courtyard: 'burn-the-hives' });
  });

  it('survives a throwing storage', () => {
    const boom = () => {
      throw new Error('SecurityError');
    };
    expect(pickState('', boom, cfg)).toEqual({ ...cfg.fallback, ...def });
  });

  it('is self-contained so it can be inlined with toString()', () => {
    const fn = new Function(`${pickState.toString()}; return pickState;`)();
    expect(fn('#cove/long', () => null, cfg)).toEqual({ region: 'cove', length: 'long', ...def });
  });
});
