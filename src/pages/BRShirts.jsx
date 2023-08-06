import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../components/Card"
import { Container, Wrapper, MapContainer, MapWrapper, Title } from "../styles/SharedFiles"

export default function BRShirts() {
  const [BRShirts, setBRShirts] = useState([]);
  const navigate = useNavigate()

  // Função para buscar as camisas da API e atualizar o estado
  function buscarCamisas() {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        setBRShirts(data);
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
    BRShirts.length > 0
      ? BRShirts.filter(
          (shirts) =>
            !shirts.description?.toLowerCase().includes('rdm') &&
            !shirts.description?.toLowerCase().includes('seleção') &&
            !shirts.description?.toLowerCase().includes('retrô')
        )
      : [];

  return (
    <Container>
      <Wrapper>
        <Title>Camisas de Times Brasileiros</Title>
        <MapContainer>
          {camisasFiltradas.map((shirts, i) => (
            <MapWrapper key={i} onClick={() => goToTheProfilePage(shirts)}>
              <Card name={shirts.name} description={shirts.description} price={shirts.price} img={shirts.img} />
            </MapWrapper>
          ))}
        </MapContainer>
      </Wrapper>
    </Container>
  );
}





