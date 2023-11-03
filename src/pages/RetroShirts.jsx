import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../components/Card"
import { Container, Wrapper, MapContainer, MapWrapper, Title } from "../styles/SharedFiles"
import Links from '../components/Links';

export default function RetroShirts() {
  const [RetroShirts, setRetroShirts] = useState([]);

  const navigate = useNavigate()

  // Função para buscar as camisas da API e atualizar o estado
  function buscarCamisas() {
    fetch('https://goal-store-backend.vercel.app/products')
      .then(response => response.json())
      .then(data => {
        setRetroShirts(data);
      })
      .catch(error => {
        console.error('Erro ao obter os dados da API:', error);
      });
  }

  const goToTheProfilePage = (product) => {
    navigate("/profile", { state: { product } });
  };

  // Utilize useEffect para chamar a função buscarCamisas ao carregar o componente
  useEffect(() => {
    buscarCamisas();
  }, []);

  // Verifique se os dados foram filtrados antes de exibi-los
  const camisasFiltradas =
    RetroShirts.length > 0
      ? RetroShirts.filter(
          (shirts) =>
            shirts.description.toLowerCase().includes('retrô') &&
            !shirts.description.toLowerCase().includes('rdm')    
        )
      : [];

  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />
      
      <Container>
        <Wrapper>
          <Title>CAMISAS RETRÔ</Title>
          <MapContainer>
            {camisasFiltradas.map((shirts, i) => (
              <MapWrapper key={i}>
                <Card onClick={() => goToTheProfilePage(shirts)} name={shirts.name} description={shirts.description} price={shirts.price} img={shirts.img} />
              </MapWrapper>
            ))}
          </MapContainer>
        </Wrapper>
      </Container>
    </>
  );
}
