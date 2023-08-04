// src/pages/CartPage.jsx
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { userLoggedIn, userCart, clearUserCart, removeItemFromCart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  const cartItems = userCart || [];

  const handleCheckout = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, enviar os itens do carrinho para um servidor e processar o pagamento
    // Após a conclusão da compra, você pode limpar o carrinho usando a função clearUserCart
    // Exemplo:
    // sendCartToServer(userCart)
    //   .then((response) => {
    //     if (response.success) {
    //       clearUserCart();
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

  const handleRemoveItem = (index) => {
    removeItemFromCart(index);
  };

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Carrinho</h1>
          {cartItems.length > 0 ? (
            <div>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img style={{ width: '250px', height: '250px' }} src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Preço: R${item.price}</p>
                    <p>Tamanho: {item.size}</p>
                    <p>Quantidade: {item.quantity}</p> {/* Mostra a quantidade selecionada */}
                    <button onClick={() => handleRemoveItem(index)}>Remover</button>
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


