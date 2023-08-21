import { styled } from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { PiMagnifyingGlassBold } from "react-icons/pi"


export const HeaderContainer = styled.div`
    display: flex;
    align-Items: center; 
    width: 100%; 
    flex-direction: column;
`
export const UserActionsContainer = styled.div`
    width: 100%; 
    padding: 20px 0; 
    background: #0c441c;
`
export const UserActionsWrapper = styled.div`
    width: 95%; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    margin: auto;
`
export const UserActionsLink = styled(Link)``
export const UserActionsLogo = styled.img`
    height: 120px; 
    width: 160px;
`
export const UserActionsInputContainer = styled.div`
    display: flex;
    align-items: center;
`
export const UserActionsInput = styled.input`
    width: 320px;
    padding-left: 8px;
    height: 44px;
    font-size: 18px;
    border: 1px solid #e0e0e0;
    letter-spacing: 1px;
`
export const UserActionsInputButton = styled.button`
    height: 46px;
    width: 45px;
    border: 1px solid #e0e0e0;
    background-color: #fff;

    &:hover{
        cursor: pointer;
    } 
`
export const UserActionsInputButtonIcon = styled(PiMagnifyingGlassBold)`
    font-size: 22px;
`

export const UserActionsCart = styled(BsCart3)`
    color: #fff;
    font-size: 32px;
`

export const UserActionsAccount = styled(VscAccount)`
    color: #fff;
    font-size: 32px;
`
export const UserActionsLoggedInContainer = styled.div`
    width: 20%; 
    display: flex; 
    justify-content: space-around;
`

export const NavbarContainer = styled.div`
    width: 100%; 
    padding: 14px 0; 
    background-color: #0b3f1a; 
    border-bottom: 1px solid #0a3d19;  
    box-shadow: 3px 2px 2px #093817;
`

export const NavbarWrapper = styled.div`
    width: 95%; 
    display: flex; 
    align-items: center; 
    justify-content: space-evenly; 
    margin: auto;
`