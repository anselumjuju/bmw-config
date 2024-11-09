import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.29.180',
  //   port: 3000
  // }
})
