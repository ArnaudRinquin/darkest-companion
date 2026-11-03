import { dlcCurios } from './curios.dlc';
import { legacyCurios } from './curios.generated';
import type { ActivatorId, Curio, Outcome, RegionId } from './types';

const WIKI = 'https://darkestdungeon.wiki.gg/wiki/Curios';

type Fix = ((c: Curio) => Curio) | null;

/** Replace one option's outcomes. */
const set =
  (activator: ActivatorId, outcomes: Outcome[]) =>
  (c: Curio): Curio => ({
    ...c,
    options: c.options.map((o) => (o.activator === activator ? { ...o, outcomes } : o)),
  });
/** Relabel outcomes, keeping odds. */
const relabel =
  (map: Record<string, string>) =>
  (c: Curio): Curio => ({
    ...c,
    options: c.options.map((o) => ({ ...o, outcomes: o.outcomes.map((x) => ({ ...x, label: map[x.label] ?? x.label })) })),
  });
const pipe =
  (...fns: ((c: Curio) => Curio)[]) =>
  (c: Curio): Curio =>
    fns.reduce((acc, f) => f(acc), { ...c, sources: [WIKI] } as Curio);

// Corrections to v1 data, checked against the wiki in Nov 2026 (data/wiki-research-2026-11.json).
// null = drop the v1 entry.
const fixes: Record<string, Fix> = {
  'eldritch-altar': pipe(
    set('nothing', [
      { chance: 40, label: 'Stress +25' },
      { chance: 10, label: 'Purge a negative quirk' },
      { chance: 50, label: 'Nothing' },
    ]),
  ),
  'ruins-bookshelf': pipe(relabel({ 'Stress +50': 'Stress +15', 'Gain a negative quirk or disease': 'Gain random negative quirk' })),
  'ruins-confession-booth': pipe(relabel({ 'Stress +20': 'Stress +15' })),
  'ruins-suit-of-armor': pipe(relabel({ 'Buff 10 DODGE, 10% PROT until camp': 'Buff 10 DODGE, 15% PROT until camp' })),
  // v1 had two copies (Ruins + Warrens); it's one curio found in every base region.
  'ruins-stack-of-books': null,
  'warrens-stack-of-books': (c) => ({
    ...c,
    id: 'stack-of-books',
    region: 'shared',
    unsure:
      'The wiki also lists a 16.7% Journal Entry outcome; these odds leave it out and are scaled to 100%.',
    sources: [WIKI],
  }),
  'weald-ancient-coffin': (c) =>
    pipe(
      set('nothing', [
        c.options[0].outcomes[0],
        { chance: 8.3, label: 'Gain Weald Adventurer positive quirk' },
        { chance: 8.3, label: 'Gain Weald Explorer positive quirk' },
        { chance: 33.3, label: 'Nothing' },
      ]),
    )(c),
  'weald-beast-carcass': pipe(
    set('nothing', [
      { chance: 42.9, label: 'Food' },
      { chance: 19, label: 'random disease' },
      { chance: 9.5, label: 'Rabies disease' },
      { chance: 14.3, label: 'Gain Zoophobia negative quirk' },
      { chance: 14.3, label: 'Nothing' },
    ]),
  ),
  'cove-bas-relief': pipe(
    set('nothing', [
      { chance: 66.7, label: 'Gain random positive quirk' },
      { chance: 22.2, label: 'Gain random negative quirk' },
      { chance: 11.1, label: 'random disease' },
    ]),
  ),
  'cove-brackish-tidepool': (c) =>
    pipe(
      set('antivenom', [
        { chance: 50, label: 'Heal 5 HP' },
        { chance: 50, label: 'Stress heal 6' },
      ]),
    )({ ...c, name: 'Brackish Tide Pool' }),
  'cove-fish-idol': pipe(
    relabel({ 'Debuff -12 DODGE, 3 round Marked until camp': 'Debuff -12 DODGE until camp' }),
    set('holyWater', [{ chance: 100, label: 'Buff 18% DMG until camp' }]),
  ),
  'cove-ships-figurehead': pipe(
    set('nothing', [
      { chance: 66.7, label: 'Stress heal 25-30' },
      { chance: 33.3, label: 'Buff 20% DMG, 4 SPD until camp' },
    ]),
  ),
  'cove-giant-fish-carcass': (c) =>
    pipe(
      (x) => ({
        ...x,
        options: x.options.map((o) => ({
          ...o,
          outcomes: o.outcomes.map((y) => (y.label === 'Bleed' ? { ...y, chance: 5.6 } : y)),
        })),
      }),
      set('medicinalHerb', [{ chance: 100, label: 'Gems or trinkets ×2, gems or gold, supplies ×2' }]),
    )({ ...c, name: 'Fish Carcass' }),
  'warrens-dinner-cart': pipe(
    set('nothing', [
      { chance: 37.5, label: 'Food + gold or trinket' },
      { chance: 25, label: 'Blight' },
      { chance: 12.5, label: 'The Black Plague disease' },
      { chance: 25, label: 'Nothing' },
    ]),
  ),
  'warrens-makeshift-dining-table': (c) =>
    pipe(relabel({ 'random disease': 'Tapeworm disease', 'Gold, food or trinket': 'Food + gold or supplies' }))({
      ...c,
      name: 'Makeshift Dining Table',
    }),
  'warrens-moonshine-barrel': pipe(relabel({ 'Alcoholism disease': 'Gain Tippler negative quirk' })),
  'warrens-occult-scrawlings': (c) =>
    pipe((x) => ({
      ...x,
      options: x.options.map((o) => ({
        ...o,
        outcomes: o.outcomes.map((y) => (y.chance === 17.6 ? { ...y, chance: 16.7 } : y)),
      })),
    }))(c),
  'warrens-sacrifial-stone': (c) =>
    pipe(
      set('nothing', [
        c.options[0].outcomes[0],
        c.options[0].outcomes[1],
        { chance: 12.5, label: 'Gain Warrens Explorer positive quirk' },
        { chance: 12.5, label: 'Gain Warrens Scrounger positive quirk' },
      ]),
    )({ ...c, id: 'warrens-sacrificial-stone', name: 'Sacrificial Stone' }),
  'ruins-decorative-urn': (c) => ({ ...c, unsure: 'v1 odds are rounded (they add up to 98%); not yet checked against the wiki.' }),
  sack: pipe(relabel({ 'Gold or gems': 'Gold' })),
  'heirloom-chest': (c) => ({
    ...c,
    sources: [WIKI],
    unsure:
      'The wiki lists two variants: one gives heirlooms (key ×4, antivenom ×3), the other any loot (key ×3, shovel 66.7% ×2). v1 merged them.',
  }),
};

export const CURIOS: Curio[] = [
  ...legacyCurios.flatMap((c) => {
    if (!(c.id in fixes)) return [c];
    const f = fixes[c.id];
    return f ? [f(c)] : [];
  }),
  ...dlcCurios,
];

export const curiosFor = (region: Curio['region']) => CURIOS.filter((c) => c.region === region);

/** Base-game regions get the shared curios too. */
export const hasSharedCurios = (region: RegionId) => ['ruins', 'warrens', 'weald', 'cove'].includes(region);
