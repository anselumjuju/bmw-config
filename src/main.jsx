import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </HelmetProvider>
  </StrictMode>,
)
