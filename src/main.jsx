import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home"
import App from './App';
import UserProvider from "./contexts/UserContext"

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
