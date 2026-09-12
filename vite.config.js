import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-helmet-async/')) {
            return 'vendor-helmet';
          }
        },
      },
    },
  },
  server: {
    watch: {
      ignored: ['**/*.mp4', '**/*.mp3', '**/*.wav', '**/*.ogg'],
    },
  },
});


