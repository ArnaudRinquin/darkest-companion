// Data from @damp
// https://docs.google.com/spreadsheets/d/1e9VBtUO0tY2l58DSUb_JHnULDuAhziqnOCQH1VS4GtY/edit#gid=61256338
const baseProvisions = {
  short: {
    food: 12,
    torches: 8,
    shovels: 2
  },
  medium: {
    food: 18,
    torches: 13,
    shovels: 3
  },
  long: {
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
      shovel: 3,
      herbs:1,
      holyWaters: 1,
      bandages: 2,
      antivenoms: 2,
      keys: 1,
    },
    medium: {
      ...baseProvisions.medium,
      shovel: 5,
      herbs: 2,
      holyWaters: 2,
      bandages: 3,
      antivenoms: 3,
      keys: 2,
    },
    long: {
      ...baseProvisions.long,
      shovel: 6,
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
      shovel: 3,
      herbs:2,
      holyWaters: 0,
      bandages: 2,
      antivenoms: 0,
      keys: 1,
    },
    medium: {
      ...baseProvisions.medium,
      shovel: 5,
      herbs: 3,
      holyWaters: 1,
      bandages: 4,
      antivenoms: 0,
      keys: 2,
    },
    long: {
      ...baseProvisions.long,
      shovel: 6,
      herbs: 4,
      holyWaters: 1,
      bandages: 6,
      antivenoms: 0,
      keys: 3,
    }
  },
}

export function getMissionProvisions(location, length) {
  return DATA[location][length];
}
