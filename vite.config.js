import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honour a port assigned via the environment (e.g. the Claude preview
    // launcher); fall back to Vite's default when unset.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
