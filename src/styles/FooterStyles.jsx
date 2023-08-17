import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { GoMail } from 'react-icons/go'
import { BiTimeFive } from "react-icons/bi"

export const FooterContainer = styled.div`
    background: #f9f9f9;
`
export const FooterWrapper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
    padding: 80px 0;
`
export const FooterInfoContainer = styled.div`
`
export const FooterAccountContainer = styled.div`
`
export const FooterContactContainer = styled.div`
`
export const FooterContactWrapper = styled.div`
`
export const FooterContactInfo = styled.p`
    margin: 8px 0;
    display: flex;
    align-items: center;
    color: #333745;

    &:hover{
        color: #f82e56;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bolder;
  }
`
export const FooterMailIcon = styled(GoMail)`
    padding-right: 10px;
`
export const FooterTimeIcon = styled(BiTimeFive)`
    padding-right: 10px;
`
export const FooterTitle = styled.h3`
    font-weight: bolder;
    margin-bottom: 20px;
`
export const FooterContactUL = styled.ul`
    list-style: none;
`
export const FooterContactLink = styled(Link)`
    margin: 8px 0;
    color: #333745;

    &:hover{
        color: #f82e56;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bolder;
  }
`
export const FooterContactLI = styled.li`
    margin: 8px 0;
    color: #333745;

    &:hover{
        color: #f82e56;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bolder;
  }
`
export const FooterRightsContainer = styled.div`
    background: #f1f1f1;
`
export const FooterRightsWrapper = styled.div`
    padding: 50px; 
    display: flex; align-items: center; 
    flex-direction: column; 
    align-content: center;
`
export const FooterRightsReservedContainer = styled.div`
`
export const FooterRightsReserved = styled.p`
`
export const FooterCreditCardsContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    margin-top: 12px;
`
export const FooterCreditCardsWrapper = styled.li`
`
export const FooterCreditCardsIMG = styled.img`
`