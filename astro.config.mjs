import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://arnaud.rocks/darkest-companion/
export default defineConfig({
  site: 'https://arnaud.rocks',
  base: '/darkest-companion/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
