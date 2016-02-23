
function concatBuffEffects(effects = []) {
  return effects.map(function effectToString({type, amount, percent}){
    return `${amount}${percent ? '%' : ''} ${type}`;
  }).join(', ');
}

const outcomeTypes = {
  nothing: {
    label: 'Nothing',
  },
  scouting: {
    label: 'Scouting',
  },
  torch: {
    label: 'Torch',
  },
  heirlooms: {
    label: 'Heirlooms',
  },
  anyLoot: {
    label: 'Any loot',
  },
  food: {
    label: 'Food',
  },
  gainPositiveQuirk(type = 'random') {
    return {
      label: `Gain ${type} positive quirk`,
    }
  },
  gainNegativeQuirk(type = 'random') {
    return {
      label: `Gain ${type} negative quirk`,
    }
  },
  purgeNegativeQuirk: {
    label: 'Purge a negative quirk',
  },
  negativeQuirkOrDisease: {
    label: 'Gain a negative quirk or disease',
  },
  goldGemsSupplies: {
    label: 'Gold, gems or supplies',
  },
  goldGemsHeirlooms: {
    label: 'Gold, gems or heirlooms',
  },
  goldHeirlooms: {
    label: 'Gold or heirloooms',
  },
  goldSuppliesHeirlooms: {
    label: 'Gold, supplies or heirloooms',
  },
  goldGems: {
    label: 'Gold or gems',
  },
  goldTrinket: {
    label: 'Gold or trinket',
  },
  goldFoodTrinket: {
    label: 'Gold, food or trinket',
  },
  goldGemsTrinket: {
    label: 'Gold, gems or trinket',
  },
  goldGemsFood: {
    label: 'Gold, gems or food',
  },
  gemsHerlooms: {
    label: 'Gems or herlooms',
  },
  goldGemsHeirloomsSupplies: {
    label: 'Gold, gems, heirlooms or supplies',
  },
  addStress(amount) {
    return {
      label: `Stress +${amount}`,
    }
  },
  removeStress(amount) {
    return {
      label: `Stress heal ${amount}`,
    }
  },
  setLight(to) {
    return {
      label: `Set light to ${to}`,
    }
  },
  decreaseLight(by) {
    return {
      label: `Decrease light by ${by}`
    }
  },
  bleed: {
    label: 'Bleed',
  },
  blight: {
    label: 'Blight',
  },
  buff(effects, untilCamp) {
    return {
      label: `Buff ${concatBuffEffects(effects)}${untilCamp ? ' until camp' : ''}`,
    }
  },
  debuff(effects, untilCamp) {
    return {
      label: `Debuff ${concatBuffEffects(effects)}${untilCamp ? ' until camp' : ''}`,
    }
  },
  disease(diseaseName = 'random') {
    return {
      label: `${diseaseName} disease`,
    }
  },
  healStressEffectAndHP(stressHeal, hpHeal) {
    return {
      label: `Heal ${stressHeal} stress, cure status effect, heal ${hpHeal} HP`
    }
  },
  summonShambler: {
    label: 'Summon Shambler',
  },
  buffDMGAndAccAndCRTAndCureStatusEffect(dmg, acc, crt) {
    return {
      label: `Buff +${dmg}% DMG, +${acc} ACC, +${crt}% CRT, Cure Status Effects`,
    }
  }
}

const provisionsIconPath = './icons/provisions/'
const activators = {
  nothing: {
    label: 'Nothing',
    icon: './icons/redCross.png',
  },
  antivenom: {
    label: 'Antivenom',
    icon: `${provisionsIconPath}/Antivenom.png`,
  },
  bandage: {
    label: 'Bandage',
    icon: `${provisionsIconPath}/Bandage.png`,
  },
  dogTreats: {
    label: 'Dog Treats',
    icon: `${provisionsIconPath}/Dog_Treats.png`,
  },
  holyWater: {
    label: 'Holy Water',
    icon: `${provisionsIconPath}/Holy_Water.png`,
  },
  medicinalHerb: {
    label: 'Medicinal Herb',
    icon: `${provisionsIconPath}/Medicinal_Herbs.png`,
  },
  shovel: {
    label: 'Shovel',
    icon: `${provisionsIconPath}/Shovel.png`,
  },
  skeletonKey: {
    label: 'Skeleton Key',
    icon: `${provisionsIconPath}/Skeleton_Key.png`,
  },
  torch: {
    label: 'Torch',
    icon: `${provisionsIconPath}/Torch.png`,
  },
}

const iconPath = './icons/curios/';

const universalCurios = [
  {
    name: 'Crate',
    icon: `${iconPath}crate.png`,
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 75,
            type: outcomeTypes.heirlooms,
          },
          {
            chances: 25,
            type: outcomeTypes.nothing,
          },
        ],
      },
    ],
  },
  {
    name: 'Discarded Pack',
    icon: `${iconPath}discarded_pack.png`,
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 60,
            type: outcomeTypes.goldGemsSupplies,
            amount: 1.5,
          },
          {
            chances: 20,
            type: outcomeTypes.scouting,
          },
          {
            chances: 20,
            type: outcomeTypes.nothing,
          },
        ],
      },
    ],
  },
  {
    name: 'Eldritch Altar',
    icon: `${iconPath}eldritch_alter.png`,
    description: 'A weird and unnatural statuette that appears to be an item of unholy worship.',
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 50,
            type: outcomeTypes.addStress(50)
          },
          {
            chances: 33,
            type: outcomeTypes.gainPositiveQuirk(),
          },
          {
            chances: 16,
            type: outcomeTypes.gainNegativeQuirk(),
          },
          {
            chances: 16,
            type: outcomeTypes.nothing,
          },
        ],
      },
      {
        activator: activators.holyWater,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.purgeNegativeQuirk,
          },
        ],
      },
    ],
  },
  {
    name: 'Heirloom Chest',
    icon: `${iconPath}heirloom_chest.png`,
    description: 'A chest with your family\'s sigil.',
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 75,
            type: outcomeTypes.goldGems,
            amount: 2,
          },
          {
            chances: 12.5,
            type: outcomeTypes.bleed,
          },
          {
            chances: 12.5,
            type: outcomeTypes.blight,
          },
        ],
      },
      {
        activator: activators.skeletonKey,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.heirlooms,
            amount: 3
          },
        ],
      },
      {
        activator: activators.antivenom,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.heirlooms,
            amount: 3
          },
        ],
      },
    ],
  },
  {
    name: 'Sack',
    icon: `${iconPath}sack.png`,
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 75,
            type: outcomeTypes.goldGems,
          },
          {
            chances: 25,
            type: outcomeTypes.nothing,
          },
        ],
      },
    ],
  },
  {
    name: 'Sconce',
    icon: `${iconPath}sconce.png`,
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.torch,
          },
        ],
      },
    ],
  },
  {
    name: 'Shambler\'s Altar',
    icon: `${iconPath}shamblers_altar.png`,
    description: 'It says: "The sacrifice of fire is the gate to ruin! Place a torch if you crave the void!"',
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.nothing,
          },
        ],
      },
      {
        activator: activators.torch,
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.summonShambler,
          },
        ],
      },
    ],
  },
  {
    name: 'Unlocked Strongbox',
    icon: `${iconPath}unlocked_strongbox.png`,
    description: 'A long-forgotten strongbox sits on the cold stone floor, its contents unknown.',
    options: [
      {
        activator: activators.nothing,
        outcomes: [
          {
            chances: 75,
            type: outcomeTypes.anyLoot,
            amount: 2,
          },
          {
            chances: 25,
            type: outcomeTypes.blight,
          },
        ],
      },
    ],
  },
];

const curiosPerLocation = {
  'ruins': [
    ...universalCurios,
    {
      name: 'Alchemy Table',
      icon: `${iconPath}alchemy_table.png`,
      description: 'A partially intact set of experimental equipment.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.blight,
            },
            {
              chances: 25,
              type: outcomeTypes.goldGems
            },
            {
              chances: 25,
              type: outcomeTypes.nothing
            },
          ],
        },
        {
          activator: activators.torch,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.setLight(100),
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGems,
              amount: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'Altar of Light',
      icon: `${iconPath}altar_of_light.png`,
      description: 'A small holy altar seems out of place against the backdrop of corruption.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buff([{
                  type: 'DMG',
                  amount: 20,
                }], true),
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buff([{
                type: 'DMG',
                amount: 30,
              }], true),
            },
          ],
        },
      ],
    },
    {
      name: 'Bookshelf',
      icon: `${iconPath}bookshelf.png`,
      description: 'A bookshelf full of old, leather-bound books.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 25,
              type: outcomeTypes.scouting,
            },
            {
              chances: 25,
              type: outcomeTypes.addStress(50),
            },
            {
              chances: 16,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 8,
              type: outcomeTypes.negativeQuirkOrDisease,
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            }
          ]
        }
      ]
    },
    {
      name: 'Confession Booth',
      icon: `${iconPath}confession_booth.png`,
      description: 'A forsaken confession booth. It hasn\'t been used in years.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.addStress(20),
            },
            {
              chances: 25,
              type: outcomeTypes.goldTrinket,
            },
            {
              chances: 25,
              type: outcomeTypes.purgeNegativeQuirk,
            },
          ]
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.removeStress(30),
            },
          ]
        },
      ]
    },
    {
      name: 'Decorative Urn',
      icon: `${iconPath}decorative_urn.png`,
      description: 'An urn holds ashes of the departed.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 44,
              type: outcomeTypes.goldTrinket,
              amount: 2,
            },
            {
              chances: 22,
              type: outcomeTypes.blight,
            },
            {
              chances: 7,
              type: outcomeTypes.disease('Creeping Cough'),
            },
            {
              chances: 3,
              type: outcomeTypes.disease(),
            },
            {
              chances: 22,
              type: outcomeTypes.nothing,
            },
          ]
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldTrinket,
              amount: 2,
            },
          ]
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.gainNegativeQuirk('Guilty Conscience'),
            },
          ]
        },
      ]
    },
    {
      name: 'Holy Fountain',
      icon: `${iconPath}holy_fountain.png`,
      description: 'An ornate fountain of holy purport.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.healStressEffectAndHP(10, 5),
            },
            {
              chances: 50,
              type: outcomeTypes.goldGems,
            },
          ]
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.healStressEffectAndHP(20, 12),
            },
          ]
        }
      ]
    },
    {
      name: 'Iron Maiden',
      icon: `${iconPath}iron_maiden.png`,
      description: 'A rusty iron maiden stands against the wall, clasped shut.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 40,
              type: outcomeTypes.anyLoot,
              amount: 2,
            },
            {
              chances: 20,
              type: outcomeTypes.gainNegativeQuirk('Claustrophobia'),
            },
            {
              chances: 13,
              type: outcomeTypes.disease('Tetanus'),
            },
            {
              chances: 6,
              type: outcomeTypes.disease(),
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ]
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
            },
          ]
        }
      ]
    },
    {
      name: 'Locked Display Cabinet',
      icon: `${iconPath}locked_display_cabinet.png`,
      description: 'There could be valuables left inside, but this cabinet is locked.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.bleed,
              amount: 2,
            },
            {
              chances: 50,
              type: outcomeTypes.blight,
            },
          ]
        },
        {
          activator: activators.skeletonKey,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsHeirlooms,
              amount: 2.5,
            },
          ]
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsHeirlooms,
              amount: 2,
            },
          ]
        }
      ]
    },
    {
      name: 'Locked Sarcophagus',
      icon: `${iconPath}locked_sarcophagus.png`,
      description: 'An ornate sarcophagus. It\'s locked.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.bleed,
              amount: 2,
            },
            {
              chances: 50,
              type: outcomeTypes.blight,
            },
          ]
        },
        {
          activator: activators.skeletonKey,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsHeirlooms,
              amount: 1.5,
            },
          ]
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsHeirlooms,
            },
          ]
        }
      ]
    },
    {
      name: 'Sarcophagus',
      icon: `${iconPath}sarcophagus.png`,
      description: 'An ornate sarcophagus. It is slightly ajar.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 60,
              type: outcomeTypes.goldHeirlooms,
              amount: 2,
            },
            {
              chances: 20,
              type: outcomeTypes.gainNegativeQuirk('Thanatophobia'),
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ]
        },
      ]
    },
    {
      name: 'Stack of books',
      icon: `${iconPath}stack_of_books.png`,
      description: 'A stack of literary treasures in an unlikely location.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 26,
              type: outcomeTypes.addStress(25),
              amount: 2,
            },
            {
              chances: 26,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 13,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 13,
              type: outcomeTypes.decreaseLight(25),
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.torch,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.addStress(100),
            },
          ],
        },
      ]
    },
    {
      name: 'Suit of Armor',
      icon: `${iconPath}suit_of_armor.png`,
      description: 'An antique suit of armor stands amidst the ruins.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 75,
              type: outcomeTypes.buff([{
                  type: 'DODGE',
                  amount: 10
                },
                {
                  type: 'PROT',
                  amount: 10,
                  percent: true,
                }], true),
            },
            {
              chances: 12.5,
              type: outcomeTypes.gainPositiveQuirk('Ruins Adventurer'),
            },
            {
              chances: 12.5,
              type: outcomeTypes.gainPositiveQuirk('Ruins Tactician'),
            },
          ],
        },
      ]
    },
  ],
  'warrens': [
    ...universalCurios,
    {
      name: 'Bone Altar',
      icon: `${iconPath}bone_altar.png`,
      description: 'A dark altar with skulls prominently on display. A strange power can be felt in its presence.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buffDMGAndAccAndCRTAndCureStatusEffect(15, 10, 5),
              amount: 2,
            },
          ],
        },
      ]
    },
    {
      name: 'Dinner Cart',
      icon: `${iconPath}dinner_cart.png`,
      description: 'A cart of human remains. It looks much like a feeding trough. Disgusting.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 25,
              type: outcomeTypes.goldFoodTrinket,
              amount: 1,
            },
            {
              chances: 25,
              type: outcomeTypes.blight,
            },
            {
              chances: 25,
              type: outcomeTypes.disease(),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldFoodTrinket,
              amount: 2,
            },
          ],
        },
      ]
    },
    {
      name: 'Makeshift dining table',
      icon: `${iconPath}makeshift_dining_table.png`,
      description: 'An oddly assembled dining table. There might still be food scraps around.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 25,
              type: outcomeTypes.goldFoodTrinket,
              amount: 1,
            },
            {
              chances: 25,
              type: outcomeTypes.blight,
            },
            {
              chances: 25,
              type: outcomeTypes.disease(),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldFoodTrinket,
              amount: 2,
            },
          ],
        },
      ]
    },
    {
      name: 'Occult Scrawlings',
      icon: `${iconPath}occult_scrawlings.png`,
      description: 'Scrawlings written on what looks like stretched and tanned human flesh...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 33.3,
              type: outcomeTypes.gainPositiveQuirk(),
              amount: 1,
            },
            {
              chances: 25,
              type: outcomeTypes.addStress(25),
            },
            {
              chances: 17.6,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.debuff([{
                type: 'DODGE',
                amount: 20,
              }]),
            },
          ],
        },
      ]
    },
    {
      name: 'Pile of Bones',
      icon: `${iconPath}pile_of_bones.png`,
      description: 'All that\'s left of a previous adventurer, perhaps.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 25,
              type: outcomeTypes.anyLoot,
              amount: 2,
            },
            {
              chances: 25,
              type: outcomeTypes.disease(),
            },
            {
              chances: 25,
              type: outcomeTypes.gainNegativeQuirk('Bloodthirsty'),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 2,
            },
          ],
        },
      ]
    },
    {
      name: 'Pile of Scrolls',
      icon: `${iconPath}pile_of_scrolls.png`,
      description: 'A bunch of scrolls. The cursive is sloppy and difficult to read.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 33.3,
              type: outcomeTypes.scouting
            },
            {
              chances: 16.7,
              type: outcomeTypes.addStress(15),
            },
            {
              chances: 11.1,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 5.6,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 33.3,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.torch,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.purgeNegativeQuirk,
            },
          ],
        },
      ]
    },
    {
      name: 'Rack of Blades',
      icon: `${iconPath}rack_of_blades.png`,
      description: 'A rack of dulled, rusty knives. They are covered in fresh blood.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 40,
              type: outcomeTypes.goldGemsFood
            },
            {
              chances: 40,
              type: outcomeTypes.bleed,
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.bandage,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsFood,
              amount: 1.5,
            },
          ],
        },
      ]
    },
    {
      name: 'Sacrifial Stone',
      icon: `${iconPath}sacrificial_stone.png`,
      description: 'A stone used for ancient, barbaric rituals.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.addStress(50),
            },
            {
              chances: 25,
              type: outcomeTypes.purgeNegativeQuirk,
            },
            {
              chances: 12.5,
              type: outcomeTypes.gainPositiveQuirk('Warrens Explorer'),
            },
            {
              chances: 12.5,
              type: outcomeTypes.gainPositiveQuirk('Warrens Explorer'),
            },
          ],
        },
      ],
    },
    {
      name: 'Stack of Books',
      icon: `${iconPath}stack_of_books.png`,
      description: 'A stack of literary treasures in an unlikely location.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 26.7,
              type: outcomeTypes.addStress(25),
            },
            {
              chances: 26.7,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 13.3,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 13.3,
              type: outcomeTypes.decreaseLight(25),
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.torch,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.addStress(100),
            },
          ],
        },
      ],
    },
  ],
  'weald': [
    ...universalCurios,
    {
      name: 'Ancient Coffin',
      icon: `${iconPath}ancient_coffin.png`,
      description: 'An old coffin. It is slightly ajar.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.goldHeirlooms,
              amount: 2,
            },
            {
              chances: 8.3,
              type: outcomeTypes.gainPositiveQuirk('Weald Adventurer'),
            },
            {
              chances: 8.3,
              type: outcomeTypes.gainPositiveQuirk('Weald Adventurer'),
            },
            {
              chances: 33.3,
              type: outcomeTypes.nothing,
            },
          ],
        },
      ],
    },
    {
      name: 'Beast Carcass',
      icon: `${iconPath}beast_carcass.png`,
      description: 'Something has recently mutilated this creature...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 42.9,
              type: outcomeTypes.food,
            },
            {
              chances: 28.6,
              type: outcomeTypes.disease('Rabies'),
            },
            {
              chances: 14.3,
              type: outcomeTypes.gainNegativeQuirk('Zoophobia'),
            },
            {
              chances: 14.3,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.food,
              amount: 2
            },
          ],
        },
      ],
    },
    {
      name: 'Eerie Spiderweb',
      icon: `${iconPath}eerie_spiderweb.png`,
      description: 'A spiderweb with a strange glow to it. There might be something behind it.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 40,
              type: outcomeTypes.goldGemsTrinket,
            },
            {
              chances: 10,
              type: outcomeTypes.gainNegativeQuirk('Slow Reflexes'),
            },
            {
              chances: 10,
              type: outcomeTypes.gainNegativeQuirk('Slowdraw'),
            },
            {
              chances: 40,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.bandage,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsTrinket,
              amount: 1.5
            },
          ],
        },
      ],
    },
    {
      name: 'Left Luggage',
      icon: `${iconPath}left_luggage.png`,
      description: 'Someone dropped this recently. Probably on the run. It has a lock on it.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.anyLoot,
            },
            {
              chances: 50,
              type: outcomeTypes.blight,
            },
          ],
        },
        {
          activator: activators.skeletonKey,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 3
            },
          ],
        },
        {
          activator: activators.antivenom,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 3
            },
          ],
        },
      ],
    },
    {
      name: 'Mummified Remains',
      icon: `${iconPath}mummified_remains.png`,
      description: 'Ancient remains. The body looks well preserved.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 40,
              type: outcomeTypes.goldTrinket,
            },
            {
              chances: 40,
              type: outcomeTypes.blight,
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.bandage,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldTrinket,
              amount: 2
            },
          ],
        },
      ],
    },
    {
      name: 'Old Tree',
      icon: `${iconPath}old_tree.png`,
      description: 'This tree has a huge hole in the trunk. Perhaps there\'s something inside...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.anyLoot,
              amount: 2,
            },
            {
              chances: 25,
              type: outcomeTypes.blight,
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.antivenom,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'Pristine Fountain',
      icon: `${iconPath}pristine_fountain.png`,
      description: 'A beautiful fountain. It looks unaffected by the surrounding chaos.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.removeStress(20),
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.removeStress(30),
            },
          ],
        },
      ],
    },
    {
      name: 'Shallow Grave',
      icon: `${iconPath}shallow_grave.png`,
      description: 'A grave, dug in haste.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.blight,
            },
            {
              chances: 50,
              type: outcomeTypes.disease(),
            },
          ],
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.gemsHerlooms,
              amount: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'Traveler\'s Tent',
      icon: `${iconPath}travelers_tent.png`,
      description: 'Someone has camped here recently.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 37.5,
              type: outcomeTypes.goldSuppliesHeirlooms,
              amount: 2,
            },
            {
              chances: 37.5,
              type: outcomeTypes.scouting,
            },
            {
              chances: 12.5,
              type: outcomeTypes.addStress(25),
            },
            {
              chances: 12.5,
              type: outcomeTypes.nothing,
            },
          ],
        },
      ],
    },
    {
      name: 'Troubling Effigy',
      icon: `${iconPath}troubling_effigy.png`,
      description: 'An unsettling effigy erected in service to a mysterious god.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 18.7,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 18.7,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 18.7,
              type: outcomeTypes.bleed,
            },
            {
              chances: 9.4,
              type: outcomeTypes.blight,
            },
            {
              chances: 9.4,
              type: outcomeTypes.addStress(15),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.gainPositiveQuirk(),
            },
          ],
        },
      ],
    },
  ],
  'cove': [
    ...universalCurios,
    {
      name: 'Barnacle Crusted Chest',
      icon: `${iconPath}bernacle_crusted_chest.png`,
      description: 'A treasure chest blanketed in barnacles.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.goldGemsHeirloomsSupplies,
              amount: 2,
            },
            {
              chances: 25,
              type: outcomeTypes.bleed,
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'Bas-Relief',
      icon: `${iconPath}bas_relief.png`,
      description: 'A puzzingly ancient sculpture of dizzying implication...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 66.7,
              type: outcomeTypes.gainPositiveQuirk(),
            },
            {
              chances: 25,
              type: outcomeTypes.gainNegativeQuirk(),
            },
            {
              chances: 8.3,
              type: outcomeTypes.disease(),
            },
          ],
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.addStress(100),
            },
          ],
        },
      ],
    },
    {
      name: 'Brackish Tidepool',
      icon: `${iconPath}brackish_tidepool.png`,
      description: 'A pool of water cupped in smooth stone. Its color looks sightly off...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 75,
              type: outcomeTypes.buff([{
                type: 'Bleed, Blight, Disease and Debuff resist',
                amount: 33,
                percent: true,
              }], true),
            },
            {
              chances: 25,
              type: outcomeTypes.disease(),
            },
          ],
        },
        {
          activator: activators.antivenom,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.healStressEffectAndHP(5, 5),
            },
          ],
        },
      ],
    },
    {
      name: 'Eerie Coral',
      icon: `${iconPath}eerie_coral.png`,
      description: 'There is something odd about this coral.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.removeStress(10),
            },
            {
              chances: 25,
              type: outcomeTypes.addStress(25),
            },
            {
              chances: 25,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.purgeNegativeQuirk,
            },
          ],
        },
      ],
    },
    {
      name: 'Fish Idol',
      icon: `${iconPath}fish_idol.png`,
      description: 'A strange presence is felt near this statue of worship.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.debuff(
                [
                  {
                    type: 'DMG',
                    amount: -25,
                    percent: true,
                  },
                  {
                    type: 'ACC',
                    amount: -10,
                  },
                ], true),
            },
            {
              chances: 50,
              type: outcomeTypes.debuff(
                [
                  {
                    type: 'DODGE',
                    amount: -12,
                  },
                  {
                    type: 'Marked',
                    amount: '3 round',
                  },
                ], true),
            },
          ],
        },
        {
          activator: activators.holyWater,
          outcomes: [
            {
              chances: 50,
              type: outcomeTypes.buff(
                [
                  {
                    type: 'DMG',
                    amount: 18,
                    percent: true,
                  },
                ], true),
            },
            {
              chances: 50,
              type: outcomeTypes.buff(
                [
                  {
                    type: 'DMG',
                    amount: 10,
                    percent: true,
                  },
                  {
                    type: 'ACC',
                    amount: 5,
                  },
              ], true),
            },
          ],
        },
      ],
    },
    {
      name: 'Giant Fish Carcass',
      icon: `${iconPath}giant_fish_carcass.png`,
      description: 'A stuffed sea creature has washed ashore. Wonder that it ate...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 16.7,
              type: outcomeTypes.goldGemsSupplies,
            },
            {
              chances: 16.7,
              type: outcomeTypes.disease('The Red Plague'),
            },
            {
              chances: 11.1,
              type: outcomeTypes.blight,
            },
            {
              chances: 5.5,
              type: outcomeTypes.bleed,
            },
            {
              chances: 50,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.medicinalHerb,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.anyLoot,
              amount: 3,
            },
          ],
        },
      ],
    },
    {
      name: 'Giant Oyster',
      icon: `${iconPath}giant_oyster.png`,
      description: 'A live oyster. Who knows what value it hides...',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 40,
              type: outcomeTypes.goldTrinket,
              amount: 2,
            },
            {
              chances: 40,
              type: outcomeTypes.bleed,
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ],
        },
        {
          activator: activators.shovel,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldTrinket,
              amount: 3,
            },
          ],
        },
        {
          activator: activators.dogTreats,
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buff([{
                type: 'DODGE',
                amount: 25,
              }]),
            },
          ],
        },
      ],
    },
    {
      name: 'Ship\'s Figurehead',
      icon: `${iconPath}ships_figurehead.png`,
      description: 'The figurehead emits a marvelous aura.',
      options: [
        {
          activator: activators.nothing,
          outcomes: [
            {
              chances: 66.7,
              type: outcomeTypes.buff([{
                type: 'SPD',
                amount: 20,
                percent: true,
              }], true),
            },
            {
              chances: 33.3,
              type: outcomeTypes.removeStress(30),
            },
          ],
        },
      ],
    },
  ],
}

export function getCuriosForLocation(location) {
  return curiosPerLocation[location];
}
