import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { GoMail } from 'react-icons/go'
import { BiTimeFive } from "react-icons/bi"

export const FooterContainer = styled.div`
    background: #f9f9f9;
    width: 100%;

    @media screen and (max-width: 550px) {
        padding: 80px 0;
    }
`
export const FooterWrapper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
    height: 300px;

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    @media screen and (max-width: 550px) {
        height: 450px;
        padding-top: 30px;
        margin: auto;
        flex-direction: column;
        align-items: start;
    }
`
export const FooterInfoContainer = styled.div`
    @media screen and (max-width: 550px) {
        width: 85%;
        margin: 0 auto 20px auto;
    }
`
export const FooterAccountContainer = styled.div`
    @media screen and (max-width: 550px) {
        width: 85%;
        margin: 0 auto 20px auto;
    }
`
export const FooterContactContainer = styled.div`
    @media screen and (max-width: 550px) {
        width: 85%;
        margin: 0 auto 20px auto;
    }
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

    @media screen and (max-width: 550px) {
        margin-bottom: 10px;
    }
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
    }

    @media screen and (max-width: 550px) {
        display: block;
    }

`
export const FooterContactLI = styled.li`
    margin: 8px 0;
    color: #333745;

    &:hover{
        color: #f82e56;
        cursor: pointer;
        transition: 0.3s;
  }
`
export const FooterRightsContainer = styled.div`
    background: #f1f1f1;


    @media screen and (max-width: 550px) {
        width: 100%;
        margin-top: 30px;
    }
`
export const FooterRightsWrapper = styled.div`
    padding: 50px; 
    display: flex; align-items: center; 
    flex-direction: column; 
    align-content: center;

    @media screen and (max-width: 400px) {
        padding: 50px 0;
    }
`
export const FooterRightsReservedContainer = styled.div`
`
export const FooterRightsReserved = styled.p`
    @media screen and (max-width: 500px) {
        font-size: 14px;
        text-align: justify;
    }
`
export const FooterCreditCardsContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    margin-top: 12px;

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`
export const FooterCreditCardsWrapper = styled.li`

`
export const FooterCreditCardsIMG = styled.img`
`