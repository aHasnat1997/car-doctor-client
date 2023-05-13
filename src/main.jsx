// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import LogInPage from './pages/Authentication/LogInPage.jsx';
import RegistrationPage from './pages/Authentication/RegistrationPage.jsx';
import AuthProvider from './AuthSystem/AuthProvider.jsx';
import ServiceDetails from './pages/serviceDetails/ServiceDetails.jsx';
import CheckOut from './pages/checkOut/CheckOut.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/service_details/:id',
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: '/check_out/:id',
        element: <ProtectedRoutes><CheckOut /></ProtectedRoutes>,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: '/login',
        element: <LogInPage />
      },
      {
        path: '/registration',
        element: <RegistrationPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>,
)
