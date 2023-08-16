// src/pages/CartPage.jsx
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ButtonToBuy, CartContainer, CartContainerItems, CartContainerMap, CartData, CartMapDeleteButton, CartMapDescription,
        CartMapIMG,CartMapName, CartTitle, CartWrapperButton, CartWrapperButtons, CartWrapperBuy, CartWrapperItems, CartWrapperLink, 
        CartWrapperPrice, OffMessage, DeleteIcon } from "../styles/CartStyles"


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
        <CartContainer>
          <CartTitle>Carrinho de Compras</CartTitle>
          {cartItems.length > 0 ? (
            <CartContainerItems>
              <CartWrapperItems>
                {cartItems.map((item, index) => (
                  <CartContainerMap key={index}>
                    <CartMapIMG src={item.img} alt={item.name} />
                    <CartMapName>{item.name}</CartMapName>
                    <CartMapDescription>Preço: <CartData>R$ {item.price}</CartData></CartMapDescription>
                    <CartMapDescription>Tamanho: <CartData>{item.size}</CartData></CartMapDescription>
                    <CartMapDescription>Quantidade: <CartData>{item.quantity}</CartData></CartMapDescription>
                    <CartMapDeleteButton onClick={() => handleRemoveItem(index)}><DeleteIcon /></CartMapDeleteButton>
                  </CartContainerMap>
                ))}
              </CartWrapperItems>
              <CartWrapperButtons>
                <CartWrapperLink to="/">Continue Comprando</CartWrapperLink>
                <CartWrapperButton onClick={handleRemoveAllShirtsCart}>Limpar carrinho de compras</CartWrapperButton>
              </CartWrapperButtons>
              <CartWrapperBuy>
                <CartWrapperPrice>Total: R$ {calculateTotalPrice().toFixed(2)}</CartWrapperPrice>
                <ButtonToBuy onClick={handleCheckout}>Finalizar Compra</ButtonToBuy>
              </CartWrapperBuy>
            </CartContainerItems>
          ) : (
            <OffMessage>
              <CartTitle>Ops! Seu carrinho está vazio..</CartTitle>
              <CartWrapperLink to="/">Volte a Página Inicial</CartWrapperLink>
            </OffMessage>
          )}
        </CartContainer>
      ) : null}
    </>
  );
}



