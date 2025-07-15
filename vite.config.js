import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const REPO_NAME = 'dance-studio';

// https://vitejs.dev/config/
export default defineConfig({
    base: `/${REPO_NAME}/`,      // must be your repo name with slashes
  plugins: [react()],
});