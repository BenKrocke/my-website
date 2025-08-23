
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://benkrocke.com.au',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
