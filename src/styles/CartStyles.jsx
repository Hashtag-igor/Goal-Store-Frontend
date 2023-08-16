import { styled } from "styled-components";
import { FiDelete } from 'react-icons/fi'
import { Link } from "react-router-dom";

export const CartContainer = styled.div``

export const CartTitle = styled.h2`
  text-align: center;
  margin: 70px 0 20px 0;
  font-family: 'Inter', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
`
export const CartContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`
export const CartWrapperItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px 0;
  margin: 50px 0;
`
export const CartWrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`
export const CartWrapperBuy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 20px 0;
`
export const CartContainerMap = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 30px;
  border-bottom: 1px solid #e0e0e0;
`
export const CartMapIMG = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
`
export const CartMapName = styled.h3`
  font-size: 20px;
`
export const CartMapDescription = styled.p`
  font-size: 16px;
` 
export const CartData = styled.strong`
  font-size: 20px;
  color: #f82e56;
`

export const CartMapDeleteButton = styled.button`
  border: none;
  background-color: white;
`
export const DeleteIcon = styled(FiDelete)`
  font-size: 36px;

  &:hover {
    cursor: pointer;
    color: #ff0000;
  }
`
export const CartWrapperButton = styled.button`
  background-color: #333745;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bolder;
  border: 1px solid #333745;

  &:hover {
    background-color: #fff;
    color: #333745;
    cursor: pointer;
  }
`
export const CartWrapperLink = styled(Link)`
  background-color: #333745;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bolder;
  border: 1px solid #333745;

  &:hover {
    background-color: #fff;
    color: #333745;
  }
`
export const CartWrapperPrice = styled.p`
  font-size: 34px;
`
export const ButtonToBuy = styled.button`
  background-color: #f82e56;
  color: white;
  padding: 15px 0;
  font-size: 20px;
  width: 220px;
  font-weight: bolder;
  border: 1px solid #f82e56;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const OffMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
`