import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const { userLoggedIn, updateUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      // Se o usuário não está logado, redireciona para a rota "/"
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  const handleLogout = () => {
    updateUserLoggedIn(null); // Limpa as informações do usuário logado no contexto
    localStorage.removeItem('userLoggedIn'); // Remove o usuário logado do localStorage
    navigate('/'); // Redireciona para a rota "/"
  };

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Welcome, {userLoggedIn.name}!</h1>
          <p>Email: {userLoggedIn.email}</p>
          <p>Password: {userLoggedIn.password}</p>
          <button onClick={handleLogout}>Logout</button> {/* Botão para deslogar */}
        </div>
      ) : null}
    </div>
  );
}


