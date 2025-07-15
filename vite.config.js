// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // This must be '/' for Netlify unless you have a custom subpath setup
  plugins: [react()],
})