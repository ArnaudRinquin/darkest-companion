import type { LengthId, ProvisionId, RegionId } from './types';

/** Shop items. cost in gold, stack = max per inventory slot. */
export const PROVISIONS: Record<ProvisionId, { label: string; cost: number; stack: number; icon: string }> = {
  firewood: { label: 'Firewood', cost: 0, stack: 1, icon: 'provisions/Firewood.png' },
  food: { label: 'Food', cost: 75, stack: 12, icon: 'provisions/Food_3.png' },
  shovels: { label: 'Shovels', cost: 250, stack: 4, icon: 'provisions/Shovel.png' },
  antivenoms: { label: 'Antivenoms', cost: 150, stack: 6, icon: 'provisions/Antivenom.png' },
  bandages: { label: 'Bandages', cost: 150, stack: 6, icon: 'provisions/Bandage.png' },
  herbs: { label: 'Medicinal Herbs', cost: 200, stack: 6, icon: 'provisions/Medicinal_Herbs.png' },
  keys: { label: 'Skeleton Keys', cost: 200, stack: 6, icon: 'provisions/Skeleton_Key.png' },
  holyWaters: { label: 'Holy Waters', cost: 150, stack: 6, icon: 'provisions/Holy_Water.png' },
  torches: { label: 'Torches', cost: 75, stack: 8, icon: 'provisions/Torch.png' },
  laudanum: { label: 'Laudanum', cost: 100, stack: 6, icon: 'provisions/Laudanum.png' },
};

/** Inventory display order (v1 order). */
export const PROVISION_ORDER: ProvisionId[] = [
  'firewood', 'food', 'shovels', 'antivenoms', 'bandages', 'herbs', 'keys', 'holyWaters', 'torches', 'laudanum',
];

type Loadout = Partial<Record<ProvisionId, number>>;

// Recommended loadouts from @damp's community spreadsheet (v1 source):
// https://docs.google.com/spreadsheets/d/1e9VBtUO0tY2l58DSUb_JHnULDuAhziqnOCQH1VS4GtY/edit#gid=61256338
export const LOADOUTS: Partial<Record<RegionId, Record<LengthId, Loadout>>> = {
  ruins: {
    short: { firewood: 0, food: 12, torches: 8, shovels: 2, herbs: 1, holyWaters: 2, bandages: 1, antivenoms: 0, keys: 1 },
    medium: { firewood: 1, food: 18, torches: 13, shovels: 3, herbs: 2, holyWaters: 3, bandages: 2, antivenoms: 0, keys: 2 },
    long: { firewood: 2, food: 20, torches: 16, shovels: 4, herbs: 3, holyWaters: 4, bandages: 3, antivenoms: 0, keys: 3 },
  },
  warrens: {
    short: { firewood: 0, food: 12, torches: 10, shovels: 2, herbs: 3, holyWaters: 2, bandages: 1, antivenoms: 0, keys: 2 },
    medium: { firewood: 1, food: 18, torches: 16, shovels: 3, herbs: 4, holyWaters: 3, bandages: 2, antivenoms: 1, keys: 3 },
    long: { firewood: 2, food: 20, torches: 20, shovels: 4, herbs: 5, holyWaters: 4, bandages: 3, antivenoms: 1, keys: 3 },
  },
  weald: {
    short: { firewood: 0, food: 12, torches: 8, shovels: 3, herbs: 1, holyWaters: 1, bandages: 2, antivenoms: 2, keys: 1 },
    medium: { firewood: 1, food: 18, torches: 13, shovels: 5, herbs: 2, holyWaters: 2, bandages: 3, antivenoms: 3, keys: 2 },
    long: { firewood: 2, food: 20, torches: 16, shovels: 6, herbs: 2, holyWaters: 3, bandages: 4, antivenoms: 4, keys: 2 },
  },
  cove: {
    short: { firewood: 0, food: 12, torches: 8, shovels: 3, herbs: 2, holyWaters: 0, bandages: 2, antivenoms: 0, keys: 1 },
    medium: { firewood: 1, food: 18, torches: 13, shovels: 5, herbs: 3, holyWaters: 1, bandages: 4, antivenoms: 0, keys: 2 },
    long: { firewood: 2, food: 20, torches: 16, shovels: 6, herbs: 4, holyWaters: 1, bandages: 6, antivenoms: 0, keys: 3 },
  },
};

/**
 * DLC areas: the wiki gives guidance, not quantities. We show the guidance
 * instead of inventing a loadout.
 */
export const PROVISION_NOTES: Partial<Record<RegionId, { tips: string[]; sources: string[] }>> = {
  courtyard: {
    tips: [
      'One stack of torches should be enough.',
      'Bring a reserve of The Blood: several curios and the Crimson Curse need it.',
      'Holy water, bandages, shovels and herbs are useful; antivenom less so.',
      'No firewood on epic (boss) quests. A shovel on a Wine Crate is the only Courtyard firewood.',
      'Avoid using skeleton keys on chests: they swap trinkets for random loot.',
    ],
    sources: ['https://darkestdungeon.wiki.gg/wiki/The_Courtyard'],
  },
  farmstead: {
    tips: [
      'No firewood is given: you camp at the Miller\'s Hearth.',
      'Food (for camping) and skeleton keys (Stockpile) are the most useful.',
      'No need for torches or shovels.',
    ],
    sources: ['https://darkestdungeon.wiki.gg/wiki/Farmstead'],
  },
};

/** Food icon changes with stack size, like in game. */
export function provisionIcon(id: ProvisionId, quantity: number): string {
  if (id !== 'food') return PROVISIONS[id].icon;
  return quantity < 6 ? 'provisions/Food_1.png' : quantity < 12 ? 'provisions/Food_2.png' : 'provisions/Food_3.png';
}

/** Splits a quantity into inventory slots, e.g. 13 torches (stack 8) -> [8, 5]. */
export function stacks(quantity: number, stackSize: number): number[] {
  if (quantity <= 0) return [];
  const full = Math.floor(quantity / stackSize);
  const rest = quantity % stackSize;
  return [...Array(full).fill(stackSize), ...(rest ? [rest] : [])];
}

export function loadoutCost(loadout: Loadout): number {
  return Object.entries(loadout).reduce((sum, [id, q]) => sum + PROVISIONS[id as ProvisionId].cost * (q ?? 0), 0);
}
