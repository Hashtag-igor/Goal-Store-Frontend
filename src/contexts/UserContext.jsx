import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [allUsersData, setAllUsersData] = useState([]);

  // Quando o componente for montado, verifica se existe um usuário logado no localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userLoggedIn');
    if (storedUser) {
      setUserLoggedIn(JSON.parse(storedUser));
    }
  }, []);

  // Função para atualizar o estado do usuário logado e também salvar no localStorage
  const updateUserLoggedIn = (user) => {
    setUserLoggedIn(user);
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
  };

  return (
    <UserContext.Provider
      value={{
        userLoggedIn,
        updateUserLoggedIn, // Use essa função para atualizar o estado do usuário logado
        usuarios,
        setUsuarios,
        allUsersData,
        setAllUsersData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}




