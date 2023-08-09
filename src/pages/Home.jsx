import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from '../components/Card';

export const MapWrapper = styled.div``
export const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
  width: 100%;
  gap: 30px 0;
`
const CollectionButton = styled.button`
  background-color: #f82e56;
  color: #fff;
  font-weight: bolder;
  border: none;
  font-size: 18px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    cursor: pointer;
  }
`
const CollectionContainer = styled.div`
  width: 90%;
  margin: 80px auto;
`
const CollectionDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
const CollectionDescriptionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-size: 40px;
`
const CollectionDescriptionParagraph = styled.p`
`
const HomeFirstIMG = styled.div`
  background-image: url('https://cdn.ecvol.com/s/www.ivocamisas.com.br/uploads/SITE-JUNHO-9.jpeg');
  height: 600px;
  background-position: center;
  background-size: cover;
  width: 100%;
`
const HomeSecondIMG = styled.div`
  background-image: url(https://th.bing.com/th/id/R.433bab1fae3960564a64eeceb657fc53?rik=uKgPF%2fIOGkAdwg&riu=http%3a%2f%2fkidutsport.com.br%2fimages%2fbanners%2fpromocional-04.jpg&ehk=DMlGN622qwGywMg5PWZY8KvHsFnnyjZdH1K28qqpsP0%3d&risl=&pid=ImgRaw&r=0);
  padding: 300px;
  background-position: center;
  background-size: cover;
`

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
          <CollectionButton><Link to="/newcollection">CONFIRA NOSSA COLEÇÃO 2023/24</Link></CollectionButton>
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
            <CollectionButton><Link to="/retroshirts">CONFIRA NOSSA LINHA RETRÔ</Link></CollectionButton>
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
            <CollectionButton><Link to="/oldcollection">CONFIRA A LINHA DA TEMPORADA PASSADA</Link></CollectionButton>
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






