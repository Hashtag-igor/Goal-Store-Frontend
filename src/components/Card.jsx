import React from 'react';

export default function Card({name, description, price, img, onClick}) {

  const goToProfilePage = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div style={{width: "300px", background: "green", height: "400px"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "90%", margin: "auto"}}>
            <img style={{width: "250px", height: "250px"}} src={img} alt="" />
            <h3 style={{textAlign: "justify"}}>{name}</h3>
            <p style={{textAlign: "justify"}}>{description}</p>
            <p>Price: <strong>{price}</strong></p>
            <button onClick={goToProfilePage}>Comprar</button>
        </div>
    </div>
  );
}


