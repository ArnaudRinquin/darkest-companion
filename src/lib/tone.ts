// Classifies an outcome label as good / bad / neutral for color + glyph.
// Keyword-based on purpose: labels are short and come from a fixed vocabulary.
export type Tone = 'good' | 'bad' | 'neutral';

const BAD = [
  /stress \+/i,
  /\bbleed\b/i,
  /\bblight\b/i,
  /disease|plague|rabies|tapeworm|tetanus/i,
  /negative quirk/i,
  /^debuff/i,
  /crimson curse/i,
  /^fight|ambush|summon/i,
  /decrease light/i,
];
const GOOD = [
  /gold|gems?|heirloom|trinket|loot|food|supplies|firewood|comet shards|scouting/i,
  /stress heal|^heal|party heal|purge|cure/i,
  /^buff/i,
  /positive quirk/i,
  /^camp/i,
  /set light to 100/i,
  /the blood/i,
  /key/i,
  /^torch$/i,
];

export function tone(label: string): Tone {
  if (/^nothing$/i.test(label.trim())) return 'neutral';
  if (/^purge|cure status/i.test(label)) return 'good';
  if (BAD.some((r) => r.test(label))) return 'bad';
  if (GOOD.some((r) => r.test(label))) return 'good';
  return 'neutral';
}
