import type { LengthId, Region, RegionId } from './types';

export const LENGTHS: LengthId[] = ['short', 'medium', 'long'];

// Order = display order. v1 had the first four; DLC regions are appended.
export const REGIONS: Region[] = [
  { id: 'ruins', label: 'Ruins', lengths: LENGTHS },
  { id: 'warrens', label: 'Warrens', lengths: LENGTHS },
  { id: 'weald', label: 'Weald', lengths: LENGTHS },
  { id: 'cove', label: 'Cove', lengths: LENGTHS },
  {
    id: 'courtyard',
    label: 'Courtyard',
    dlc: 'crimson-court',
    lengths: [],
    lengthNote: 'Fixed quests: Burn the Hives (short), Gather the Blood, boss quests (epic, no firewood).',
  },
  {
    id: 'farmstead',
    label: 'Farmstead',
    dlc: 'color-of-madness',
    lengths: [],
    lengthNote: 'Wave-based: Apprentice, Veteran (The Miller) or Endless Harvest. No firewood given.',
  },
];

export const DLC_LABELS = { 'crimson-court': 'The Crimson Court', 'color-of-madness': 'The Color of Madness' } as const;

export const DEFAULT_REGION: RegionId = 'ruins';
export const DEFAULT_LENGTH: LengthId = 'short';
