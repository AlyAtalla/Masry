import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Masry'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const isUserSite = repoName.toLowerCase().endsWith('.github.io')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? (isUserSite ? '/' : `/${repoName}/`) : '/',
})
