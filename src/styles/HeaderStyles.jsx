import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";


//HEADER FIXED
export const FixedHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: #0b3f1a;
  border-bottom: 1px solid #0a3d19;
  box-shadow: 3px 2px 2px #093817;
  height: 100px;
  top: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const UserActionsLogoFixed = styled.img`
  height: 70px;
  width: 100px;
  padding: 5px 0;
`;

export const NavbarContainerFixed = styled.div`
  display: flex;
  width: 80%;
  padding: 14px 0;
  background-color: #0b3f1a;
  border-bottom: 1px solid #0a3d19;
`;

export const NavbarWrapperFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  margin: auto;
`;


//HEADER NORMAL
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const UserActionsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #0c441c;
`;

export const UserActionsWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const UserActionsLink = styled(Link)``;

export const UserActionsLogo = styled.img`
  height: 100px;
  width: 140px;
`;

export const UserActionsInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px; /* Espaço entre a logo e o input */

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 100px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const UserActionsInput = styled.input`
  width: 480px;
  padding-left: 8px;
  height: 44px;
  font-size: 18px;
  border: 1px solid #e0e0e0;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    width: 380px;
  }

  @media (max-width: 850px) {
    width: 320px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 690px) {
    width: 260px;
  }

  @media (max-width: 640px) {
    width: 200px;
  }
`;

export const UserActionsInputButton = styled.button`
  height: 46px;
  width: 45px;
  border: 1px solid #e0e0e0;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const UserActionsInputButtonIcon = styled(PiMagnifyingGlassBold)`
  font-size: 22px;
`;

export const UserActionsCart = styled(BsCart3)`
  color: #fff;
  font-size: 32px;
`;

export const UserActionsAccount = styled(VscAccount)`
  color: #fff;
  font-size: 32px;
`;

export const UserActionsLoggedInContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 14px 0;
  background-color: #0b3f1a;
  border-bottom: 1px solid #0a3d19;
  box-shadow: 3px 2px 2px #093817;
`;

export const NavbarWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`;


//MOBILE
export const UserActionsLinkMobile = styled(UserActionsLink)`
  padding: 25px 0;
  color: black;
  border-bottom: 1px solid #dfdfdf;
  &:hover {
    background-color: #fff;
    color: #f82e56;
  }
`;

export const UserActionsLinkMobileAccount = styled(UserActionsLink)`
  padding: 25px 0;
  color: black;
  &:hover {
    background-color: #fff;
    color: #f82e56;
  }
`;

export const UserActionsCartMobile = styled(BsCart3)`
  color: black;
  font-size: 32px;
  &:hover {
    background-color: #fff;
    color: #f82e56;
  }
`;

export const UserActionsAccountMobile = styled(VscAccount)`
  color: black;
  font-size: 32px;
  &:hover {
    background-color: #fff;
    color: #f82e56;
  }
`;

export const UserActionsLoggedInContainerMobile = styled(UserActionsLoggedInContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`


