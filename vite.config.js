import { defineConfig } from 'vite'
import react from '@vitejs/vite-plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Nordeste/', // <-- Substitua pelo nome real do seu repositório no GitHub
})