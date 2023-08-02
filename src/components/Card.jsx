import React from 'react';
import styled from "styled-components"

const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  background: linear-gradient(to top, #ffffff, #0c441c4b, #0c441c);
  border-radius: 4px;

  &:hover{
    background: #ffffff;
    border-bottom: 3px solid #0c441c;
    cursor: pointer;
  }
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
`
const CardIMG = styled.img`
  width: 250px;
  height: 250px;
`
  
const CardName = styled.h3`
  text-align: justify;
`

const CardDescription = styled.p`
  text-align: justify;
`

const CardPrice = styled.p``

export default function Card({ name, description, price, img }) {
  return (
    <CardContainer>
      <CardWrapper>
        <CardIMG src={img} alt="" />
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
        <CardPrice>Preço: R$<strong>{price}</strong></CardPrice>
      </CardWrapper>
    </CardContainer>
  );
}


