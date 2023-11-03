import React from 'react';
import { CardButton, CardContainer, CardIMG, CardName, CardPrice, CardPriceDescription, CardWrapper, CartIcon } from "../styles/Card.Styles"

export default function Card({name, price, img, onClick}) {

  const goToProfilePage = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <CardContainer>
      <CardWrapper>
        <CardIMG src={img} alt="" />
        <CardName>{name}</CardName>
        <CardPriceDescription>A partir de <CardPrice>R${price}</CardPrice></CardPriceDescription>
        <CardButton onClick={goToProfilePage}><CartIcon/>COMPRAR</CardButton>
      </CardWrapper>
    </CardContainer>
  );
}


