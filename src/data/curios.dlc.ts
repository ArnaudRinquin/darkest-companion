// DLC + special curios, researched from darkestdungeon.wiki.gg in Nov 2026.
// Raw research: data/wiki-research-2026-11.json. See SOURCES.md.
import type { Curio } from './types';

export const dlcCurios: Curio[] = [
  {
    "id": "pile-of-strange-bones",
    "name": "Pile of Strange Bones",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/pile_of_strange_bones.png",
    "description": "A heap of peculiar bones and dusty sinew litters the floor.",
    "options": [
      {
        "activator": "bandage",
        "outcomes": [
          {
            "chance": 50,
            "label": "Any loot"
          },
          {
            "chance": 50,
            "label": "The Blood"
          }
        ]
      },
      {
        "activator": "theBlood",
        "outcomes": [
          {
            "chance": 100,
            "label": "Fight: Supplicant, Sycophant, Esquire"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 50,
            "label": "Bleed"
          },
          {
            "chance": 20,
            "label": "Any loot + 16.7% The Blood",
            "amount": 2
          },
          {
            "chance": 10,
            "label": "Crimson Curse"
          },
          {
            "chance": 20,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "bloodflowers",
    "name": "Bloodflowers",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/bloodflowers.png",
    "description": "The soil is soaked through with half-clotted blood which seemingly feeds these vital blooms.",
    "options": [
      {
        "activator": "shovel",
        "outcomes": [
          {
            "chance": 100,
            "label": "Heirlooms x2 + any loot x1"
          }
        ]
      },
      {
        "activator": "holyWater",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress +15"
          }
        ]
      },
      {
        "activator": "theBlood",
        "outcomes": [
          {
            "chance": 100,
            "label": "Nothing"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 38.5,
            "label": "Stress +15"
          },
          {
            "chance": 23.1,
            "label": "Scouting"
          },
          {
            "chance": 15.3,
            "label": "Any loot + 16.7% The Blood",
            "amount": 2
          },
          {
            "chance": 5.1,
            "label": "Tetanus disease"
          },
          {
            "chance": 2.5,
            "label": "Random disease"
          },
          {
            "chance": 15.3,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "damned-fountain",
    "name": "Damned Fountain",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/damned_fountain.png",
    "description": "A bubbling fountain spews crimson ichor from some damnable source.",
    "options": [
      {
        "activator": "holyWater",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress heal 30"
          }
        ]
      },
      {
        "activator": "torch",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress +5"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 60,
            "label": "Bleed"
          },
          {
            "chance": 20,
            "label": "Crimson Curse"
          },
          {
            "chance": 20,
            "label": "Any loot + 16.7% Bleed",
            "amount": 2
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ],
    "unsure": "Wiki loot row says 'Any Loot x2 + 16.7% Bleed'; may be a typo for The Blood (other Courtyard curios use '+16.7% The Blood'). Kept as written."
  },
  {
    "id": "disturbing-diversion",
    "name": "Disturbing Diversion",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/disturbing_diversion.png",
    "description": "Mouldering evidence of a society's depravity.",
    "options": [
      {
        "activator": "shovel",
        "outcomes": [
          {
            "chance": 100,
            "label": "Heirlooms",
            "amount": 3
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 40,
            "label": "Stress +25"
          },
          {
            "chance": 15,
            "label": "Random positive quirk"
          },
          {
            "chance": 15,
            "label": "Random negative quirk"
          },
          {
            "chance": 10,
            "label": "Any loot x2 + 16.7% The Blood x2"
          },
          {
            "chance": 20,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "forgotten-delicacies",
    "name": "Forgotten Delicacies",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/forgotten_delicacies.png",
    "description": "An anachronistic mixture of both rotted and fresh victuals adorn the cart.",
    "options": [
      {
        "activator": "medicinalHerb",
        "outcomes": [
          {
            "chance": 100,
            "label": "Food x2 + gold/supplies x1"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 20,
            "label": "Gold/supplies x4 + supplies x1 + 25% The Blood"
          },
          {
            "chance": 20,
            "label": "Negative quirk: Stress Eater"
          },
          {
            "chance": 20,
            "label": "Blight"
          },
          {
            "chance": 13.3,
            "label": "Crimson Curse"
          },
          {
            "chance": 6.7,
            "label": "Random disease"
          },
          {
            "chance": 20,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "hooded-shrew",
    "name": "Hooded Shrew",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/hooded_shrew.png",
    "description": "A mysterious figure, not fully human, not fully insect, kneels here on the ground.",
    "options": [
      {
        "activator": "theBlood",
        "outcomes": [
          {
            "chance": 100,
            "label": "Non-set trinkets",
            "amount": 2
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 42.8,
            "label": "Stress +15"
          },
          {
            "chance": 28.5,
            "label": "Any loot"
          },
          {
            "chance": 7.6,
            "label": "Random disease"
          },
          {
            "chance": 14.2,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ],
    "unsure": "Wiki by-hand odds sum to 93.1%; an outcome (~6.9%) is likely missing on the wiki."
  },
  {
    "id": "throbbing-cocoons",
    "name": "Throbbing Cocoons",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/throbbing_cocoons.png",
    "description": "Shifting and bulging organisms hide behind translucent walls.",
    "options": [
      {
        "activator": "torch",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress heal 30"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 75,
            "label": "Fight: Supplicant, Sycophant, Esquire"
          },
          {
            "chance": 12.5,
            "label": "Any loot + 16.7% The Blood",
            "amount": 3
          },
          {
            "chance": 12.5,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "thronging-hive",
    "name": "Thronging Hive",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/thronging_hive.png",
    "description": "The hive is twisted and unnatural - the work of cursed vermin.",
    "options": [
      {
        "activator": "torch",
        "outcomes": [
          {
            "chance": 100,
            "label": "Any loot + 16.7% The Blood",
            "amount": 3
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 75,
            "label": "Any loot + 20% The Blood",
            "amount": 2
          },
          {
            "chance": 25,
            "label": "Bleed"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "wine-crate",
    "name": "Wine Crate",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/wine_crate.png",
    "description": "You can see that some of the bottles are still intact.",
    "options": [
      {
        "activator": "shovel",
        "outcomes": [
          {
            "chance": 100,
            "label": "Firewood"
          }
        ]
      },
      {
        "activator": "antivenom",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress heal 30"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 41.7,
            "label": "The Blood (33.3%) x2 + any loot x1 + gold/supplies x4"
          },
          {
            "chance": 16.7,
            "label": "Crimson Curse"
          },
          {
            "chance": 16.7,
            "label": "Negative quirk: Tippler"
          },
          {
            "chance": 8.3,
            "label": "Scouting"
          },
          {
            "chance": 8.3,
            "label": "Bleed"
          },
          {
            "chance": 8.3,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/The_Courtyard"
    ]
  },
  {
    "id": "wizened-shrew",
    "name": "Wizened Shrew",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/wizened_shrew.png",
    "description": "This appears to be an elderly but shunned member of this damned court.",
    "options": [
      {
        "activator": "theBlood",
        "outcomes": [
          {
            "chance": 100,
            "label": "Non-set trinkets",
            "amount": 3
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 33.3,
            "label": "Scouting"
          },
          {
            "chance": 16.7,
            "label": "Random disease"
          },
          {
            "chance": 33.3,
            "label": "Nothing (strange ritual, 'results seem positive')"
          },
          {
            "chance": 16.7,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ],
    "unsure": "Wiki lists two separate 'Nothing' rows (33.3% + 16.7%); first one's flavor implies a positive effect but none is given."
  },
  {
    "id": "winemakers-reserve",
    "name": "Winemaker's Reserve",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/winemakers_reserve.png",
    "description": "Bottles of The Blood disguised as wine.",
    "where": "Only during 'Gather the Blood' quest",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "The Blood x3-5"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/The_Courtyard"
    ]
  },
  {
    "id": "lost-treasure-box",
    "name": "Lost Treasure Box",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/lost_treasure_box.png",
    "description": "This chest must hold some kind of loot.",
    "where": "Treasure room. Tip: a key swaps the trinkets for random loot.",
    "options": [
      {
        "activator": "skeletonKey",
        "outcomes": [
          {
            "chance": 100,
            "label": "Heirlooms x2 + any loot x1"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Any loot x1 + non-set trinket x2 + gems x1"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/The_Courtyard"
    ]
  },
  {
    "id": "trinket-chest",
    "name": "Trinket Chest",
    "region": "courtyard",
    "dlc": "crimson-court",
    "icon": "curios/trinket_chest.png",
    "where": "Only during main Courtyard campaign (boss quests)",
    "options": [
      {
        "activator": "skeletonKey",
        "outcomes": [
          {
            "chance": 100,
            "label": "Heirlooms x2 + any loot x1"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Set trinket"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/The_Courtyard"
    ]
  },
  {
    "id": "corrupted-harvest",
    "name": "Corrupted Harvest",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/corrupted_harvest.png",
    "description": "Take up the axe. Blow off some steam.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Party stress heal 60"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "fresh-harvest",
    "name": "Fresh Harvest",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/fresh_harvest.png",
    "description": "Tantalizing provisions to renew a body.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Heal 90% max HP"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ],
    "unsure": "Wiki doesn't say if single hero or party (Plentiful Bounty explicitly says party); likely single hero."
  },
  {
    "id": "gleaming-shards",
    "name": "Gleaming Shards",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/gleaming_shards.png",
    "description": "Glittering crystals spill onto the ground.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Comet Shards x5-15"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "millers-hearth",
    "name": "Miller's Hearth",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/millers_hearth.png",
    "description": "The fireplace is slowly coming apart but looks functional.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Camp (acts as firewood)"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "plentiful-bounty",
    "name": "Plentiful Bounty",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/plentiful_bounty.png",
    "description": "Tantalizing provisions to renew our energies.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Party heal 65% max HP"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "rotted-fare",
    "name": "Rotted Fare",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/rotted_fare.png",
    "description": "Take up the hatchet. Blow off some steam.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress heal 100"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ],
    "unsure": "Wiki doesn't say single hero or party (Corrupted Harvest explicitly says party); likely single hero."
  },
  {
    "id": "stockpile",
    "name": "Stockpile",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/stockpile.png",
    "description": "Useful supplies for this harrowing journey.",
    "options": [
      {
        "activator": "skeletonKey",
        "outcomes": [
          {
            "chance": 100,
            "label": "Food x6-12 + any supplies + trinket"
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 66.7,
            "label": "Laudanum, medicinal herbs or food"
          },
          {
            "chance": 33.3,
            "label": "Nothing"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "mildred",
    "name": "Mildred",
    "region": "farmstead",
    "dlc": "color-of-madness",
    "icon": "curios/mildred.png",
    "description": "This anguished creature does not seem hostile, yet.",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Mildred's Locket trinket (first time); any trinket or shards after"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data",
      "https://darkestdungeon.wiki.gg/wiki/Farmstead"
    ]
  },
  {
    "id": "brigands-tent",
    "name": "Brigand's Tent",
    "region": "special",
    "icon": "curios/brigands_tent.png",
    "description": "Clearly where the ambushers camp.",
    "where": "Old Road (not in Stygian mode)",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Any loot",
            "amount": 2
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "bandits-trapped-chest",
    "name": "Bandit's Trapped Chest",
    "region": "special",
    "icon": "curios/bandits_trapped_chest.png",
    "description": "Something is not quite right with this one...",
    "where": "Old Road",
    "options": [
      {
        "activator": "skeletonKey",
        "outcomes": [
          {
            "chance": 100,
            "label": "Trinkets",
            "amount": 2
          }
        ]
      },
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Blight (trapped)"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "ancestors-knapsack",
    "name": "Ancestor's Knapsack",
    "region": "special",
    "icon": "curios/ancestors_knapsack.png",
    "description": "A chest untouched for centuries. There's a locked compartment on the side of it.",
    "where": "Darkest Dungeon or Wolves at the Door",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Gold/gems x5 + ancestral trinket x1"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "forgotten-strongbox",
    "name": "Forgotten Strongbox",
    "region": "special",
    "dlc": "crimson-court",
    "icon": "curios/forgotten_strongbox.png",
    "where": "Courtyard boss (epic) quests; four variants, each gives its colored key",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Colored key for the boss quest"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "iron-crown",
    "name": "Iron Crown",
    "region": "special",
    "icon": "curios/iron_crown.png",
    "description": "We can light this with a Hand of Glory.",
    "where": "Darkest Dungeon, quest 2 (cannot interact without Hand of Glory)",
    "options": [
      {
        "activator": "handOfGlory",
        "outcomes": [
          {
            "chance": 100,
            "label": "Quest progress 1/3"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "locus-beacon",
    "name": "Locus Beacon",
    "region": "special",
    "icon": "curios/locus_beacon.png",
    "description": "This must be it - the beginning of the end.",
    "where": "Darkest Dungeon, quest 3",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Completes quest"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "transcendent-terror",
    "name": "Transcendent Terror",
    "region": "special",
    "icon": "curios/transcendent_terror.png",
    "description": "Surely nothing good can come of a dialogue with the dead...?",
    "where": "Old Road (Stygian mode only)",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Stress +100"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  },
  {
    "id": "throbbing-cocoons-infestation",
    "name": "Throbbing Cocoons (Infestation)",
    "region": "special",
    "dlc": "crimson-court",
    "icon": "curios/throbbing_cocoons.png",
    "where": "Base dungeons (corridor) at high Crimson Court infestation",
    "options": [
      {
        "activator": "nothing",
        "outcomes": [
          {
            "chance": 100,
            "label": "Fight: Gatekeeper + Manservants/Supplicants/Sycophants"
          }
        ]
      }
    ],
    "sources": [
      "https://darkestdungeon.wiki.gg/wiki/Curios",
      "https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data"
    ]
  }
];
