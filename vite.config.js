import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path. The site is served from the root of the custom domain
// (majal.website), so the base is '/'.
// If you ever serve from a project subpath instead (e.g.
// <user>.github.io/<repo>/), override at build time: BASE_PATH=/my-repo/ npm run build
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
