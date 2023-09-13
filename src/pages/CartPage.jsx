import { useState } from "react"
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ButtonToBuy, CartContainer, CartContainerItems, CartContainerMap, CartData, CartMapDeleteButton, CartMapDescription,
        CartMapIMG,CartMapName, CartTitle, CartWrapperButton, CartWrapperButtons, CartWrapperBuy, CartWrapperItems, CartWrapperLink, 
        CartWrapperPrice, OffMessage, DeleteIcon, CartMapDescriptionContainerMobile, CartMapImgContainer, DeleteIconMobile } from "../styles/CartStyles"
import Links from '../components/Links';


export default function CartPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     navigate('/');
  //   }
  // }, [userLoggedIn, navigate]);

  useEffect(() => {
    // Efeito relacionado a userLoggedIn
    if (!userLoggedIn) {
      navigate('/');
    }
  
    // Efeito relacionado à largura da janela
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      // Remover o ouvinte de redimensionamento ao desmontar o componente
      window.removeEventListener('resize', handleResize);
    };
  }, [userLoggedIn, navigate]);
  


  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />

      {userLoggedIn ? (
        <CartContainer>
          <CartTitle>CARRINHO DE COMPRAS</CartTitle>
          {cartItems.length > 0 ? (
            <CartContainerItems>
              <CartWrapperItems>
              {windowWidth <= 500 ? (
                <>
                  {cartItems.map((item, index) => (
                    <CartContainerMap key={index}>
                      <CartMapName>{item.name}</CartMapName>
                      <CartMapImgContainer>
                        <CartMapIMG src={item.img} alt={item.name} />
                        <CartMapIMG src={item.img_back} alt={item.img_back}/>
                      </CartMapImgContainer>
                      <CartMapDescriptionContainerMobile>
                        <CartMapDescription>Preço: <CartData>R${item.price}</CartData></CartMapDescription>
                        <CartMapDescription>Tamanho: <CartData>{item.size}</CartData></CartMapDescription>
                        <CartMapDescription>Quantidade: <CartData>{item.quantity}</CartData></CartMapDescription>
                        <CartMapDeleteButton onClick={() => handleRemoveItem(index)}><DeleteIconMobile /></CartMapDeleteButton>
                      </CartMapDescriptionContainerMobile>
                      
                    </CartContainerMap>
                  ))}
                </>
                ) : (
                <>
                  {cartItems.map((item, index) => (
                    <CartContainerMap key={index}>
                      <CartMapIMG src={item.img} alt={item.name} />
                      <CartMapName>{item.name}</CartMapName>
                      <CartMapDescription>Preço: <CartData>R${item.price}</CartData></CartMapDescription>
                      <CartMapDescription>Tamanho: <CartData>{item.size}</CartData></CartMapDescription>
                      <CartMapDescription>Quantidade: <CartData>{item.quantity}</CartData></CartMapDescription>
                      <CartMapDeleteButton onClick={() => handleRemoveItem(index)}><DeleteIcon /></CartMapDeleteButton>
                    </CartContainerMap>
                  ))}
                </>
                )
              }
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



