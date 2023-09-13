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
import PrivacyPolicy from './pages/PrivacyPolicy';
import { UserContext } from './contexts/UserContext';

// Função para verificar se o usuário está logado antes de renderizar as rotas de login e registro
function AuthRoute({ children }) {
  const { userLoggedIn } = React.useContext(UserContext);

  if (userLoggedIn) {
    // Se o usuário estiver logado, redirecione para a página principal
    window.location.href = '/';
    return null;
  }

  return children;
}

export default AuthRoute;


const routes = [
  {
    path: "/", 
    element: <App />,                    
    children: [                           
      {
        path: "/",                         
        element: <Home />,
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
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />
      },
      {
        path: "/login",
        element: <AuthRoute><Login /></AuthRoute>,
      },
      {
        path: "/register",
        element: <AuthRoute><Register /></AuthRoute>,
      },
    ],
  },
]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

