import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'import.meta.env.VITE_APP': JSON.stringify(process.env.APP)
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
  },

  test: {
    root: './tests/unit',
    globals: true,
    environment: 'jsdom',
    maxWorkers: 1,
    minWorkers: 1
  }
});
