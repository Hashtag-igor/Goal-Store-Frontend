import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home"
import App from './App';
import UserProvider from "./contexts/UserContext"

import Register from './pages/Register'
import Login from './pages/Login';
import Account from './pages/Account';
import BRShirts from './pages/BRShirts';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =  createBrowserRouter([  
  {
    path: "/", 
    element: <App />,                    
    children: [                           
      {
        path: "/",                         
        element: <Home />,
      },
      {
        path: "/",                         
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/brshirts",
        element: <BRShirts />
      },
    ] 
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
