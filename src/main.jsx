import React from 'react';
import ReactDOM from 'react-dom/client';
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
import OldCollection from "./pages/OldCollection";
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import NewCollection from './pages/NewCollection';
import GlobalStyle from "./styles/GlobalStyle";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Questions from './pages/Questions';

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
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/newcollection",
        element: <NewCollection />
      },
      {
        path: "/oldcollection",
        element: <OldCollection />
      },
      {
        path: "/questions",
        element: <Questions />
      }
    ] 
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
