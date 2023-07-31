import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function ProfilePage() {
  const location = useLocation();
  const product = location.state?.product;

  // Estado local para armazenar o produto selecionado
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleAddToCart = () => {
    if (userLoggedIn && selectedProduct) {
      addItemToCart(selectedProduct);
      alert('Produto adicionado ao carrinho!');
    }
  };

  return (
    <div>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>Preço: R${selectedProduct.price}</p>
          <img src={selectedProduct.img} alt={selectedProduct.name} />
          {userLoggedIn ? (
            <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
          ) : (
            <p>Faça login para adicionar este item ao carrinho.</p>
          )}
        </div>
      )}
    </div>
  );
}







