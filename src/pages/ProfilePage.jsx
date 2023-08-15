// src/pages/ProfilePage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { BsCart3 } from "react-icons/bs"



export default function ProfilePage() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const location = useLocation();
  const product = location.state?.product;

  // Estado local para armazenar o produto selecionado e o tamanho escolhido
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  // Obtém o contexto do usuário para acessar o estado do carrinho e a função para atualizá-lo
  const { userCart, addItemToCart, userLoggedIn } = useContext(UserContext);

  useEffect(() => {
    // Quando o componente é montado com novos dados, atualiza o estado local
    // console.log('userCart:', userCart);
    // console.log('userLoggedIn:', userLoggedIn);
    if (product) {
      setSelectedProduct(product);
    }
  }, [product, userCart, userLoggedIn]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handleIncrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    if (userLoggedIn && selectedProduct && selectedSize && selectedQuantity > 0) {
      const itemWithSizeAndQuantity = { ...selectedProduct, size: selectedSize, quantity: selectedQuantity };
  
      // Adiciona o campo "model" ao item antes de adicionar ao carrinho
      const itemWithModel = { ...itemWithSizeAndQuantity, model: selectedProduct.name };
  
      addItemToCart(itemWithModel);
      alert('Produto adicionado ao carrinho!');
    } else {
      alert('Por favor, escolha um tamanho e uma quantidade válida antes de adicionar ao carrinho.');
    }
  };

  return (
    <div>
      <div style={{width: "90%", margin: '90px auto'}}>
        {selectedProduct && (
          <div style={{display: "flex"}}>
            <div style={{width: "40%", display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: "column", borderRight: "1px solid #d1d1d1"}}>
              <div>
                <img style={{width: "400px", height: "400px"}} src={selectedProduct.img} alt={selectedProduct.name} />
              </div>
              <div>
                <img style={{width: '180px', height: '180px'}} src={selectedProduct.img} alt={selectedProduct.name} />
                <img style={{width: '180px', height: '180px'}} src={selectedProduct.img_back} alt={selectedProduct.name} />
              </div>
            </div>

            <div style={{ width: "60%", display: "flex", alignItems: 'center', justifyContent: 'center' , flexDirection: "column", gap: "40px"}}>
              {/* infos */}
              <div style={{textAlign: "center"}}>
                <h2 style={{fontSize: "28px", marginTop: "40px"}}>{selectedProduct.name}</h2>
                <p style={{fontSize: "18px", marginTop: "8px"}}>{selectedProduct.description}</p>
              </div>
              {/* Quantidade e tamanho */}
              <div style={{width: "90%",  display: "flex", justifyContent: 'space-evenly', alignItems: "center"}}>
                <div>
                  <label htmlFor="size">Escolha um tamanho:</label>
                  <select id="size" value={selectedSize} onChange={handleSizeChange}>
                    <option value="">Selecione</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                </div>
                <div>
                    <label htmlFor="quantity">Quantidade:</label>
                    <button style={{fontSize: "22px", padding: "1px 8px"}} onClick={handleDecrementQuantity}>-</button>
                    <input style={{width: "48px", border: 'none', backgroundColor: "transparent", textAlign: "center", fontSize: "24px"}} type="text" id="quantity" value={selectedQuantity} onChange={handleQuantityChange} min={1} />
                    <button style={{fontSize: "22px", padding: "1px 8px"}} onClick={handleIncrementQuantity}>+</button>
                </div>
              </div>
              {/* Pagemento   */}
              <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "10px 0", margin: "50px 0"}}>
                <p style={{fontSize: "34px", color: "#f82e56", fontWeight: "bolder"}}>Preço: R${selectedProduct.price}</p>
                {userLoggedIn ? (
                  <button style={{backgroundColor: "#f82e56", color: "white", padding: "15px 0", fontSize: "20px", width: "330px", fontWeight: "bolder", border: "1px solid #f82e56", marginTop: "15px"}} onClick={handleAddToCart}><BsCart3 style={{fontSize: "22px"}}/> Adicionar ao carrinho</button>
                ) : (
                  <p>Faça login para adicionar este item ao carrinho.</p>
                )}
                <div style={{margin: "15px auto", display: "flex", alignItems: "center", flexDirection: "column"}}>
                  {/* <img src="https://assets.pagseguro.com.br/ps-integration-assets/banners/parcelamento/468x60_pagseguro_12x.gif" alt="" /> */}
                  <img style={{margin: "20px 0"}} src="https://fanaticotorcedor.net/cdn/shop/files/1.png?v=1613676898" alt="" />
                  <p style={{width: "90%", textAlign: "center"}}>*Processo de pagamento totalmente seguro, por boleto bancário ou Pix ou cartão de crédito, através do MercadoPago.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{width: "90%", margin: '30vh auto 20vh', border: "2px solid #dadada"}}>
        <div style={{width: "90%", margin: "auto"}}>
          <h2>Descrição do Produto</h2>
          <h3>TAMANHOS E MEDIDAS</h3>
          <div style={{background: "red"}}>
            <h4>AVISO:</h4>
            <p>É importante estar atento ao selecionar o tamanho desejado, já que não realizamos substituições devido a equívocos na escolha do tamanho. Trocas são viáveis somente em casos de defeitos de fabricação ou erros cometidos por nossa equipe. Nosso objetivo é garantir que sua compra seja feita no tamanho correto. Você pode conferir a tabela de tamanhos e dimensões abaixo para mais detalhes.</p>
          </div>
          <div>
            <table style={{height: "300px", borderCollapse: "collapse", width: "90%", border: "1px solid black", textAlign: "center", margin: "auto"}}>
  <tr>
    <th></th>
    <th>Comprimento</th>
    <th>Largura</th>
    <th>Altura</th>
  </tr>
  <tr>
    <td>P</td>
    <td>61cm</td>
    <td>92cm</td>
    <td>155 - 175cm</td>
  </tr>
  <tr>
    <td>M</td>
    <td>71cm</td>
    <td>96cm</td>
    <td>165 - 180cm</td>
  </tr>
  <tr>
    <td>G</td>
    <td>73cm</td>
    <td>100cm</td>
    <td>170 - 185cm</td>
  </tr>
  <tr>
    <td>GG</td>
    <td>76cm</td>
    <td>106cm</td>
    <td>175 - 190cm</td>
  </tr>
</table>
            <p style={{background: "red", padding: "15px 0", textAlign: "center"}}>Podem haver variações de 1 a 5cm devido a modelagem da camisa</p>
          </div>
          <ul style={{listStyle: "none"}}>
            <li>COMPOSIÇÃO: Poliéster</li>
            <li>ORIGEM: Importada</li>
            <li>GARANTIA: Contra defeito de fabricação</li>
            <li>PRAZO DE ENTREGA: O prazo de entrega estimado é de aproximadamente 25 a 60 dias ÚTEIS após o envio do Código de Rastreio. Observe que este é o prazo máximo, em média, os pedidos chegam antes dos 29 dias, variando de acordo com os serviços postais da sua cidade. </li>
            <li>ENVIO: Para termos um ótimo preço, os produtos são enviados diretamente do nosso distribuidor no exterior diretamente para a casa do cliente.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}








