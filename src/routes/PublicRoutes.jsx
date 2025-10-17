import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import PrivateRoutes from './PrivateRoutes';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import FAQ from '../pages/FAQ/FAQ';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      { path: 'about', Component: About },
      {
        path: 'services',
        element: (
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        ),
      },
      { path: 'contact', Component: Contact },
      {
        path: 'dashboard',
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      { path: 'faq', Component: FAQ },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { index: true, Component: <Navigate to="login" replace /> },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
    ],
  },
]);
