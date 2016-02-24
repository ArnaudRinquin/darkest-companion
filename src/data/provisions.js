// Data from @damp
// https://docs.google.com/spreadsheets/d/1e9VBtUO0tY2l58DSUb_JHnULDuAhziqnOCQH1VS4GtY/edit#gid=61256338
const iconPath = `./icons/provisions/`

const provisions = {
  firewood: {
    label: 'Firewood',
    icon: `${iconPath}Firewood.png`,
    cost: 0,
    stack: 1,
  },
  food: {
    label: 'Food',
    icon: `${iconPath}Food.png`,
    cost: 75,
    stack: 12,
  },
  shovels: {
    label: 'Shovels',
    icon: `${iconPath}Shovel.png`,
    cost: 250,
    stack: 4,
  },
  antivenoms: {
    label: 'Antivenoms',
    icon: `${iconPath}Antivenom.png`,
    cost: 150,
    stack: 6,
  },
  bandages: {
    label: 'Bandages',
    icon: `${iconPath}Bandage.png`,
    cost: 150,
    stack: 6,
  },
  herbs: {
    label: 'Medicinal Herbs',
    icon: `${iconPath}Medicinal_Herbs.png`,
    cost: 200,
    stack: 6,
  },
  keys: {
    label: 'Skeleton Keys',
    icon: `${iconPath}Skeleton_Key.png`,
    cost: 200,
    stack: 6,
  },
  holyWaters: {
    label: 'Holy Waters',
    icon: `${iconPath}Holy_Water.png`,
    cost: 150,
    stack: 6,
  },
  torches: {
    label: 'Torches',
    icon: `${iconPath}Torch.png`,
    cost: 75,
    stack: 8,
  },
}

const baseProvisions = {
  short: {
    firewood: 0,
    food: 12,
    torches: 8,
    shovels: 2
  },
  medium: {
    firewood: 1,
    food: 18,
    torches: 13,
    shovels: 3
  },
  long: {
    firewood: 2,
    food: 20,
    torches: 16,
    shovels: 4
  }
}

const DATA = {
  ruins: {
    short: {
      ...baseProvisions.short,
      herbs:1,
      holyWaters: 2,
      bandages: 1,
      antivenoms: 0,
      keys: 1,
    },
    medium: {
      ...baseProvisions.medium,
      herbs: 2,
      holyWaters: 3,
      bandages: 2,
      antivenoms: 0,
      keys: 2,
    },
    long: {
      ...baseProvisions.long,
      herbs: 3,
      holyWaters: 4,
      bandages: 3,
      antivenoms: 0,
      keys: 3,
    }
  },
  warrens: {
    short: {
      ...baseProvisions.short,
      torches: 10,
      herbs:3,
      holyWaters: 2,
      bandages: 1,
      antivenoms: 0,
      keys: 2,
    },
    medium: {
      ...baseProvisions.medium,
      torches: 16,
      herbs: 4,
      holyWaters: 3,
      bandages: 2,
      antivenoms: 1,
      keys: 3,
    },
    long: {
      ...baseProvisions.long,
      torches: 20,
      herbs: 5,
      holyWaters: 4,
      bandages: 3,
      antivenoms: 1,
      keys: 3,
    }
  },
  weald: {
    short: {
      ...baseProvisions.short,
      shovels: 3,
      herbs:1,
      holyWaters: 1,
      bandages: 2,
      antivenoms: 2,
      keys: 1,
    },
    medium: {
      ...baseProvisions.medium,
      shovels: 5,
      herbs: 2,
      holyWaters: 2,
      bandages: 3,
      antivenoms: 3,
      keys: 2,
    },
    long: {
      ...baseProvisions.long,
      shovels: 6,
      herbs: 2,
      holyWaters: 3,
      bandages: 4,
      antivenoms: 4,
      keys: 2,
    }
  },
  cove: {
    short: {
      ...baseProvisions.short,
      shovels: 3,
      herbs:2,
      holyWaters: 0,
      bandages: 2,
      antivenoms: 0,
      keys: 1,
    },
    medium: {
      ...baseProvisions.medium,
      shovels: 5,
      herbs: 3,
      holyWaters: 1,
      bandages: 4,
      antivenoms: 0,
      keys: 2,
    },
    long: {
      ...baseProvisions.long,
      shovels: 6,
      herbs: 4,
      holyWaters: 1,
      bandages: 6,
      antivenoms: 0,
      keys: 3,
    }
  },
}

export function getMissionProvisions(location, length) {
  const quantities = DATA[location][length];
  return Object.keys(quantities).reduce((result, type) => {
    const quantity = quantities[type];
    const subCost = provisions[type].cost * quantity;
    return {
      ...result,
      totalCost: result.totalCost + subCost,
      [type]: {
        quantity,
        ...provisions[type],
        subCost,
      }
    };
  }, { totalCost: 0 });
}
