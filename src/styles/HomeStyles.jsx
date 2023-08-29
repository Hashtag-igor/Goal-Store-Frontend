import { styled } from "styled-components";

export const MapWrapper = styled.div``
export const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
  width: 100%;
  gap: 10px 0;
`
export const CollectionButton = styled.button`
  background-color: #f82e56;
  color: #fff;
  font-weight: bolder;
  border: none;
  font-size: 18px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`
export const CollectionContainer = styled.div`
  width: 90%;
  margin: 80px auto;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`
export const CollectionDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const CollectionDescriptionTitle = styled.h2`
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin: 0 0 15px 0;
  }
`
export const CollectionDescriptionParagraph = styled.p`
    font-size: 16px;

    @media screen and (max-width: 768px) {
        text-align: center;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`
export const HomeFirstIMG = styled.div`
  background-image: url('https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/11/camisas-capa.jpg');
  /* background-image: url('https://cdn.ecvol.com/s/www.ivocamisas.com.br/uploads/SITE-JUNHO-9.jpeg'); */
  height: 700px;
  background-position: center;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 900px) {
    height: 550px;
  }

  @media screen and (max-width: 768px) {
    height: 440px;
  }

  @media screen and (max-width: 600px) {
    height: 350px;
  }

  @media screen and (max-width: 500px) {
    height: 290px;
  }
`
export const HomeSecondIMG = styled.div`
  background-image: url(https://th.bing.com/th/id/R.433bab1fae3960564a64eeceb657fc53?rik=uKgPF%2fIOGkAdwg&riu=http%3a%2f%2fkidutsport.com.br%2fimages%2fbanners%2fpromocional-04.jpg&ehk=DMlGN622qwGywMg5PWZY8KvHsFnnyjZdH1K28qqpsP0%3d&risl=&pid=ImgRaw&r=0);
  height: 650px;
  background-position: center;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 900px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 380px;
  }

  @media screen and (max-width: 600px) {
    height: 260px;
  }
`