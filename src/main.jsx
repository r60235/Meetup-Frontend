import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventDetails from './pages/EventDetails.jsx';


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/event/:id', element: <EventDetails /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
