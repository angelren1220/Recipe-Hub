import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';

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
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import "@/styles/variables.scss";`, // Import a global variables file
      },
    },
  },
});
