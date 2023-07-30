import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage(){
  const { userLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      // Se o usuário não está logado, redireciona para a rota "/"
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Carrinho</h1>
        </div>
      ) : null}
    </div>
  );
}