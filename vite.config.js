import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/headless": "https://sales-us.matrix.squiz.cloud",
      "/__api": "https://sales-us.matrix.squiz.cloud",
    }  
  } ,
  root: `./component/cs_app/`,
  plugins: [react()],
  build: {
    
    outDir:`../component/dist/`,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
