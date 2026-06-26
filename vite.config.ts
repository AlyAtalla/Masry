import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const explicitBase = process.env.VITE_BASE_PATH || process.env.BASE_URL
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const isUserSite = repoName.toLowerCase().endsWith('.github.io')
const computedBase = explicitBase || (isGitHubPages ? (isUserSite ? '/' : `/${repoName}/`) : '/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: computedBase,
})
