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
import NationShirts from './pages/NationShirts';
import RDMShirts from './pages/RDMShirts';
import RetroShirts from './pages/RetroShirts';
import SearchPage from './pages/SearchPage';

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
      {
        path: "/nationshirts",
        element: <NationShirts />
      },
      {
        path: "/rdmshirts",
        element: <RDMShirts />
      },
      {
        path: "/retroshirts",
        element: <RetroShirts />
      },
      {
        path: "/search",
        element: <SearchPage />
      }
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
