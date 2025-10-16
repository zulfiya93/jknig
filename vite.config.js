import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ВАЖНО: для GitHub Pages в подкаталоге укажите base с названием репозитория
  base: '/teacher-portfolio/',
})
