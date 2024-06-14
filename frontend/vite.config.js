import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/api/auth'),
      },
      '/posts': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/posts/, '/api/posts'),
      },
      '/upload': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '/api/upload'),
      },
      '/api/upload': {
        target: 'http://localhost:8800', // Adjust the target URL to match your Express server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/upload/, '/api/upload'),
      },
    },
  },
})
