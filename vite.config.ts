import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),svgr(),],
  build: {
    chunkSizeWarningLimit: 1000,
    
  },
  


    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
   


})


