// src/pages/ProfilePage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

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
      addItemToCart(itemWithSizeAndQuantity);
      alert('Produto adicionado ao carrinho!');
    } else {
      alert('Por favor, escolha um tamanho e uma quantidade válida antes de adicionar ao carrinho.');
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
          <label htmlFor="size">Escolha um tamanho:</label>
          <select id="size" value={selectedSize} onChange={handleSizeChange}>
            <option value="">Selecione</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            {/* Adicione mais opções de tamanho conforme necessário */}
          </select>
          <label htmlFor="quantity">Quantidade:</label>
          <div>
            <button onClick={handleDecrementQuantity}>-</button>
            <input
              type="number"
              id="quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              min={1}
            />
            <button onClick={handleIncrementQuantity}>+</button>
          </div>
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








