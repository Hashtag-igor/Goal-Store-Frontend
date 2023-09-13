import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../components/Card"
import { Container, Wrapper, MapContainer, MapWrapper, Title } from "../styles/SharedFiles"
import Links from '../components/Links';

export default function NewCollection() {
  const [RDMShirts, setRDMShirts] = useState([]);

  const navigate = useNavigate()

  // Função para buscar as camisas da API e atualizar o estado
  function buscarCamisas() {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        setRDMShirts(data);
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
    RDMShirts.length > 0
      ? RDMShirts.filter(
          (shirts) =>
            shirts.description.toLowerCase().includes('24') &&
            !shirts.description?.toLowerCase().includes('retrô')
        )
      : [];

  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />

      <Container>
        <Wrapper>
          <Title>COLEÇÃO DA NOVA TEMPORADA</Title>
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