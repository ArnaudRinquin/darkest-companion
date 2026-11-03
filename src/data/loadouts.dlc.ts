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
  notes: string[];
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
    "notes": [
      "ludo.guide calls it a Short L1 dungeon about burning hives, so we used the Short base baseline: 12 food, no firewood (Short = 0). Torches don't affect light in the Courtyard. They give +3 ACC and are used on Thronging Hives and Throbbing Cocoons and to clear Shifting Mist. The wiki says one stack (8) is usually enough. One shovel above the base 2, because the wiki lists Courtyard shovel uses: Crumbling Pillars, Bloodflowers, Disturbing Diversion, Wine Crate. Extra bandages because Bloodsuckers cause bleed. Antivenom only for the few blight sources. Holy Water for Damned Fountains. The wiki says not to bring skeleton keys (they reroll chest trinkets into random loot). One stack of The Blood, because a hero can get the Crimson Curse on this first run."
    ],
    "sources": [
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
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
    "notes": [
      "ludo.guide: 'A Short L5 dungeon with the goal of activating three Winemaker's Reserves'. A mod (Regular Region Courtyard) makes it medium, but vanilla is Short. We used the Short base baseline with no firewood. Torches: one stack (wiki). Shovels and bandages are set as for Burn the Hives. The second herb is for Forgotten Delicacies (herbs give extra food, per wiki). Bring one stack of The Blood for cursed heroes. The quest itself refills Blood, and unused vials return to the Hamlet (wiki Provisions)."
    ],
    "sources": [
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
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
    "notes": [
      "Wiki trivia: 'The Garden Guardian expedition one of the shortest expeditions in the Courtyard', so we used the Short base baseline with no firewood. Torches: one stack (wiki). Antivenom and herbs are bumped by 1 each to cover the boss fight. This is a hedge, not a sourced count. Other items are set as for the other short Courtyard quests."
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Garden_Guardian",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
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
    "notes": [
      "gamepressure gives one area-wide list for the Courtyard, not split by quest: food up to 36, torches 'as many as you can carry' (no number), bandages 6, shovels 6 (at least 3-4 if you skip curios), Holy Water 1-2, herbs 3-4, antivenom 3-4, The Blood 'as many vials as possible'. ludo.guide: 'Stacking three sets [of The Blood] is advisable as it can also be used on Curios', so 3 x stack 6 = 18. Torches: gamepressure says carry as many as possible, but the wiki says one stack (8) is usually enough because torches don't affect light here. Skeleton keys: ludo.guide says keys are needed to reach the Baron's final area. Those are door keys found in the dungeon (Crocodiles, chests, Forgotten Strongboxes; see itemlevel.net), not skeleton keys. The wiki says to avoid skeleton keys in the Courtyard. Baron quest is L3, Veteran only (wiki Baron, ludo).",
      "Same as community, with the gaps filled. Torches 8 (wiki: one stack usually suffices). Firewood 0: no firewood is given on Epic quests, and the only Courtyard source is a shovel on a Wine Crate (wiki). Keys 0 (wiki: avoid; locked doors use in-dungeon keys). The Baron is weak to bleed and resists blight (ludo), so bleed-focused heroes cut down how many bandages and antivenoms you burn through."
    ],
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://itemlevel.net/?p=14896"
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
    "notes": [
      "The gamepressure Courtyard list (same as Baron) plus ludo.guide: 'an Epic, long dungeon on L5'. For this quest, ludo.guide also says to bring enough shovels for the flower-type curios and a set of Holy Water for the fight. That fits gamepressure's 6 shovels. 'A set' could mean 6 Holy Water, which conflicts with gamepressure's 1-2. The Blood: 3 stacks (ludo) vs 'as many as possible' (gamepressure).",
      "Community list with ludo's 'set of holy water' read as one full stack (6). Torches 8 (wiki: one stack). Firewood 0 (Epic: none given; Wine Crate + shovel only). Keys 0 (wiki)."
    ],
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
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
    "notes": [
      "No source has a Countess-specific list. This is the area-wide gamepressure list plus ludo's 3 stacks of The Blood. Torches: no number given (see Baron notes).",
      "Area-wide community list with gaps filled the same way as for the Baron: torches 8 (one stack, wiki), firewood 0 (none on Epic), keys 0 (wiki). Epic runs can be left and resumed. Only inventory items carry over, and each resume costs an Invitation (wiki), so leftover supplies count toward the next attempt."
    ],
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0",
      "https://www.ludo.guide/guide/darkest-dungeon/courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Courtyard",
      "https://darkestdungeon.wiki.gg/wiki/Provisions"
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
    "notes": [
      "Wiki: a single wave with no boss, 20 kills (tutorial). There are no corridors, so no food or torch checks (Steam thread). Torches and shovels are useless (wiki, gamepressure), and no firewood is given. A little food in case Miller's Hearth appears, since camping there needs food (wiki). One key for the Stockpile curio (wiki). A few bandages, herbs and antivenoms for the Husk wave. The gamepressure stocks are meant for open-ended runs, so they're scaled way down here. All counts are inferred."
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Farmstead",
      "https://steamcommunity.com/app/262060/discussions/0/1727575977542238038",
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd"
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
    "notes": [
      "Wiki: one wave group (usually 2-3 waves) ending with The Miller, and deaths are permanent. A Steam commenter says the second Veteran mission has a camping spot, so bring food for one camp at Miller's Hearth. No torches or shovels; no firewood given (wiki). Holy Water's status resistance helps in boss fights (gamepressure). Keys open the Stockpile (wiki). About two-thirds of a stack of each combat item, roughly a third of gamepressure's two-stack advice for open-ended runs. All counts are inferred."
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Farmstead",
      "https://steamcommunity.com/app/262060/discussions/0/1727575977542238038",
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd"
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
    "notes": [
      "gamepressure (Farmstead as a whole, 'survive and kill as many enemies as you can'): 'two full stocks of Medicinal Herbs, Holy Water, Bandages and Antivenom' (2 x stack 6 = 12 each) plus 16-24 food. Upper bound used here. Skip shovels and torches. Only one source gives numbers. The wiki agrees that torches and shovels are unnecessary.",
      "Community list plus keys for Stockpile curios (wiki: they give extra supplies). Firewood 0: none is given on any Farmstead expedition (wiki). If the party wipes, inventory items are lost for good (wiki), so don't overpack beyond what the run will use."
    ],
    "sources": [
      "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  }
];
