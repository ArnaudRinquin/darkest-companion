import type { ActivatorId } from './types';

export const ACTIVATORS: Record<ActivatorId, { label: string; icon: string }> = {
  nothing: { label: 'Bare hands', icon: 'redCross.png' },
  antivenom: { label: 'Antivenom', icon: 'provisions/Antivenom.png' },
  bandage: { label: 'Bandage', icon: 'provisions/Bandage.png' },
  dogTreats: { label: 'Dog Treats', icon: 'provisions/Dog_Treats.png' },
  holyWater: { label: 'Holy Water', icon: 'provisions/Holy_Water.png' },
  medicinalHerb: { label: 'Medicinal Herb', icon: 'provisions/Medicinal_Herbs.png' },
  shovel: { label: 'Shovel', icon: 'provisions/Shovel.png' },
  skeletonKey: { label: 'Skeleton Key', icon: 'provisions/Skeleton_Key.png' },
  torch: { label: 'Torch', icon: 'provisions/Torch.png' },
  laudanum: { label: 'Laudanum', icon: 'provisions/Laudanum.png' },
  theBlood: { label: 'The Blood', icon: 'provisions/The_Blood.png' },
  handOfGlory: { label: 'Hand of Glory', icon: 'provisions/Hand_of_Glory.png' },
};
