import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos estáticos
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Divide las dependencias principales en un archivo separado
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajusta el límite de tamaño de los chunks (opcional)
  },
  
  server: {
    port: 3000,
  },
});
