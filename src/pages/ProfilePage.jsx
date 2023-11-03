// src/pages/ProfilePage.jsx
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { OffMessage } from "../styles/CartStyles"
import { ProfileProductContainer, ProfileIMGContainer, ProfileInfoContainer, ProfileMainIMG, ProfileIMGWrapper, ProfileSmallIMG,
         ProfileSizeSelect, ProfileSizeQuantyContainer, ProfileSizeOption, ProfileSizeQuantyWrapper, ProfileLabel,
         ProfileQuantyButton, ProfileQuanty, ProfileProductWrapper, ProfileSizeContainer, ProfileInfoDescription, ProfileInfoName, 
         ProfileInfoWrapper, ProfilePaymentButton, ProfilePaymentButtonIcon, ProfilePaymentContainer, ProfilePaymentIMG, 
         ProfilePaymentMessage, ProfilePaymentOptionsContainer, AboutProductContainer, AboutProductInfo, 
         AboutProductInfoContainer, AboutProductTH, AboutProductTR, AboutProductTable, AboutProductTitleContainer, AboutProductWarningContainer, 
         AboutProductWarningDescription, AboutProductWarningSize, AboutProductWarningTitle, AboutProductWrapper, AboutProductTD, 
         AboutProductTitle, StrongWord, AboutProductTDSize, ProfileInfoDescriptionMobile, ProfileInfoNameMobile, ProfileInfoWrapperMobile } from "../styles/ProfileStyles.jsx"
import Links from '../components/Links';
import { CartWrapperPrice } from '../styles/CartStyles';


export default function ProfilePage() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const location = useLocation();
  const product = location.state?.product;

  // Estado local para armazenar o produto selecionado e o tamanho escolhido
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  // Obtém o contexto do usuário para acessar o estado do carrinho e a função para atualizá-lo
  const { userCart, addItemToCart, userLoggedIn } = useContext(UserContext);

  useEffect(() => {
    // Quando o componente é montado com novos dados, atualiza o estado local
    if (product) {
      setSelectedProduct(product);
    }
  }, [product, userCart, userLoggedIn]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handleIncrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    if (userLoggedIn && selectedProduct && selectedSize && selectedQuantity > 0) {
      const itemWithSizeAndQuantity = { ...selectedProduct, size: selectedSize, quantity: selectedQuantity };
  
      // Adiciona o campo "model" ao item antes de adicionar ao carrinho
      const itemWithModel = { ...itemWithSizeAndQuantity, model: selectedProduct.name };
  
      addItemToCart(itemWithModel);
      alert('Produto adicionado ao carrinho!');
    } else {
      alert('Por favor, escolha um tamanho e uma quantidade válida antes de adicionar ao carrinho.');
    }
  };

  
  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />

      {/* Container de imagens do produto, informações do produto e area para enviar-lo para o carrinho */}
      <ProfileProductContainer>
        {selectedProduct && (
          <ProfileProductWrapper>

            <ProfileInfoWrapperMobile>
                <ProfileInfoNameMobile>{selectedProduct.name}</ProfileInfoNameMobile>
                <ProfileInfoDescriptionMobile>{selectedProduct.description}</ProfileInfoDescriptionMobile>
            </ProfileInfoWrapperMobile>

            <ProfileIMGContainer>
              <ProfileIMGWrapper>
                <ProfileMainIMG src={selectedProduct.img} alt={selectedProduct.name} />
              </ProfileIMGWrapper>
              <ProfileIMGWrapper>
                <ProfileSmallIMG src={selectedProduct.img} alt={selectedProduct.name} />
                <ProfileSmallIMG src={selectedProduct.img_back} alt={selectedProduct.name} />
              </ProfileIMGWrapper>
            </ProfileIMGContainer>

            <ProfileInfoContainer>
              {/* infos */}
              <ProfileInfoWrapper>
                <ProfileInfoName>{selectedProduct.name}</ProfileInfoName>
                <ProfileInfoDescription>{selectedProduct.description}</ProfileInfoDescription>
              </ProfileInfoWrapper>
              {/* Quantidade e tamanho */}
              <ProfileSizeQuantyContainer>
                <ProfileSizeQuantyWrapper>
                  <ProfileSizeContainer>
                    <ProfileLabel htmlFor="size">Escolha um tamanho:</ProfileLabel>
                    <ProfileSizeSelect id="size" value={selectedSize} onChange={handleSizeChange}>
                      <ProfileSizeOption value="">Selecione</ProfileSizeOption>
                      <ProfileSizeOption value="P">P</ProfileSizeOption>
                      <ProfileSizeOption value="M">M</ProfileSizeOption>
                      <ProfileSizeOption value="G">G</ProfileSizeOption>
                      <ProfileSizeOption value="GG">GG</ProfileSizeOption>
                    </ProfileSizeSelect>
                  </ProfileSizeContainer>
                </ProfileSizeQuantyWrapper>
                <ProfileSizeQuantyWrapper>
                    <ProfileLabel htmlFor="quantity">Quantidade:</ProfileLabel>
                    <ProfileQuantyButton onClick={handleDecrementQuantity}>-</ProfileQuantyButton>
                    <ProfileQuanty type="text" id="quantity" value={selectedQuantity} onChange={handleQuantityChange} min={1} />
                    <ProfileQuantyButton onClick={handleIncrementQuantity}>+</ProfileQuantyButton>
                </ProfileSizeQuantyWrapper>
              </ProfileSizeQuantyContainer>
              
              {/* Pagemento */}
              <ProfilePaymentContainer>
                <CartWrapperPrice>Preço: R${selectedProduct.price}</CartWrapperPrice>
                {userLoggedIn ? (
                  <ProfilePaymentButton onClick={handleAddToCart}><ProfilePaymentButtonIcon/> Adicionar ao carrinho</ProfilePaymentButton>
                ) : (
                  <OffMessage>Faça login para adicionar este item ao carrinho.</OffMessage>
                )}
                <ProfilePaymentOptionsContainer>
                  <ProfilePaymentIMG src="https://fanaticotorcedor.net/cdn/shop/files/1.png?v=1613676898" alt="" />
                  <ProfilePaymentMessage>*Processo de pagamento totalmente seguro, por boleto bancário ou Pix ou cartão de crédito, através do MercadoPago.</ProfilePaymentMessage>
                </ProfilePaymentOptionsContainer>
              </ProfilePaymentContainer>
            </ProfileInfoContainer>
          </ProfileProductWrapper>
        )}
      </ProfileProductContainer>

      {/* Explicando tamanhos e medidas das camisas */}
      <AboutProductContainer>
        <AboutProductWrapper>
          <AboutProductTitleContainer>
            <AboutProductTitle>TAMANHOS E MEDIDAS</AboutProductTitle>
          </AboutProductTitleContainer>
          <AboutProductWarningContainer>
            <AboutProductWarningTitle>AVISO:</AboutProductWarningTitle>
            <AboutProductWarningDescription>É importante estar atento ao selecionar o tamanho desejado, já que não realizamos substituições devido a equívocos na escolha do tamanho. Trocas são viáveis somente em casos de defeitos de fabricação ou erros cometidos por nossa equipe. Nosso objetivo é garantir que sua compra seja feita no tamanho correto. Você pode conferir a tabela de tamanhos e dimensões abaixo para mais detalhes.</AboutProductWarningDescription>
          </AboutProductWarningContainer>
          <AboutProductTable>
            <AboutProductTR>
              <AboutProductTH></AboutProductTH>
              <AboutProductTH>Comprimento</AboutProductTH>
              <AboutProductTH>Largura</AboutProductTH>
              <AboutProductTH>Altura</AboutProductTH>
            </AboutProductTR>
            <AboutProductTR>
              <AboutProductTDSize>P</AboutProductTDSize>
              <AboutProductTD>61cm</AboutProductTD>
              <AboutProductTD>92cm</AboutProductTD>
              <AboutProductTD>155 - 175cm</AboutProductTD>
            </AboutProductTR>
            <AboutProductTR>
              <AboutProductTDSize>M</AboutProductTDSize>
              <AboutProductTD>71cm</AboutProductTD>
              <AboutProductTD>96cm</AboutProductTD>
              <AboutProductTD>165 - 180cm</AboutProductTD>
            </AboutProductTR>
            <AboutProductTR>
              <AboutProductTDSize>G</AboutProductTDSize>
              <AboutProductTD>73cm</AboutProductTD>
              <AboutProductTD>100cm</AboutProductTD>
              <AboutProductTD>170 - 185cm</AboutProductTD>
            </AboutProductTR>
            <AboutProductTR>
              <AboutProductTDSize>GG</AboutProductTDSize>
              <AboutProductTD>76cm</AboutProductTD>
              <AboutProductTD>106cm</AboutProductTD>
              <AboutProductTD>175 - 190cm</AboutProductTD>
            </AboutProductTR>
          </AboutProductTable>
            <AboutProductWarningSize>*Podem haver variações de 1 a 5cm devido a modelagem da camisa</AboutProductWarningSize>
          <AboutProductInfoContainer>
            <AboutProductInfo><StrongWord>COMPOSIÇÃO:</StrongWord> Poliéster</AboutProductInfo>
            <AboutProductInfo><StrongWord>ORIGEM:</StrongWord> Importada</AboutProductInfo>
            <AboutProductInfo><StrongWord>GARANTIA:</StrongWord> Contra defeito de fabricação</AboutProductInfo>
            <AboutProductInfo><StrongWord>PRAZO DE ENTREGA:</StrongWord> O prazo de entrega estimado é de aproximadamente 25 a 60 dias ÚTEIS após o envio do Código de Rastreio. Observe que este é o prazo máximo, em média, os pedidos chegam antes dos 29 dias, variando de acordo com os serviços postais da sua cidade. </AboutProductInfo>
            <AboutProductInfo><StrongWord>ENVIO:</StrongWord> Para termos um ótimo preço, os produtos são enviados diretamente do nosso distribuidor no exterior diretamente para a casa do cliente.</AboutProductInfo>
          </AboutProductInfoContainer>
        </AboutProductWrapper>
      </AboutProductContainer>
    </>
  );
}








