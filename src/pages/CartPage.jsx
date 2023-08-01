import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { userLoggedIn, userCart, clearCart, removeItemFromCart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('userCart:', userCart);
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate, userCart]);

  // Adicione a verificação ?? [] para evitar erros
  const cartItems = userCart ?? [];

  // console.log('cartItems:', cartItems);

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


  // Função para remover um item do carrinho
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
                {cartItems.map((product, index) => (
                  <li key={index}>
                     <img style={{ width: '250px', height: '250px' }} src={product.img} alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Preço: R${product.price}</p>
                    <button onClick={() => handleRemoveItem(index)}>Remover</button> {/* Botão para remover o item */}
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


