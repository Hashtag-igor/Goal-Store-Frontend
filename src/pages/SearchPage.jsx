import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function SearchPage() {
  const [searchProducts, setSearchProducts] = useState([]);
  const searchTerm = new URLSearchParams(window.location.search).get("q");

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

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm, searchProducts]);

  return (
    <div>
      <h1>Resultados para: {searchTerm}</h1>
      {searchProducts.map((product, i) => (
        <div key={i}>
          <Card
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        </div>
      ))}
    </div>
  );
}




