import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dance-studio/',    // must be your repo name with slashes
  plugins: [react()],
});
