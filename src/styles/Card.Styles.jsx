import styled from "styled-components";
import { BsCart3 } from 'react-icons/bs'

export const CardButton = styled.button`
  background-color: #f82e56;
  color: #fff;
  font-weight: bolder;
  border: none;
  width: 140px;
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

  @media screen and (max-width: 900px) {
    width: 110px;
  }

  @media screen and (max-width: 768px) {
    font-weight: 500;
  }

  @media screen and (max-width: 490px) {
    width: 80px;
    height: 40px;
    font-size: 15px;
  }
`
export const CardContainer = styled.div`
  width: 300px; 
  height: 470px;
  background-color: #fff;
  border-radius: 4px;
  border-bottom: 4px solid #fff;
  transition: box-shadow 0.3s ease;

  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 260px; 
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 250px; 
    height: 400px;
  }

  @media screen and (max-width: 560px) {
    width: 220px; 
    height: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
    height: 400px;

    transition: none;

    &:hover{
      box-shadow: none;
    }
  }

  @media screen and (max-width: 400px) {
    width: 150px;
    height: 380px;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
  text-align: center;
  gap: 10px 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
export const CardIMG = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 10px;

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 500px) {
    width: 180px; 
    height: 180px;
  }

  @media screen and (max-width: 400px) {
    width: 160px; 
    height: 160px;
  }
`
export const CardName = styled.h3`
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`
export const CardPriceDescription = styled.p`
  color: #f82e56;
  font-size: 18px;
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`
export const CardPrice = styled.p`
  color: #f82e56;
  font-size: 22px;
  font-weight: bolder;
  display: inline-block;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 17px;
  }
`
export const CartIcon = styled(BsCart3)`
  font-size: 20px;

  @media screen and (max-width: 490px) {
    display: none;
  }
`