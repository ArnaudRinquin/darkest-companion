// Courtyard quests / Farmstead modes. From data/dlc-loadouts-research.json (Nov 2026).
// basis 'community' = at least one guide gives numbers (gaps filled by estimate);
// 'estimate' = inferred from sourced mechanics, no guide gives counts.
import type { ProvisionId, RegionId } from './types';

export interface DlcLoadout {
  region: RegionId;
  id: string;
  label: string;
  short: string;
  basis: 'community' | 'estimate';
  items: Partial<Record<ProvisionId, number>>;
  /** Short reasons, condensed from the raw notes in data/dlc-loadouts-research.json. */
  why: string[];
  sources: string[];
}

export const DLC_LOADOUTS: DlcLoadout[] = [
  {
    "region": "courtyard",
    "id": "burn-the-hives",
    "label": "Burn the Hives (Short)",
    "short": "Hives",
    "basis": "estimate",
    "items": {
      "food": 12,
      "torches": 8,
      "shovels": 3,
      "bandages": 3,
      "antivenoms": 1,
      "herbs": 1,
      "holyWaters": 2,
      "theBlood": 6
    },
    "sources": [
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
    ],
    "why": [
      "Short quest (ludo.guide): base short food, no firewood.",
      "Torches don’t light the Courtyard; one stack for +3 ACC, hives, cocoons and mist.",
      "3 shovels: Pillars, Bloodflowers, Disturbing Diversion, Wine Crate.",
      "Extra bandages: Bloodsuckers bleed. Holy water for Damned Fountains.",
      "No skeleton keys. One stack of The Blood in case of Crimson Curse."
    ]
  },
  {
    "region": "courtyard",
    "id": "gather-the-blood",
    "label": "Gather the Blood (Short)",
    "short": "Blood",
    "basis": "estimate",
    "items": {
      "food": 12,
      "torches": 8,
      "shovels": 3,
      "bandages": 3,
      "antivenoms": 1,
      "herbs": 2,
      "holyWaters": 2,
      "theBlood": 6
    },
    "sources": [
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
    ],
    "why": [
      "Short quest (ludo.guide): base short food, no firewood.",
      "One stack of torches; shovels and bandages as for Burn the Hives.",
      "Extra herb for Forgotten Delicacies (more food).",
      "One stack of The Blood; the quest refills it and leftovers go home."
    ]
  },
  {
    "region": "courtyard",
    "id": "slay-the-garden-guardian",
    "label": "Slay the Garden Guardian (Short)",
    "short": "Guardian",
    "basis": "estimate",
    "items": {
      "food": 12,
      "torches": 8,
      "shovels": 3,
      "bandages": 3,
      "antivenoms": 2,
      "herbs": 2,
      "holyWaters": 2,
      "theBlood": 6
    },
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Garden_Guardian",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
    ],
    "why": [
      "One of the shortest Courtyard quests (wiki): base short food, no firewood.",
      "+1 antivenom and +1 herb for the boss fight (our guess).",
      "Rest as for the other short Courtyard quests."
    ]
  },
  {
    "region": "courtyard",
    "id": "epic-baron",
    "label": "Morbid Entertainment (Epic: Baron)",
    "short": "Baron",
    "basis": "community",
    "items": {
      "food": 36,
      "torches": 8,
      "shovels": 6,
      "bandages": 6,
      "antivenoms": 4,
      "herbs": 4,
      "holyWaters": 2,
      "theBlood": 18
    },
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://itemlevel.net/?p=14896"
    ],
    "why": [
      "Food, shovels, bandages, herbs, antivenom, holy water: gamepressure’s Courtyard list (top of its ranges).",
      "The Blood: three stacks (ludo.guide).",
      "One stack of torches (wiki); gamepressure says “as many as you can carry”.",
      "No firewood on epic quests. No skeleton keys: Baron doors use keys found inside.",
      "Baron is weak to bleed, resists blight."
    ]
  },
  {
    "region": "courtyard",
    "id": "epic-viscount",
    "label": "Served Cold (Epic: Viscount)",
    "short": "Viscount",
    "basis": "community",
    "items": {
      "food": 36,
      "torches": 8,
      "shovels": 6,
      "bandages": 6,
      "antivenoms": 4,
      "herbs": 4,
      "holyWaters": 6,
      "theBlood": 18
    },
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
    ],
    "why": [
      "Same base list as the Baron (gamepressure).",
      "Holy water: a full stack for the fight (ludo.guide); gamepressure says 1–2.",
      "Enough shovels for the flower curios (ludo.guide).",
      "One stack of torches, no firewood, no skeleton keys (wiki)."
    ]
  },
  {
    "region": "courtyard",
    "id": "epic-countess",
    "label": "A Bewitching Predator (Epic: Countess)",
    "short": "Countess",
    "basis": "community",
    "items": {
      "food": 36,
      "torches": 8,
      "shovels": 6,
      "bandages": 6,
      "antivenoms": 4,
      "herbs": 4,
      "holyWaters": 2,
      "theBlood": 18
    },
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
    ],
    "why": [
      "No Countess-specific list exists: gamepressure’s Courtyard list + three stacks of The Blood.",
      "One stack of torches, no firewood, no skeleton keys (wiki).",
      "Only inventory carries over if you leave and resume (costs an Invitation)."
    ]
  },
  {
    "region": "farmstead",
    "id": "apprentice",
    "label": "Apprentice",
    "short": "Apprentice",
    "basis": "estimate",
    "items": {
      "food": 4,
      "bandages": 2,
      "antivenoms": 2,
      "herbs": 2,
      "keys": 1
    },
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Farmstead",
      "https://steamcommunity.com/app/262060/discussions/0/1727575977542238038",
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd"
    ],
    "why": [
      "One wave, no boss, 20 kills (wiki). No corridors: no torches or shovels.",
      "No firewood given; a little food for camping at Miller’s Hearth.",
      "One key for the Stockpile curio. A few healing and cure items.",
      "All counts are our guess."
    ]
  },
  {
    "region": "farmstead",
    "id": "veteran",
    "label": "Veteran",
    "short": "Veteran",
    "basis": "estimate",
    "items": {
      "food": 8,
      "bandages": 4,
      "antivenoms": 4,
      "herbs": 4,
      "holyWaters": 3,
      "keys": 2
    },
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Farmstead",
      "https://steamcommunity.com/app/262060/discussions/0/1727575977542238038",
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd"
    ],
    "why": [
      "A few waves, then The Miller (wiki). Deaths are permanent.",
      "Food for one camp at Miller’s Hearth. No torches, shovels or firewood.",
      "Holy water helps in the boss fight (gamepressure). Keys for the Stockpile.",
      "All counts are our guess, about a third of the Endless advice."
    ]
  },
  {
    "region": "farmstead",
    "id": "endless-harvest",
    "label": "Endless Harvest",
    "short": "Endless",
    "basis": "community",
    "items": {
      "food": 24,
      "bandages": 12,
      "antivenoms": 12,
      "herbs": 12,
      "holyWaters": 12,
      "keys": 2
    },
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ],
    "why": [
      "Two full stacks each of herbs, holy water, bandages, antivenom, plus up to 24 food (gamepressure).",
      "Two keys for Stockpile curios. No torches, shovels or firewood (wiki).",
      "A wipe loses the whole inventory: don’t overpack."
    ]
  }
];
