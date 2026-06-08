import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages.
// For a project repo served at https://<user>.github.io/<repo>/ set this to '/<repo>/'.
// Override at build time with:  BASE_PATH=/my-repo/ npm run build
// For a user/org site or custom domain, set BASE_PATH=/
const base = process.env.BASE_PATH || '/majal/'

export default defineConfig({
  base,
  plugins: [react()],
})
