import { describe, expect, it } from 'vitest';
import { CURIOS } from '../src/data/curios';
import { tone } from '../src/lib/tone';

describe('tone', () => {
  it.each([
    ['Nothing', 'neutral'],
    ['Stress +25', 'bad'],
    ['Stress heal 30', 'good'],
    ['Gold or gems', 'good'],
    ['Gain random negative quirk', 'bad'],
    ['Gain Weald Explorer positive quirk', 'good'],
    ['Buff 20% DMG, 4 SPD until camp', 'good'],
    ['Debuff -12 DODGE until camp', 'bad'],
    ['The Black Plague disease', 'bad'],
    ['Any loot + 16.7% The Blood', 'good'],
    ['Fight: Supplicant, Sycophant, Esquire', 'bad'],
    ['Crimson Curse', 'bad'],
    ['Purge a negative quirk', 'good'],
  ])('%s → %s', (label, expected) => expect(tone(label)).toBe(expected));

  it('reports labels it cannot classify (review list, not a failure)', () => {
    const unknown = [...new Set(CURIOS.flatMap((c) => c.options.flatMap((o) => o.outcomes.map((x) => x.label))))].filter(
      (l) => tone(l) === 'neutral' && !/^nothing$/i.test(l),
    );
    console.log('neutral labels:', unknown);
    expect(Array.isArray(unknown)).toBe(true);
  });
});
