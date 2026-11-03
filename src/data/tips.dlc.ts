// DLC area tips, from data/dlc-loadouts-research.json (each cites its source).
import type { RegionId, RegionTips } from './types';

export const DLC_TIPS: Partial<Record<RegionId, RegionTips>> = {
  "courtyard": {
    "effective": [
      {
        "label": "The Blood",
        "details": "Feeds Crimson Curse heroes and can change Curse stage. Bloodsucker drops alone won't keep them going, so bring stacks.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      },
      {
        "label": "Bleed damage",
        "details": "Bloodsuckers are weak to Bleed and resist Blight. Bleed-focused heroes (Hellion, Houndmaster, Jester, Highwayman, Flagellant) do well. The Baron is weak to bleed.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      },
      {
        "label": "Torches = +3 ACC",
        "details": "Torches don't change light in the Courtyard. They give the party +3 ACC for one battle, burn hives and cocoons, and clear Shifting Mist. One stack is usually enough.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      }
    ],
    "ineffective": [
      {
        "label": "Skeleton keys",
        "details": "Using one on a Courtyard chest swaps its trinkets for random loot. Locked boss-map doors need keys found in the dungeon instead.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      }
    ],
    "dangers": [
      {
        "label": "Crimson Curse",
        "details": "Spread by Bloodsuckers. It's hard to cure, causes erratic behavior, and lowers Bleed resistance. Beating the Baron, Viscount or Countess cures it for all heroes.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      },
      {
        "label": "Bloodlight",
        "details": "Fixed lighting that raises Stress and lowers Bleed resistance. Each square you travel also adds 1 Stress to a random hero.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      },
      {
        "label": "The Fanatic",
        "details": "Shows up after the first infection and hunts parties with many cursed heroes in regular dungeons, never inside the Courtyard.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Courtyard"
      }
    ]
  },
  "farmstead": {
    "effective": [
      {
        "label": "Bleed/Blight and crits",
        "details": "Use damage over time and crits so no corpses are left. Corpses become Crystalline Aberrations at round end.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      },
      {
        "label": "Stun, debuff, dodge",
        "details": "A safe party is Arbalest/Jester/Houndmaster/Occultist. Lean on stuns, debuffs and Dodge over raw damage, and kill one priority target per round.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      },
      {
        "label": "Miller's Hearth",
        "details": "The only place to camp, and you need food. Skeleton keys open the Stockpile for extra supplies.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      }
    ],
    "ineffective": [
      {
        "label": "Torches & shovels",
        "details": "The light meter is replaced by lighting effects, and there are no obstacles. Leave torches and shovels at home.",
        "source": "https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd"
      },
      {
        "label": "Limited-use skills",
        "details": "Avoid heroes who rely on limited-use skills (e.g. Flagellant) for long runs.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      }
    ],
    "dangers": [
      {
        "label": "Waves & The Miller",
        "details": "Enemies respawn until about 10 kills per wave. Wave groups end with The Miller (Veteran, Endless group 2), then Fracture/Sleeper and random bosses.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      },
      {
        "label": "Crystalline Aberrations",
        "details": "Form from corpses at round end and explode for heavy damage and stress. Kill them fast.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      },
      {
        "label": "Farmstead Miasma & wipes",
        "details": "-10% healing received and +10% stress. A wipe in Endless Harvest loses inventory for good.",
        "source": "https://darkestdungeon.wiki.gg/wiki/Farmstead"
      }
    ]
  }
};
