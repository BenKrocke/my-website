
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.benkrocke.com.au',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
