import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/** CSS Files */
import './index.css';

export default function Initializer() {
  return <RouterProvider router={router} />;
}
