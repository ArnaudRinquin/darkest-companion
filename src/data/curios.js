const outcomeTypes = {
  nothing: {
    label: 'Nothing',
  },
  scouting: {
    label: 'Scouting',
  },
  heirlooms: {
    label: 'Heirlooms',
  },
  positiveQuirk: {
    label: 'Gain a positive quirk',
  },
  negativeQuirk: {
    label: 'Gain a negative quirk',
  },
  negativeQuirkOrDisease: {
    label: 'Gain a negative quirk or disease',
  },
  goldGemsSupplies: {
    label: 'Gold, gems or supplies',
  },
  add50Stress: {
    label: 'Stress +50',
  },
  add20Stress: {
    label: 'Stress +20',
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
            type: outcomeTypes.add50Stress
          },
          {
            chances: 33,
            type: outcomeTypes.positiveQuirk,
          },
          {
            chances: 16,
            type: outcomeTypes.negativeQuirk,
          },
          {
            chances: 16,
            type: outcomeTypes.nothing,
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
              type: outcomeTypes.add50Stress,
            },
            {
              chances: 16,
              type: outcomeTypes.positiveQuirk,
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
    }
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
