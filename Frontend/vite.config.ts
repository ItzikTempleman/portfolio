import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: { open: true },                // dev opens at /
  base: mode === 'production' ? '/REPO_NAME/' : '/',  // <- key line
  build: { outDir: 'docs' }              // Pages will serve from /docs
}))