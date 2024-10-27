import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Leva } from 'leva';
import { NextUIProvider } from '@nextui-org/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    <Leva flat />
  </StrictMode>
);
