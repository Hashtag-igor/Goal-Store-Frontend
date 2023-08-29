import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from '../components/Card';
import { CollectionButton, CollectionContainer, CollectionDescriptionContainer, CollectionDescriptionParagraph, CollectionDescriptionTitle,
         HomeFirstIMG, HomeSecondIMG, MapContainer, MapWrapper } from "../styles/HomeStyles"


export default function Home() {
  const [product, setProduct] = useState([])
  const { userLoggedIn } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const searchProducts = () => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToTheProfilePage = (product) => {
    navigate("/profile", { state: { product } });
  };

  const goToTheNewCollectionPage = () => {
    navigate("/newcollection")
  }

  const goToTheOldCollectionPage = () => {
    navigate("/oldcollection")
  }

  const goToTheRetroPage = () => {
    navigate("/retroshirts")
  }

  const newCollectionShirts = product.length > 0 ? product.filter((shirts) =>
    shirts.description.toLowerCase().includes('24') &&
    !shirts.description?.toLowerCase().includes('retrô')
    ) : []

  const retroShirts = product.length > 0 ? product.filter((shirts) => 
    shirts.description.toLowerCase().includes('retrô') &&
    !shirts.description.toLowerCase().includes('rdm') &&
    !shirts.description?.toLowerCase().includes('seleção') 
    ) : []      
        
  const lastSeasonShirts = product.length > 0 ? product.filter((shirts) => 
    shirts.name.toLowerCase().includes('2021/22') &&
    !shirts.description?.toLowerCase().includes('retrô')
    ) : [] 


  const selectedNewCollectionShirts = newCollectionShirts.slice(0, 8);
  const selectedRetroShirts = retroShirts.slice(0, 8)

  useEffect(() => {
    searchProducts(); // Chamada da função aqui

    // Verificar se o usuário está logado
    const isUserLoggedIn = userLoggedIn !== null;

    if (!isUserLoggedIn && location.pathname !== '/') {
      // Se o usuário não está logado e a rota atual não é '/', redirecioná-lo para a página de login
      navigate('/login');
    }
  }, [userLoggedIn, location, navigate]);
  

  return (
    <>
      <HomeFirstIMG></HomeFirstIMG>

      {/* Nova Coleção */}
      <CollectionContainer> 
        <CollectionDescriptionContainer>
          <CollectionDescriptionTitle>COLEÇÃO DA NOVA TEMPORADA</CollectionDescriptionTitle>
          <CollectionDescriptionParagraph>- Compre em até 12x no Cartão ou à vista no PIX ou Boleto -</CollectionDescriptionParagraph>
          <CollectionButton onClick={goToTheNewCollectionPage}>CONFIRA NOSSA COLEÇÃO 2023/24</CollectionButton>
        </CollectionDescriptionContainer>
        <MapContainer>
          {selectedNewCollectionShirts.map((product, i) => (
            <MapWrapper key={i}>
                <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
              </MapWrapper>
            ))}
        </MapContainer>
      </CollectionContainer>


      {/* Camisas Retrô */}
      <CollectionContainer>
          <CollectionDescriptionContainer>
            <CollectionDescriptionTitle>CAMISAS RETRÔ</CollectionDescriptionTitle>
            <CollectionDescriptionParagraph>- Compre em até 12x no Cartão ou à vista no Boleto -</CollectionDescriptionParagraph>
            <CollectionButton onClick={goToTheRetroPage}>CONFIRA NOSSA LINHA RETRÔ</CollectionButton>
          </CollectionDescriptionContainer>
          <MapContainer>
          {selectedRetroShirts.map((product, i) => (
            <MapWrapper key={i}>
              <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
             </MapWrapper>
          ))}
        </MapContainer>
      </CollectionContainer>      

      {/* Camisas Da temporada passada */}
      <CollectionContainer>
          <CollectionDescriptionContainer>
            <CollectionDescriptionTitle>CAMISAS DA TEMPORADA PASSADA</CollectionDescriptionTitle>
            <CollectionDescriptionParagraph>- Compre em até 12x no Cartão ou à vista no Boleto -</CollectionDescriptionParagraph>
            <CollectionButton onClick={goToTheOldCollectionPage}>CONFIRA A LINHA DA TEMPORADA PASSADA</CollectionButton>
          </CollectionDescriptionContainer>
          <MapContainer>
          {lastSeasonShirts.map((product, i) => (
            <MapWrapper key={i}>
              <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
            </MapWrapper>
          ))}
        </MapContainer>
      </CollectionContainer>

      <HomeSecondIMG></HomeSecondIMG>
    </>
  );
}






