import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";

// Estilizações das Rotas de Camisas
export const Container = styled.div`
  width: 90%;
  margin: 70px auto 100px auto;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
export const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px 0;
`
export const MapWrapper = styled.div``

export const Title = styled.h1`
  font-size: 34px;
  margin: 0 0 20px 0;
`

//LINKS
export const ProfileLinksContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    gap: 0 8px;

    @media screen and (max-width: 670px) {
      width: 95%;
      justify-content: center;
    }

    @media screen and (max-width: 500px) {
      justify-content: start;
      padding-left: 10px;
    }
`
export const ProfileHomeLink = styled(BsFillHouseFill)`
    font-size: 17px;
`
export const ProfileSlash = styled.span`
    font-family: "roboto"; 
    font-size: 18px;
    &:hover {
        transition: 0.3s;
        cursor: pointer;
        color: #f82e56;
    }
`
export const ProfileLink = styled(Link)`
    color: black; 
    font-family: "roboto";

    &:hover {
        transition: 0.3s;
        cursor: pointer;
        color: #f82e56;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media screen and (max-width: 670px) {
      font-size: 13px;
    }
`

//QUESTION AND PRIVACY PAGES
export const PrivacyAndQuestionsWrapper = styled.div``
export const DescriptionContainer = styled.div``
export const Description = styled.p``
export const Question = styled.h4`
    margin-bottom: 10px;
`
export const Answer = styled.p``
export const QuestionsOL = styled.ol``
export const QuestionsUL = styled.ul`
  list-style: none;
`
export const QuestionsLI = styled.li`
    margin: 40px 0;
`