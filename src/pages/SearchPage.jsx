import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

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
    <div>
      <h1>Resultados para: {searchTerm}</h1>
      {searchProducts.map((products, i) => (
        <div key={i} onClick={() => goToTheProfilePage(products)}>
          <Card
            name={products.name}
            description={products.description}
            price={products.price}
            img={products.img}
          />
        </div>
      ))}
    </div>
  );
}




