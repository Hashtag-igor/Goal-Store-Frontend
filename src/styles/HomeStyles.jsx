import { styled } from "styled-components";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

//CARROSSEL
export const CarouselWrapper = styled.div`
  position: relative;
`

export const CarouselImage = styled.div`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 770px; /* Ajuste conforme necessário */

  @media screen and (max-width: 1100px) {
    height: 700px;
  }

  @media screen and (max-width: 850px) {
    height: 1120px;
  }

  @media screen and (max-width: 700px) {
    height: 920px;
  }

  @media screen and (max-width: 600px) {
    height: 720px;
  }

  @media screen and (max-width: 500px) {
    height: 600px;
  }

  @media screen and (max-width: 400px) {
    height: 480px;
  }
`

export const CarouselRightButton = styled(BsFillArrowRightCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 30px;
  ${(props) => (props.direction === 'next' ? 'right: 10px;' : 'left: 10px;')}

  &:hover{
    cursor: pointer;
  }
`

export const CarouselLeftButton = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 30px;
  ${(props) => (props.direction === 'next' ? 'right: 10px;' : 'left: 10px;')}

  &:hover{
    cursor: pointer;
  }
`


export const MapWrapper = styled.div`
`
export const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
  width: 100%;
  gap: 40px 0;

  @media screen and (max-width: 600px) {
    gap: 40px 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 500px) {
    gap: 10px 0;
    margin: 30px 0;
  }
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

  @media screen and (max-width: 400px) {
    padding: 15px 0;
    width: 80%;
    font-size: 15px;
  }

  @media screen and (max-width: 360px) {
    padding: 15px 0;
    width: 85%;
    font-size: 14px;
  }
`
export const CollectionContainer = styled.div`
  width: 90%;
  margin: 80px auto;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 50px auto;
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

  @media screen and (max-width: 400px) {
    font-size: 20px;  
    width: 90%;
    text-align: center;
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
export const HomeSecondIMG = styled.div`
  background-image: url('https://th.bing.com/th/id/R.433bab1fae3960564a64eeceb657fc53?rik=uKgPF%2fIOGkAdwg&riu=http%3a%2f%2fkidutsport.com.br%2fimages%2fbanners%2fpromocional-04.jpg&ehk=DMlGN622qwGywMg5PWZY8KvHsFnnyjZdH1K28qqpsP0%3d&risl=&pid=ImgRaw&r=0');
  height: 720px;
  background-position: center;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 1100px) {
    height: 700px;
  }

  @media screen and (max-width: 1024px) {
    height: 600px;
  }

  @media screen and (max-width: 900px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    background-image: url('https://andredoval.com.br/wp-content/uploads/2019/10/20SS_PR_FIGC_Q5_Renaissance_Group_0529_8688x5792.jpg');
  }

  @media screen and (max-width: 500px) {
    background-image: url('https://andredoval.com.br/wp-content/uploads/2019/10/20SS_PR_FIGC_Q5_Renaissance-kit_Detail_0058_2160x2700.jpg');
  } 
`