export type RegionId = 'ruins' | 'warrens' | 'weald' | 'cove' | 'courtyard' | 'farmstead';
export type LengthId = 'short' | 'medium' | 'long';
export type DlcId = 'crimson-court' | 'color-of-madness';

export type ActivatorId =
  | 'nothing'
  | 'antivenom'
  | 'bandage'
  | 'dogTreats'
  | 'holyWater'
  | 'medicinalHerb'
  | 'shovel'
  | 'skeletonKey'
  | 'torch'
  | 'laudanum';

export type ProvisionId =
  | 'firewood'
  | 'food'
  | 'shovels'
  | 'antivenoms'
  | 'bandages'
  | 'herbs'
  | 'keys'
  | 'holyWaters'
  | 'torches'
  | 'laudanum';

export interface Outcome {
  /** Percent, 0-100. */
  chance: number;
  label: string;
  /** Loot multiplier ("x2"), when the source gives one. */
  amount?: number;
}

export interface CurioOption {
  activator: ActivatorId;
  outcomes: Outcome[];
}

export interface Curio {
  id: string;
  name: string;
  /** 'shared' = found in every base-game region; 'special' = quest/boss/rare. */
  region: RegionId | 'shared' | 'special';
  /** Path under public/icons/. */
  icon?: string;
  description?: string;
  /** Where a 'special' curio shows up. */
  where?: string;
  options: CurioOption[];
  /** URLs. Empty = ported from v1 (community-sourced, unverified). */
  sources?: string[];
  /** Set when the data is incomplete or the source is ambiguous. Shown in the UI. */
  unsure?: string;
}

export interface Region {
  id: RegionId;
  label: string;
  dlc?: DlcId;
  lengths: LengthId[];
}

export interface Tip {
  label: string;
  details: string;
}

export interface RegionTips {
  effective: Tip[];
  ineffective: Tip[];
  dangers: Tip[];
}
