import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/headless": "https://sales-au.matrix.squiz.cloud",
      "/__api": "https://sales-au.matrix.squiz.cloud",
    }  
  } ,
  root: `./component/cs_app/`,
  plugins: [react()],
  build: {
    
    outDir:`../dist/`,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
