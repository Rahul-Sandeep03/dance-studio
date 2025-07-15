// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Change this line:
  base: '/', // Set base to root for Netlify deployment
  plugins: [react()],
})