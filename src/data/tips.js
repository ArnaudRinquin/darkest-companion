const tips = {
  ruins: {
    effective: [
      {
        label: 'Blight',
        details: 'low resist',
      },
      {
        label: 'Crusader',
        details: 'extra DMG vs. Unholy',
      },
      {
        label: 'Direct damage',
        details: 'No high PROT',
      },
    ],
    ineffective: [
      {
        label: 'Bleeds',
        details: 'high resist',
      },
    ],
    dangers: [
      {
        label: 'Bone spearman',
        details: 'at low ranks',
      },
      {
        label: 'Stress dealers',
        details: 'Bone Courtier, Cultist Acolyte and Madman',
      },
      {
        label: 'Books and bookshelves',
        details: 'No good outcome',
      },
    ]
  },
  warrens: {
    effective: [
      {
        label: 'Bleed',
        details: 'low resist',
      },
      {
        label: 'Houndmaster',
        details: 'extra DMG vs. Beast',
      },
      {
        label: 'Scouting',
        details: 'Specific map layouts',
      },
    ],
    ineffective: [
      {
        label: 'Blight',
        details: 'high resist',
      },
    ],
    dangers: [
      {
        label: 'Swinetaur',
        details: 'especially in the back rows',
      },
      {
        label: 'Swine chopper',
        details: 'High bleed, hard to kill',
      }
    ]
  },
  weald: {
    effective: [
      {
        label: 'Bandages',
        details: 'Many curios + ennemies inflicting bleeds',
      },
      {
        label: 'Antivenom',
        details: 'Many curios + ennemies inflicting blights',
      },
      {
        label: 'Shovels',
        details: 'More walls',
      },
      {
        label: 'Holy waters',
        details: 'Curios affecting quirks and stress positively',
      },
    ],
    ineffective: [],
    dangers: [
      {
        label: 'Crone',
        details: 'in the front rows',
      },
      {
        label: 'Ectoplasm',
        details: 'can summon others',
      },
      {
        label: 'Rabid Gnasher',
        details: 'Fast + deals bleeds and diseases',
      },
    ]
  },
  cove: {
    effective: [
      {
        label: 'Medicinal herbs',
        details: 'Curio, traps, debuff interactions',
      },
      {
        label: 'Shovels',
        details: 'Curio interactions',
      },
      {
        label: 'Bandages',
        details: 'Many bleed dealing ennemies',
      },
      {
        label: 'Blight',
        details: 'Low blight resistance + high PROT',
      },
      {
        label: 'Prot debuff',
        details: 'Ennemies with high PROT',
      },
      {
        label: 'Occultist',
        details: 'Ennemies mostly Eldritch',
      },
    ],
    ineffective: [
      {
        label: 'Bleed',
        details: 'High bleed resistance',
      }
    ],
    dangers: [
      {
        label: 'Pelagic Groupers',
        details: 'Deals lot of damages',
      },
      {
        label: 'Thrall',
        details: 'Explodes and deals a lot of damages if left alive',
      },
    ]
  },
}

export function getTipsForLocation(location) {
  return tips[location];
}
