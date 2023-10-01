import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/home/Home';
// import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NewLogin from './Component/NewLogin/NewLogin';
import AuthProvider from './authProvider/AuthProvider';
import NewRegister from './Component/NewRegister/NewRegister';
import ContextLogin from './Component/ContextLogin/ContextLogin';
import Profile from './Component/Profile/Profile';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <NewLogin></NewLogin>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/newregister',
        element : <NewRegister></NewRegister>
      },
      {
        path : '/contextlogin',
        element : <ContextLogin></ContextLogin>
      },
      {
        path : '/profile',
        element : <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
