import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react_clothe_shop_website/', // 👈 Add your repo name here
  plugins: [react()],
})
