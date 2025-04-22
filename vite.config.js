import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html' // Caminho explícito para o HTML
      }
    }
  }
})

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'lucide-react' // Adicione outros pacotes se necessário
      ]
    }
  }
})