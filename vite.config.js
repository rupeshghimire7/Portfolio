import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For a GitHub user site (username.github.io) base should be '/'
  // For a project site (username.github.io/repo) change this to `'/REPO_NAME/'`
  base: '/'
})
