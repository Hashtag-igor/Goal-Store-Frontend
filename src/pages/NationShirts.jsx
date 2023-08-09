import React, { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom"
import Card from "../components/Card"
import { Container, Wrapper, MapContainer, MapWrapper, Title } from "../styles/SharedFiles"

export default function NationShirts() {
  const [NationShirts, setNationShirts] = useState([]);

  const navigate = useNavigate()

  // Função para buscar as camisas da API e atualizar o estado
  function buscarCamisas() {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        setNationShirts(data);
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
    NationShirts.length > 0
      ? NationShirts.filter(
          (shirts) =>
            shirts.description.toLowerCase().includes('seleção') &&
            !shirts.description?.toLowerCase().includes('rdm') &&
            !shirts.description?.toLowerCase().includes('retrô')
        )
      : [];

  return (
    <Container>
      <Wrapper>
        <Title>Camisas de Seleções</Title>
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