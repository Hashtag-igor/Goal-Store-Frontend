import { styled } from 'styled-components';
import { TbKeyOff, TbKey } from "react-icons/tb"

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 25px 0; 
  margin: 70px auto 200px auto;

  @media screen and (max-width: 550px) {
    margin: 50px auto 150px auto;
  }

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`
export const AccountTitle = styled.h2`
  font-size: 40px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 32px;
  }
`
export const AccountButton = styled.button`
  background-color: #333745;
  color: white;
  padding: 15px 0;
  width: 300px;
  font-size: 18px;
  font-weight: bolder;
  border: 1px solid #333745;

  &:hover {
    background-color: #fff;
    color: #333745;
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    width: 250px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`
export const BeStrong = styled.strong`
  padding-left: 10px;
`
export const AccountInfo = styled.p`
  font-size: 20px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 17px;
  }
`
export const AccoutPasswordContainer = styled.div`
  display: flex; 
  gap: 0 25px;
`
export const AccountPasswordButton = styled.button`
`
export const AccountWarning = styled.p`
  margin-top: 60px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 15px;
  }
`
export const KeyOff = styled(TbKeyOff)`
  padding: 0 10px;
  font-size: 20px;
`
export const KeyOn = styled(TbKey)`
  padding: 0 10px;
  font-size: 20px;
`