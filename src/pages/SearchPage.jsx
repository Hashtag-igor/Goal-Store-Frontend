import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { MapWrapper } from "../styles/SharedFiles"
import Links from "../components/Links";
import { styled } from "styled-components";


const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px 0;
  width: 100%;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 40px 0;
  margin: 40px auto 160px auto;

  @media screen and (max-width: 768px) {
    margin: 0 auto 130px auto;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`
const SearchTitle = styled.h2`
  width: 95%;
  font-size: 34px;
  font-weight: 400;

  @media screen and (max-width: 490px) {
    width: 100%;
    padding-left: 30px;
    font-size: 28px;
  }
`
const SearchTitleResults = styled.span`
  color: #0c441c;
  font-size: 36px;
  padding-left: 3px;

  @media screen and (max-width: 490px) {
    font-size: 28px;
  }
`


export default function SearchPage() {
  const [searchProducts, setSearchProducts] = useState([]);
  const searchTerm = new URLSearchParams(window.location.search).get("q");

  const navigate = useNavigate()

  const fetchProducts = (searchTerm) => {
    fetch(`http://localhost:3001/products/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  };

  const goToTheProfilePage = (product) => {
    navigate("/profile", { state: { product } });
  };

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm, searchProducts]);

  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />

      <SearchContainer>
        <SearchTitle>Resultados para: <SearchTitleResults>{searchTerm}</SearchTitleResults></SearchTitle>
        <MapContainer>
          {searchProducts.map((products, i) => (
            <MapWrapper key={i}>
              <Card onClick={() => goToTheProfilePage(products)} name={products.name} description={products.description} price={products.price} img={products.img}/>
            </MapWrapper>
          ))}
        </MapContainer>
      </SearchContainer>
    </>   
  );
}




