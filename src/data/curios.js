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
  gainPositiveQuirk(type) {
    return {
      label: `Gain ${type} positive quirk`,
    }
  },
  gainNegativeQuirk(type) {
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
  goldGems: {
    label: 'Gold or gems',
  },
  goldTrinket: {
    label: 'Gold or trinket',
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
  buffUntilCamp(buffType, by) {
    return {
      label: `Buff ${buffType} +${by}% Until Camp`,
    }
  },
  disease(diseaseName) {
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
}

const universalCurios = [
  {
    name: 'Crate',
    options: [
      {
        with: 'default',
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
    options: [
      {
        with: 'default',
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
    description: 'A weird and unnatural statuette that appears to be an item of unholy worship.',
    options: [
      {
        with: 'default',
        outcomes: [
          {
            chances: 50,
            type: outcomeTypes.addStress(50)
          },
          {
            chances: 33,
            type: outcomeTypes.gainPositiveQuirk('random'),
          },
          {
            chances: 16,
            type: outcomeTypes.gainNegativeQuirk('random'),
          },
          {
            chances: 16,
            type: outcomeTypes.nothing,
          },
        ],
      },
      {
        with: 'holyWater',
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
    description: 'A chest with your family\'s sigil.',
    options: [
      {
        with: 'default',
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
        with: 'key',
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.heirlooms,
            amount: 3
          },
        ],
      },
      {
        with: 'antivenom',
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
    options: [
      {
        with: 'default',
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
    options: [
      {
        with: 'default',
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
    description: 'It says: "The sacrifice of fire is the gate to ruin! Place a torch if you crave the void!"',
    options: [
      {
        with: 'default',
        outcomes: [
          {
            chances: 100,
            type: outcomeTypes.nothing,
          },
        ],
      },
      {
        with: 'torch',
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
    description: 'A long-forgotten strongbox sits on the cold stone floor, its contents unknown.',
    options: [
      {
        with: 'default',
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
      description: 'A partially intact set of experimental equipment.',
      options: [
        {
          with: 'default',
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
          with: 'torch',
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.setLight(100),
            },
          ],
        },
        {
          with: 'medicinalHerb',
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
      description: 'A small holy altar seems out of place against the backdrop of corruption.',
      options: [
        {
          with: 'default',
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buffUntilCamp('DMG', 20),
            },
          ],
        },
        {
          with: 'holyWater',
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.buffUntilCamp('DMG', 30),
            },
          ],
        },
      ],
    },
    {
      name: 'Bookshelf',
      description: 'A bookshelf full of old, leather-bound books.',
      options: [
        {
          with: 'default',
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
              type: outcomeTypes.gainPositiveQuirk('random'),
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
      description: 'A forsaken confession booth. It hasn\'t been used in years.',
      options: [
        {
          with: 'default',
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
          with: 'holyWater',
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
      description: 'An urn holds ashes of the departed.',
      options: [
        {
          with: 'default',
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
              type: outcomeTypes.disease('Random'),
            },
            {
              chances: 22,
              type: outcomeTypes.nothing,
            },
          ]
        },
        {
          with: 'holyWater',
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldTrinket,
              amount: 2,
            },
          ]
        },
        {
          with: 'shovel',
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
      description: 'An ornate fountain of holy purport.',
      options: [
        {
          with: 'default',
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
          with: 'holyWater',
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
      description: 'A rusty iron maiden stands against the wall, clasped shut.',
      options: [
        {
          with: 'default',
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
              type: outcomeTypes.disease('Random'),
            },
            {
              chances: 20,
              type: outcomeTypes.nothing,
            },
          ]
        },
        {
          with: 'medicinalHerb',
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
      description: 'There could be valuables left inside, but this cabinet is locked.',
      options: [
        {
          with: 'default',
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
          with: 'key',
          outcomes: [
            {
              chances: 100,
              type: outcomeTypes.goldGemsHeirlooms,
              amount: 1.5,
            },
          ]
        },
        {
          with: 'shovel',
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
      description: 'An ornate sarcophagus. It is slightly ajar.',
      options: [
        {
          with: 'default',
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
      description: 'A stack of literary treasures in an unlikely location.',
      options: [
        {
          with: 'default',
          outcomes: [
            {
              chances: 26,
              type: outcomeTypes.addStress(25),
              amount: 2,
            },
            {
              chances: 26,
              type: outcomeTypes.gainPositiveQuirk('Random'),
            },
            {
              chances: 13,
              type: outcomeTypes.gainNegativeQuirk('Random'),
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
          with: 'torch',
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
      description: 'An antique suit of armor stands amidst the ruins.',
      options: [
        {
          with: 'default',
          outcomes: [
            {
              chances: 75,
              type: outcomeTypes.buffUntilCamp('PROT/DODGE', 10),
              amount: 2,
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
  ],
  'weald': [
    ...universalCurios,
  ],
  'cove': [
    ...universalCurios,
  ],
}

export function getCuriosForLocation(location) {
  return curiosPerLocation[location];
}
