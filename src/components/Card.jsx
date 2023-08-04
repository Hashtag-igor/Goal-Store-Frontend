import React from 'react';
import styled from "styled-components"
import { BsCart3 } from 'react-icons/bs'

const CardButton = styled.button`
  background-color: #f82e56;
  color: #fff;
  font-weight: bolder;
  border: none;
  width: 120px;
  height: 45px;
  font-size: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    background: #fff;
    color: #f82e56;
    cursor: pointer;
    border: 1px solid #f82e56;
  }
`
const CardContainer = styled.div`
  width: 300px; 
  height: 480px;
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
  text-align: center;
  gap: 15px 0;
`
const CardIMG = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
`
const CardName = styled.h3`
`
const CardPriceDescription = styled.p`
  color: #f82e56;
  font-size: 18px;
  font-weight: bolder;
`
const CardPrice = styled.p`
  color: #f82e56;
  font-size: 22px;
  font-weight: bolder;
  display: inline-block;
`

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
        <CardButton onClick={goToProfilePage}><BsCart3 style={{fontSize: "20px"}}/>Comprar</CardButton>
      </CardWrapper>
    </CardContainer>
  );
}


