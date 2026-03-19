import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      apply: 'build',
      enforce: 'post',
      generateBundle() {
        mkdirSync(resolve(__dirname, 'dist'), { recursive: true })
        copyFileSync(
          resolve(__dirname, '404.html'),
          resolve(__dirname, 'dist/404.html')
        )
      },
    },
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
