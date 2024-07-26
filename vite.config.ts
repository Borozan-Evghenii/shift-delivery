/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/utils/api'),
      '@contexts': path.resolve(__dirname, './src/utils/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@styles': path.resolve(__dirname, './src/assets/styles')
    }
  }
});
