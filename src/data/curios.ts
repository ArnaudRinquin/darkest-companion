import { legacyCurios } from './curios.generated';
import type { Curio, RegionId } from './types';

// Corrections to v1 data, keyed by id. Each one cites its source.
const fixes: Record<string, Partial<Curio>> = {};

// DLC + special curios, sourced from darkestdungeon.wiki.gg (see SOURCES.md).
const dlcCurios: Curio[] = [];

export const CURIOS: Curio[] = [
  ...legacyCurios.map((c) => (fixes[c.id] ? { ...c, ...fixes[c.id] } : c)),
  ...dlcCurios,
];

export const curiosFor = (region: Curio['region']) => CURIOS.filter((c) => c.region === region);

/** Base-game regions get the shared curios too. */
export const hasSharedCurios = (region: RegionId) => ['ruins', 'warrens', 'weald', 'cove'].includes(region);
