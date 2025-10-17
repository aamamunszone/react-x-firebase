import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import AuthProvider from './context/AuthProvider.jsx';
import { RouterProvider } from 'react-router/dom';
import { router } from './routes/PublicRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
