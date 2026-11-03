import type { LengthId, Region, RegionId } from './types';

export const LENGTHS: LengthId[] = ['short', 'medium', 'long'];

// Order = display order. v1 had the first four; DLC regions are appended.
export const REGIONS: Region[] = [
  { id: 'ruins', label: 'Ruins', lengths: LENGTHS },
  { id: 'warrens', label: 'Warrens', lengths: LENGTHS },
  { id: 'weald', label: 'Weald', lengths: LENGTHS },
  { id: 'cove', label: 'Cove', lengths: LENGTHS },
];

export const DEFAULT_REGION: RegionId = 'ruins';
export const DEFAULT_LENGTH: LengthId = 'short';
