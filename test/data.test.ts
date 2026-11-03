import { describe, expect, it } from 'vitest';
import legacy from './fixtures/legacy.json';
import { ACTIVATORS } from '../src/data/activators';
import { CURIOS, curiosFor } from '../src/data/curios';
import { LOADOUTS, PROVISIONS, loadoutCost, stacks } from '../src/data/provisions';
import { LENGTHS, REGIONS } from '../src/data/regions';
import { existsSync } from 'node:fs';

const BASE = ['ruins', 'warrens', 'weald', 'cove'] as const;
const norm = (s: string) => s.toLowerCase();
// v1 names corrected against the wiki (see fixes in src/data/curios.ts).
const RENAMED: Record<string, string> = {
  'Sacrifial Stone': 'Sacrificial Stone',
  'Brackish Tidepool': 'Brackish Tide Pool',
  'Giant Fish Carcass': 'Fish Carcass',
};

describe('v1 parity', () => {
  it('every v1 curio is still there, per region, with the same options', () => {
    for (const r of BASE) {
      const now = [...curiosFor(r), ...curiosFor('shared')];
      for (const old of (legacy.curios as any)[r]) {
        const c = now.find((x) => norm(x.name) === norm(RENAMED[old.name] ?? old.name));
        expect(c, `${r}: ${old.name}`).toBeTruthy();
        expect(c!.options.length, `${r}: ${old.name} options`).toBe(old.options.length);
      }
    }
  });

  it('provision quantities and costs match v1', () => {
    for (const r of BASE)
      for (const l of LENGTHS) {
        const { totalCost, ...q } = (legacy.provisions as any)[r][l];
        expect(LOADOUTS[r]![l]).toEqual(q);
        expect(loadoutCost(LOADOUTS[r]![l])).toBe(totalCost);
      }
  });
});

describe('data integrity', () => {
  it('ids are unique', () => {
    const ids = CURIOS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('referenced icons exist', () => {
    const icons = [
      ...CURIOS.flatMap((c) => (c.icon ? [c.icon] : [])),
      ...CURIOS.flatMap((c) => c.options.map((o) => ACTIVATORS[o.activator].icon)),
      ...Object.values(LOADOUTS).flatMap((ls) =>
        Object.values(ls!).flatMap((l) => Object.keys(l).map((id) => PROVISIONS[id as keyof typeof PROVISIONS].icon)),
      ),
    ];
    for (const i of new Set(icons)) expect(existsSync(`public/icons/${i}`), i).toBe(true);
  });

  it('every region in REGIONS is valid', () => {
    for (const c of CURIOS)
      if (!['shared', 'special'].includes(c.region)) expect(REGIONS.map((r) => r.id)).toContain(c.region);
  });

  it('known v1 odds issues are the only ones not adding up to ~100%', () => {
    const off = CURIOS.flatMap((c) =>
      c.options
        .filter((o) => Math.abs(o.outcomes.reduce((s, x) => s + x.chance, 0) - 100) > 1.5)
        .map((o) => `${c.id}:${o.activator}`),
    ).filter((k) => !CURIOS.find((c) => k.startsWith(c.id + ':'))?.unsure);
    expect(off).toEqual([]);
  });
});

describe('stacks', () => {
  it('splits like the game inventory', () => {
    expect(stacks(0, 8)).toEqual([]);
    expect(stacks(12, 12)).toEqual([12]);
    expect(stacks(13, 8)).toEqual([8, 5]);
    expect(stacks(16, 8)).toEqual([8, 8]);
    expect(stacks(2, 1)).toEqual([1, 1]);
  });
});
