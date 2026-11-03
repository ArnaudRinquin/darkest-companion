import { CURIOS } from '../data/curios';
import type { Region } from '../data/types';

export const SITE_NAME = 'Darkest Companion';

export function regionCurioNames(region: Region): string[] {
  return CURIOS.filter((c) => c.region === region.id).map((c) => c.name);
}

/** WebApplication schema, so search engines know it's a free tool. */
export function appLd(url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url,
    description,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    about: { '@type': 'VideoGame', name: 'Darkest Dungeon', publisher: 'Red Hook Studios' },
  };
}
