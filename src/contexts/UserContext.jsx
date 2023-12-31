import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [userCart, setUserCart] = useState([]); // Adicione o estado para o carrinho

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

  // Adiciona o campo "model" ao item antes de adicionar ao carrinho
  const itemWithModel = { ...item, model: item.name };

  // Verifica se o item já existe no carrinho
  const existingCartItem = userCart.find((cartItem) => cartItem.shirtId === item.shirtId && cartItem.size === item.size);

  if (existingCartItem && existingCartItem.model === item.name) {
    // Se o produto com mesmo tamanho e modelo já está no carrinho, atualiza a quantidade
    const updatedCart = userCart.map((cartItem) =>
      cartItem.shirtId === item.shirtId && cartItem.size === item.size && cartItem.model === item.name
        ? {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          }
        : cartItem
    );

    // Salva o carrinho atualizado no Local Storage
    localStorage.setItem(`userCart_${userLoggedIn._id}`, JSON.stringify(updatedCart));

    // Atualiza o estado do carrinho no contexto
    setUserCart(updatedCart);
  } else {
    // Caso contrário, adiciona o novo item ao carrinho
    const updatedCart = [...userCart, itemWithModel];

    // Salva o carrinho atualizado no Local Storage
    localStorage.setItem(`userCart_${userLoggedIn._id}`, JSON.stringify(updatedCart));

    // Atualiza o estado do carrinho no contexto
    setUserCart(updatedCart);
  }
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

  useEffect(() => {
    // Ao carregar o componente, verifica se existe um usuário logado no Local Storage
    const storedUser = localStorage.getItem('userLoggedIn');
    if (storedUser) {
      setUserLoggedIn(JSON.parse(storedUser));
    }
  }, []);


  return (
    <UserContext.Provider
      value={{
        userLoggedIn,
        updateUserLoggedIn,
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











