import { useState, useEffect } from 'react';
import Card from "../components/Card"

export default function RetroShirts() {
  const [RetroShirts, setRetroShirts] = useState([]);

  // Função para buscar as camisas da API e atualizar o estado
  function buscarCamisas() {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        setRetroShirts(data);
      })
      .catch(error => {
        console.error('Erro ao obter os dados da API:', error);
      });
  }

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
            !shirts.description.toLowerCase().includes('rdm') &&
            !shirts.description?.toLowerCase().includes('seleção') 
        )
      : [];

  return (
    <div>
      <h1>BRShirts</h1>
      <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "30px 0px"}}>
        {camisasFiltradas.map((shirts, i) => (
          <div key={i}>
            <Card name={shirts.name} description={shirts.description} price={shirts.price} img={shirts.img}/>
          </div>
        ))}
      </div>
    </div>
  );
}
