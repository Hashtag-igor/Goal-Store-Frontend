import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../components/Card"

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
    <div>
      <h1>Camisas de Times Brasileiros</h1>
      <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "30px 0px"}}>
        {camisasFiltradas.map((shirts, i) => (
          <div key={i} onClick={() => goToTheProfilePage(shirts)}>
            <Card name={shirts.name} description={shirts.description} price={shirts.price} img={shirts.img}/>
          </div>
        ))}
      </div>
    </div>
  );
}




