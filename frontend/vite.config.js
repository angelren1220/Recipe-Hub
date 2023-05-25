import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set an alias for the src directory
    },
    extensions: ['.js', '.jsx', '.json', '.scss'], // Include .scss extension for SCSS files
  },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly', // Enable camelCase for CSS module class names
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`, // Import a global variables file
      },
    },
  },

  build: {
    assetsDir: 'assets', // Output directory for bundled assets
  },
});
