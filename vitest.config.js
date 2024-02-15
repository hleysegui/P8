import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue(), react()],
 test:{
   globals:true,
   environment: 'jsdom',
   setupFiles: ["./setupTests.js"],
 }
})
