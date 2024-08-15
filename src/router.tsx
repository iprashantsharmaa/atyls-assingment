import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
  {
    element: (
      <App />
    ),
    children: [
      {
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
