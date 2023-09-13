import { styled } from "styled-components";
import { FaTrash } from 'react-icons/fa'
import { LuDelete } from "react-icons/lu"
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  margin: 10px 0 100px 0;
`
export const CartTitle = styled.h2`
  text-align: center;
  margin: 70px 0 20px 0;
  font-size: 32px;

  @media screen and (max-width: 500px) {
    margin: 50px 0 20px 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 28px;
    margin: 40px 0 10px 0;
  }
`
export const CartContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;

  @media screen and (max-width: 1024px) {
    width: 95%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const CartWrapperItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px 0;
  margin: 50px 0;
  
  @media screen and (max-width: 500px) {
    margin: 20px 0;
  }
`
export const CartWrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 20px 0;
    width: 80%;
  }
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

  @media screen and (max-width: 768px) {
    gap: 0 17px;
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 10px 0 40px 0;
  }
`
export const CartMapIMG = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 170px;
    height: 170px;
  }

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: 600px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 500px) {
    width: 160px;
    height: 150px;
  }
`
export const CartMapName = styled.h3`
  font-size: 20px;

  @media screen and (max-width: 1024px) {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 2px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 4px;
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 17px;
    margin-bottom: 20px;
  }
`
export const CartMapDescription = styled.p`
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
` 
export const CartData = styled.strong`
  font-size: 20px;
  color: #f82e56;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-left: 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 17px;
    margin-left: 2px;
  }
`
export const CartMapDeleteButton = styled.button`
  border: none;
  background-color: white;
`
export const DeleteIcon = styled(FaTrash)`
  font-size: 36px;

  &:hover {
    cursor: pointer;
    color: #ff0000;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 15px;
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
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

  @media screen and (max-width: 500px) {
    padding: 10px 0;
    font-size: 17px;
    width: 100%;
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

  @media screen and (max-width: 500px) {
    padding: 10px 0;
    font-size: 17px;
    width: 100%;
    text-align: center;
  }
`
export const CartWrapperPrice = styled.p`
  font-size: 40px;
  font-weight: bolder;

  @media screen and (max-width: 400px) {
    font-size: 34px;
  }
`
export const ButtonToBuy = styled.button`
  background-color: #f82e56;
  color: white;
  padding: 15px 0;
  font-size: 20px;
  width: 250px;
  font-weight: bolder;
  border: 1px solid #f82e56;
  margin: 15px auto 80px auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    margin: 15px 0;
  }
`
export const OffMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 220px;

  @media screen and (max-width: 550px) {
    width: 80%;
    margin: 0 auto 140px auto;
    gap: 20px;
  }
`

export const CartMapDescriptionContainerMobile = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const CartMapImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
`
export const DeleteIconMobile = styled(LuDelete)`
  font-size: 26px;

  &:hover {
    cursor: pointer;
    color: #ff0000;
  }

  @media screen and (max-width: 500px) {
    font-size: 29px;
    margin-top: 6px;
  }

  @media screen and (max-width: 400px) {
    font-size: 24px;
    margin-top: 5px;
  }
`