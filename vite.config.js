import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Se usar React
// import vue from '@vitejs/plugin-vue';   // Se usar Vue

export default defineConfig({
  plugins: [
    react(), // ou vue()
  ],
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    strictPort: true, // Evita falhas se a porta estiver ocupada
  },
  build: {
    outDir: 'dist', // Pasta de saída do build
    emptyOutDir: true, // Limpa a pasta antes do build
    sourcemap: true, // Gera source maps (útil para debug)
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para imports (ex: import Button from '@/components/Button')
    },
  },
});