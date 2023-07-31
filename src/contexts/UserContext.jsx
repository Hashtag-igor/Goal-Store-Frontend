import React, { useState, createContext, useEffect, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);

  // Carrinho do usuário logado (armazenado em localStorage para cada usuário)
  const [userCart, setUserCart] = useState([]);

  // Quando o componente for montado, verifica se existe um usuário logado no localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userLoggedIn');
    if (storedUser) {
      setUserLoggedIn(JSON.parse(storedUser));
      const storedCart = localStorage.getItem('userCart');
      if (storedCart) {
        setUserCart(JSON.parse(storedCart));
      }
    }
  }, []);

  // Função para atualizar o estado do usuário logado e também salvar no localStorage
  const updateUserLoggedIn = (user) => {
    setUserLoggedIn(user);
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
  };

  // Função para adicionar um item ao carrinho do usuário
  const addItemToCart = (item) => {
    setUserCart((prevCart) => [...prevCart, item]);
    localStorage.setItem('userCart', JSON.stringify([...userCart, item]));
  };

  // Função para limpar o carrinho do usuário
  const clearCart = () => {
    setUserCart([]);
    localStorage.removeItem('userCart');
  };

  return (
    <UserContext.Provider
      value={{
        userLoggedIn,
        updateUserLoggedIn,
        usuarios,
        setUsuarios,
        allUsersData,
        setAllUsersData,
        userCart,
        addItemToCart,
        clearCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}








