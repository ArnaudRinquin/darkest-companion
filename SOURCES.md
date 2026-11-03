# Data sources

All game data shown on the site, where it comes from, and what's still uncertain. Anything flagged `unsure` in the data shows an **Unverified** note on the site.

## Curios

| Data | Source | Notes |
|---|---|---|
| Base-game curios (Ruins, Warrens, Weald, Cove, shared) | v1 of this site (2016), community-compiled | Ported as-is (`src/data/curios.generated.ts`), then checked against the wiki in Nov 2026. |
| Corrections to base-game curios | [Darkest Dungeon Wiki: Curios](https://darkestdungeon.wiki.gg/wiki/Curios), [Module:Curios/Data](https://darkestdungeon.wiki.gg/wiki/Module:Curios/Data) | Each one is listed in `fixes` in `src/data/curios.ts`, and the corrected curios cite the wiki on the site. |
| Courtyard curios (The Crimson Court) | same wiki pages | `src/data/curios.dlc.ts` |
| Farmstead curios (The Color of Madness) | same wiki pages | `src/data/curios.dlc.ts` |
| Special & quest curios (Old Road, Darkest Dungeon, Courtyard bosses, Infestation) | same wiki pages | `src/data/curios.dlc.ts` |
| DLC curio sprites, The Blood / Hand of Glory / Laudanum icons | darkestdungeon.wiki.gg images (© Red Hook Studios) | Resized to max 240px. |

Raw research notes, including every discrepancy found: [`data/wiki-research-2026-11.json`](data/wiki-research-2026-11.json).

### Corrections made to v1 data

Eldritch Altar (odds added up to 115%), Bookshelf (stress +15, not +50), Confession Booth (stress +15), Suit of Armor (15% PROT), Stack of Books (a single shared curio, not separate Ruins and Warrens ones; now shown in every base region), Ancient Coffin and Sacrificial Stone (duplicated quirk), Beast Carcass (disease odds split), Bas-Relief (odds), Brackish Tide Pool (antivenom result), Fish Idol (holy water result), Ship's Figurehead (odds and buff), Fish Carcass (herb loot), Dinner Cart (The Black Plague), Makeshift Dining Table (Tapeworm), Moonshine Barrel (Tippler quirk), Occult Scrawlings (odds), Sack (gold only). Names fixed: Sacrificial Stone, Brackish Tide Pool, Fish Carcass, Makeshift Dining Table.

### Known gaps / unverified

- **Journal Entry outcomes**: the wiki lists a Journal Entry outcome on book curios (Stack of Books, Bookshelf, Pile of Scrolls…). v1 leaves it out and scales the other odds to 100%. Kept that way for now.
- **Heirloom Chest**: the wiki describes two variants with different loot. v1 merged them. Flagged on the site.
- **Decorative Urn**: v1 odds add up to 98%. Not checked yet.
- **Hooded Shrew**: the wiki's by-hand odds add up to 93.1%, so one outcome is probably missing on the wiki.
- **Damned Fountain**: "+16.7% Bleed" on the loot row may be a wiki typo for The Blood.
- **Wizened Shrew**: two separate "Nothing" rows on the wiki.
- **Fresh Harvest / Rotted Fare**: the wiki doesn't say whether they affect one hero or the whole party.
- **Quest-only base curios** (Reliquary, Corrupted Altar, Chirurgeon's Satchel, Infected Corpse, Shipment Crate, Protective Ward, Foodstuff Crate, Animalistic Shrine) aren't listed yet.
- **Shieldbreaker** and **The Butcher's Circus** add no curios.

## Provisions

| Data | Source |
|---|---|
| Base-region loadouts per length | v1, from @damp's [community spreadsheet](https://docs.google.com/spreadsheets/d/1e9VBtUO0tY2l58DSUb_JHnULDuAhziqnOCQH1VS4GtY/edit#gid=61256338) |
| Shop prices and stack sizes | v1 |
| Courtyard / Farmstead guidance | [The Courtyard](https://darkestdungeon.wiki.gg/wiki/The_Courtyard), [Farmstead](https://darkestdungeon.wiki.gg/wiki/Farmstead), [Provisions](https://darkestdungeon.wiki.gg/wiki/Provisions) |

**The spreadsheet has changed since v1.** Its current values differ from the v1 numbers in a few places. Not applied yet, pending a decision:

| Region | Item | v1 (site) | Spreadsheet now |
|---|---|---|---|
| all | Food, long | 20 | 24 |
| Ruins | Herbs, long | 3 | 2 |
| Ruins | Keys, long | 3 | 2 |
| Warrens | Holy Water | 2 / 3 / 4 | 1 / 2 / 3 |
| Weald | Holy Water, long | 3 | 2 |
| Weald | Bandages, medium | 3 | 2 |

The spreadsheet also lists class-specific extras (Houndmaster: 2 dog treats, Plague Doctor: 1 antivenom, Grave Robber: 1 shovel, Arbalest: 1 bandage, Crusader: 1 holy water, Leper/Jester: 1 herb). Not shown yet.

### DLC loadouts (Courtyard quests, Farmstead modes)

Neither area uses short/medium/long, so the site offers a quest/mode picker instead. No source gives counts per quest. Each loadout is labelled on the site, with a "Why these numbers?" panel listing its sources:

| Quest / mode | Basis | Main sources |
|---|---|---|
| Burn the Hives, Gather the Blood, Garden Guardian | **Estimate**: short baseline, no firewood, one stack of torches, 6 Blood | wiki Courtyard + Provisions, ludo.guide (quest lengths) |
| Baron, Viscount, Countess (epic) | **Community**: [gamepressure](https://www.gamepressure.com/darkestdungeon/recommended-provisions/z09dc0) area-wide list + [ludo.guide](https://www.ludo.guide/guide/darkest-dungeon/courtyard) "three sets" of Blood; torches/firewood/keys filled in from wiki rules | |
| Apprentice, Veteran | **Estimate**: no torches/shovels/firewood, food for one camp, keys for the Stockpile | wiki Farmstead, Steam discussion, gamepressure |
| Endless Harvest | **Community**: [gamepressure](https://www.gamepressure.com/darkestdungeon/recommended-consumables/zcb0fd), 2 stacks each of herbs/holy water/bandages/antivenom, 16–24 food | |

Disagreements kept visible: gamepressure says "as many torches as you can carry", the wiki says one stack is enough (we use one stack). Viscount holy water: ludo.guide "a set" (6) vs gamepressure 1–2 (we use 6). Raw research: [`data/dlc-loadouts-research.json`](data/dlc-loadouts-research.json).

The Blood can't be bought (cost shown as 0): it comes from loot, or 2/week from the Sanguine Vintners district.

## Tips

Base-region tips are from v1 (community-written). Courtyard and Farmstead tips come from the wiki and gamepressure, and each links its source (↗).

## Outcome colors

Green ▲ / red ▼ on each outcome comes from a keyword classifier (`src/lib/tone.ts`), not game data. Anything it can't classify stays neutral.
