import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { userLoggedIn, userCart, clearCart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  const handleCheckout = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, enviar os itens do carrinho para um servidor e processar o pagamento
    // Após a conclusão da compra, você pode limpar o carrinho usando a função clearCart
    // Exemplo:
    // sendCartToServer(userCart)
    //   .then((response) => {
    //     if (response.success) {
    //       clearCart();
    //       navigate('/order-confirmation');
    //     } else {
    //       alert('Ocorreu um erro ao processar a compra. Tente novamente mais tarde.');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Erro ao enviar carrinho para o servidor:', error);
    //     alert('Ocorreu um erro ao processar a compra. Tente novamente mais tarde.');
    //   });
  };

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Carrinho</h1>
          {userCart.length > 0 ? (
            <div>
              <ul>
                {userCart.map((product, index) => (
                  <li key={index}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Preço: R${product.price}</p>
                  </li>
                ))}
              </ul>
              <button onClick={handleCheckout}>Finalizar Compra</button>
            </div>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

