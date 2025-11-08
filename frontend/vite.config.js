import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FrontendAdministracionSorteos/',  // solo la subcarpeta del repo
})
