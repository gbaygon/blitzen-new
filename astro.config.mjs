import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.blitzeninsights.com',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
