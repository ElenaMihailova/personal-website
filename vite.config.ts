import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: { alias: { '@': fromRoot('./src') } },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [fromRoot('./src/styles')],
      },
    },
  },
});
