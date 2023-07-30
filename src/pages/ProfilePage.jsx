import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProfilePage() {
  const location = useLocation();
  const product = location.state?.product;

  // Estado local para armazenar o produto selecionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Quando o componente é montado com novos dados, atualiza o estado local
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  console.log(selectedProduct);

  return (
    <div>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>Preço: R${selectedProduct.price}</p>
          <img src={selectedProduct.img} alt={selectedProduct.name} />
        </div>
      )}
    </div>
  );
}




