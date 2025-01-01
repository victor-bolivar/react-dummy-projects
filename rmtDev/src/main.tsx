import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TanStackProvider } from './providers/TanstackProvider.tsx'
import { RouterProvider } from "react-router";
import { router } from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <RouterProvider router={router} />
    </TanStackProvider>
  </StrictMode>,
)
