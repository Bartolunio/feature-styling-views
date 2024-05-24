import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve('./src/components'),
      },
      {
        find: '@assets',
        replacement: resolve('./src/assets'),
      },
    ],
  },
});
