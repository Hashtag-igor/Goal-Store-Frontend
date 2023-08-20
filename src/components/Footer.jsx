import React from 'react'
import { FooterAccountContainer, FooterContactContainer, FooterContactInfo, FooterContactLink, FooterContactUL,
         FooterContactWrapper, FooterContainer, FooterCreditCardsContainer, FooterCreditCardsIMG, FooterCreditCardsWrapper,
         FooterInfoContainer, FooterRightsContainer, FooterRightsReserved, FooterRightsReservedContainer, FooterRightsWrapper,
         FooterTitle, FooterWrapper, FooterContactLI, FooterMailIcon, FooterTimeIcon } from '../styles/FooterStyles'


export default function Footer() {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterInfoContainer>
                <FooterTitle>INFORMAÇÕES</FooterTitle>
                <FooterContactUL>
                    <FooterContactLI>
                        <FooterContactLink to="/privacy">Política de Privacidade</FooterContactLink>
                    </FooterContactLI>
                    <FooterContactLI>
                        <FooterContactLink to="/questions">Perguntas Frequentes</FooterContactLink>
                    </FooterContactLI>
                </FooterContactUL>
            </FooterInfoContainer>
            <FooterAccountContainer>
                <FooterTitle>MINHA CONTA</FooterTitle>
                <FooterContactUL>
                    <FooterContactLI>
                        <FooterContactLink to="/login">Fazer Login</FooterContactLink>
                    </FooterContactLI>
                    <FooterContactLI>
                        <FooterContactLink to="/register">Criar Conta</FooterContactLink>
                    </FooterContactLI>
                </FooterContactUL>
            </FooterAccountContainer>
            <FooterContactContainer>
                <FooterTitle>CONTATO</FooterTitle>
                <FooterContactWrapper>
                    <FooterContactInfo>SAC WHATSAPP (31) 99808-2888</FooterContactInfo>
                    <FooterContactInfo><FooterMailIcon/> sac@goalstore.net</FooterContactInfo>
                    <FooterContactInfo><FooterTimeIcon /> 10:00 - 18:00, Segunda - Sexta</FooterContactInfo>
                </FooterContactWrapper>
            </FooterContactContainer>
        </FooterWrapper>
        <FooterRightsContainer>
            <FooterRightsWrapper>
                <FooterRightsReservedContainer>
                    <FooterRightsReserved>© 2023 Goal Store. Todos os direitos reservados.</FooterRightsReserved>
                </FooterRightsReservedContainer>
                <FooterCreditCardsContainer>
                    <FooterCreditCardsWrapper><FooterCreditCardsIMG src="https://fanaticotorcedor.net/cdn/shop/t/2/assets/icon-pay-1.png?v=98653610681555327881558545409" alt="" /></FooterCreditCardsWrapper>
                    <FooterCreditCardsWrapper><FooterCreditCardsIMG src="https://fanaticotorcedor.net/cdn/shop/t/2/assets/icon-pay-2.png?v=132647477176406435231558545409" alt="" /></FooterCreditCardsWrapper>
                    <FooterCreditCardsWrapper><FooterCreditCardsIMG src="https://fanaticotorcedor.net/cdn/shop/t/2/assets/icon-pay-3.png?v=154154031301599170541558545409" alt="" /></FooterCreditCardsWrapper>
                    <FooterCreditCardsWrapper><FooterCreditCardsIMG src="https://fanaticotorcedor.net/cdn/shop/t/2/assets/icon-pay-4.png?v=61343518638440848961558545409" alt="" /></FooterCreditCardsWrapper>
                    <FooterCreditCardsWrapper><FooterCreditCardsIMG src="https://fanaticotorcedor.net/cdn/shop/t/2/assets/icon-pay-5.png?v=99226955855195825351558545409" alt="" /></FooterCreditCardsWrapper>  
                </FooterCreditCardsContainer>
            </FooterRightsWrapper>
        </FooterRightsContainer>
    </FooterContainer>
  )
}
