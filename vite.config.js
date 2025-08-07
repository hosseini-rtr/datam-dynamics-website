import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          // Add more chunks as needed
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable compression
    reportCompressedSize: true,
    // Configure chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Enable compression in development
    compress: true,
  },
  preview: {
    // Enable compression in preview
    compress: true,
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
