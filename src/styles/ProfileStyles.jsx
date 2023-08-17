import { styled } from "styled-components";
import { Link } from "react-router-dom"
import { BsFillHouseFill, BsCart3 } from "react-icons/bs"


//LINKS
export const ProfileLinksContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    gap: 0 8px;
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
`


export const ProfileProductContainer = styled.div`
  width: 90%;
  margin: 40px auto;
`
//IMG
export const ProfileProductWrapper = styled.div`
    display: flex;
`
export const ProfileIMGContainer = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    /* border-right: 1px solid #d1d1d1e2; */
    /* border-right: 1px solid #0c441c; */
    margin-top: 20px;
`
export const ProfileIMGWrapper = styled.div``

export const ProfileMainIMG = styled.img`
    width: 400px; 
    height: 400px;
`
export const ProfileSmallIMG = styled.img`
    width: 180px;
    height: 180px;
`

//INFO
export const ProfileInfoContainer = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`
export const ProfileInfoWrapper = styled.div`
    text-align: center;
    width: 100%;
`
export const ProfileInfoName = styled.h2`
    font-size: 28px; 
    margin: 50px auto 10px auto;
    width: 100%;
`
export const ProfileInfoDescription = styled.p`
    font-size: 18px; 
    margin: 8px auto;
    width: 80%;
`

// SIZE
export const ProfileSizeQuantyContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
`
export const ProfileSizeQuantyWrapper = styled.div``

export const ProfileSizeContainer = styled.div`
    display: flex; 
    flex-direction: column;
`
export const ProfileSizeSelect = styled.select`
    font-size: 18px;
    cursor: pointer;
`
export const ProfileSizeOption = styled.option``

export const ProfileLabel = styled.label`
    font-size: 16px;
    padding-right: 10px;
`


//QUANTY
export const ProfileQuantyButton = styled.button`
    font-size: 22px; 
    padding: 1px 10px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #d1d1d1;

    &:hover {
        transition: 0.3s;
        cursor: pointer;
        border: 1px solid gray;
    }
`
export const ProfileQuanty = styled.input`
    width: 48px;
    border: none; 
    background-color: transparent; 
    text-align: center;
    font-size: 24px;
    color: #f82e56;
    font-weight: bolder;
`


//PAYMENT
export const ProfilePaymentContainer = styled.div`
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    gap: 10px 0;
    margin: 50px 0;
`
export const ProfilePaymentPrice = styled.p`
    font-size: 34px; 
    color: #f82e56;
    font-weight: bolder;
`
export const ProfilePaymentButton = styled.button`
    background-color: #f82e56; 
    color: white;
    padding: 15px 0; 
    font-size: 20px; 
    width: 330px; 
    font-weight: bolder; 
    border: 1px solid #f82e56; 
    margin-top: 10px;
    cursor: pointer;
`
export const ProfilePaymentButtonIcon = styled(BsCart3)`
    font-size: 22px;
`
export const ProfilePaymentOptionsContainer = styled.div`
    margin: 20px auto; 
    display: flex; 
    align-items: center;
    flex-direction: column;
`
export const ProfilePaymentIMG = styled.img`
    margin: 20px 0;
`
export const ProfilePaymentMessage = styled.p`
    width: 90%; 
    text-align: center;
`


//ABOUT PRODUCT
export const AboutProductContainer = styled.div`
    width: 90%;
    margin: 25vh auto 15vh;
    /* box-shadow: 0 0 5px #00000014; */
    box-shadow: 0 0 5px #0c441c;
    padding: 50px 0 30px 0;
`
export const AboutProductWrapper = styled.div`
    width: 90%; 
    margin: auto;
`
export const AboutProductTitleContainer = styled.div`
`
export const AboutProductTitle = styled.h3`
    font-size: 36px;
    margin: 30px 0 40px 0;
`
export const AboutProductWarningContainer = styled.div`
    background: #0c441c;
    color: #fff;
    padding: 15px 0;
`
export const AboutProductWarningTitle = styled.h3`
    width: 90%;
    margin: auto;
`
export const AboutProductWarningDescription = styled.p`
    width: 90%;
    margin: auto;
    text-align: justify;
`
export const AboutProductTable = styled.table`
    height: 350px; 
    border-collapse: collapse; 
    width: 90%; 
    text-align: center; 
    margin: 80px auto 0 auto;
    box-shadow: 0 0 5px #00000029;
`
export const AboutProductTR = styled.tr`
`
export const AboutProductTH = styled.th`
    font-size: 22px;
    font-weight: bolder;
`
export const AboutProductTD = styled.td`
    font-size: 22px;
`
export const AboutProductTDSize = styled.td`
    font-size: 22px;
    font-weight: bolder;
`
export const AboutProductWarningSize = styled.p`
    padding: 15px 0; 
    color: black;
    text-align: center;
    width: 90%;
    margin: auto;
    margin-top: 5px;
`
export const AboutProductInfoContainer = styled.ul`
    list-style: none;
    margin: 100px auto;
`
export const AboutProductInfo = styled.li`
    margin: 30px 0;
    font-size: 18px;
`
export const StrongWord = styled.strong``