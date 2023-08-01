import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);
  const [userCart, setUserCart] = useState([]); // Adicione o estado para o carrinho

  useEffect(() => {
    // Ao carregar o componente, verifica se existe um usuário logado no Local Storage
    const storedUser = localStorage.getItem('userLoggedIn');
    if (storedUser) {
      setUserLoggedIn(JSON.parse(storedUser));
    }
  }, []);

  // Função para atualizar o estado do usuário logado e também salvar no Local Storage
  const updateUserLoggedIn = (user) => {
    setUserLoggedIn(user);
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
  };

  // Função para limpar o estado do usuário logado e o Local Storage ao fazer logout
  const handleLogout = () => {
    setUserLoggedIn(null);
    localStorage.removeItem('userLoggedIn');
    clearUserCart(); // Limpa o carrinho do usuário ao fazer logout
  };

  // Função para adicionar um item ao carrinho de compras do usuário
  const addItemToCart = (item) => {
    if (!userLoggedIn) {
      return;
    }

    // Obtenha o carrinho de compras do usuário do Local Storage, ou um array vazio se não existir
    const storedCart = localStorage.getItem(`userCart_${userLoggedIn._id}`);
    const cart = storedCart ? JSON.parse(storedCart) : [];
    
    // Adicione o novo item ao carrinho e salve-o no Local Storage
    const updatedCart = [...cart, item];
    localStorage.setItem(`userCart_${userLoggedIn._id}`, JSON.stringify(updatedCart));
  
    // Atualize o estado do carrinho no contexto
    setUserCart(updatedCart);
  };
  
  // Função para remover um item do carrinho de compras do usuário logado
  const removeItemFromCart = (index) => {
    if (!userLoggedIn) {
      return;
    }

    const storedCart = localStorage.getItem(`userCart_${userLoggedIn._id}`);
    if (!storedCart) {
      return;
    }

    const cart = JSON.parse(storedCart);
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1); // Remove o item do carrinho
      localStorage.setItem(`userCart_${userLoggedIn._id}`, JSON.stringify(cart)); // Salva o carrinho atualizado no Local Storage

      // Atualize o estado do carrinho no contexto
      setUserCart(cart);
    }
  };

  // Função para obter o carrinho de compras do usuário logado
  const getUserCart = () => {
    if (!userLoggedIn) {
      return [];
    }

    const storedCart = localStorage.getItem(`userCart_${userLoggedIn._id}`);
    return storedCart ? JSON.parse(storedCart) : [];
  };

  // Função para limpar o carrinho de compras do usuário logado
  const clearUserCart = () => {
    if (!userLoggedIn) {
      return;
    }

    localStorage.removeItem(`userCart_${userLoggedIn._id}`);
    setUserCart([]); // Limpa o carrinho no estado local
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
        userCart: getUserCart(), // Obtem o carrinho do usuário logado
        addItemToCart,
        removeItemFromCart, // Adiciona a função removeItemFromCart ao contexto
        clearUserCart, // Atualiza a função para limpar o carrinho do usuário logado
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}











