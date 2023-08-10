// src/pages/CartPage.jsx
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';

export default function CartPage() {
  const { userLoggedIn, userCart, clearUserCart, removeItemFromCart } = useContext(UserContext);
  const navigate = useNavigate();

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

  const handleRemoveAllShirtsCart = (index) => {
    clearUserCart(index)
  }

  // Função para calcular o preço total dos itens no carrinho
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  return (
    <>
      {userLoggedIn ? (
        <div style={{ width: "100%", background: "yellow" }}>
          <h1>Carrinho</h1>
          {cartItems.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", margin: 'auto', width: "90%" }}>
              <ul style={{display: "flex", justifyContent: "space-evenly", flexDirection: "column" , flexWrap: "wrap", width: '100%' , gap: "30px 0px", margin: "50px 0", border: "2px solid red"}}>
                {cartItems.map((item, index) => (
                  <li style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" , gap: "0 20px" }} key={index}>
                    <img style={{ width: '180px', height: '180px' }} src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Preço: R${item.price}</p>
                    <p>Tamanho: {item.size}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <button onClick={() => handleRemoveItem(index)}>Remover</button>
                  </li>
                ))}
              </ul>
              <div style={{background: "blue", display: "flex", justifyContent: "space-around", alignItems: 'center', padding: "30px 0"}}>
                <Link to="/">Continue Comprando</Link>
                <button onClick={handleRemoveAllShirtsCart}>Limpar carrinho de compras</button>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: "flex-end", margin: "30px 0 0 0"}}>
                <p>Total: R${calculateTotalPrice().toFixed(2)}</p>
                <button onClick={handleCheckout}>Finalizar Compra</button>
              </div>
            </div>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
      ) : null}
    </>
  );
}



