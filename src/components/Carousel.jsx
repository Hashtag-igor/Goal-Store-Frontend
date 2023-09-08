import { useState, useEffect } from "react"
import { CarouselRightButton, CarouselLeftButton, CarouselImage, CarouselWrapper } from "../styles/HomeStyles"

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const carouselImages = {
        large: ['https://www.soccerbible.com/media/144608/aik-7-min.jpg', 'https://www.soccerbible.com/media/148758/fiorentina-1-min.jpg', 'https://www.soccerbible.com/media/149130/napoli-1-min.jpg', 'https://www.soccerbible.com/media/149111/chelsea-1-min.jpg'],
        medium: ['https://mir-s3-cdn-cf.behance.net/project_modules/fs/060d2f78769581.5cae568a97215.jpg', 'https://i.pinimg.com/originals/70/af/54/70af547ac6698a42352c9ebf305d4c66.jpg', 'https://www.soccerbible.com/media/150006/soccer-culture-28-min.jpg', 'https://www.soccerbible.com/media/140144/vasco-14-min.jpg'],
        small: ['https://andredoval.com.br/wp-content/uploads/2019/10/20SS_PR_FIGC_Q5_Renaissance_Individual_0366_8688x5792.jpg', 'https://www.soccerbible.com/media/126753/venezia-away-4-min.jpg','https://content.api.news/v3/images/bin/da3ab3dc0ffdfcecea0509865a7ea66c?width=1024', 'https://www.soccerbible.com/media/137984/venezia-5-min.jpg'],
    };
  
    // Determine qual conjunto de imagens usar com base na largura da tela
    let imagesToDisplay = [];
    if (windowWidth <= 600) {
      imagesToDisplay = carouselImages.small;
    } else if (windowWidth <= 850) {
      imagesToDisplay = carouselImages.medium;
    } else {
      imagesToDisplay = carouselImages.large;
    }
  
    const nextImage = () => {
      const newIndex = (currentImageIndex + 1) % imagesToDisplay.length;
      setCurrentImageIndex(newIndex);
    };
  
    const prevImage = () => {
      const newIndex = (currentImageIndex - 1 + imagesToDisplay.length) % imagesToDisplay.length;
      setCurrentImageIndex(newIndex);
    };

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Função para avançar automaticamente para a próxima imagem a cada 10 segundos
        const interval = setInterval(() => {
          const newIndex = (currentImageIndex + 1) % imagesToDisplay.length;
          setCurrentImageIndex(newIndex);
        }, 10000); // 10 segundos
    
        return () => {
          window.removeEventListener("resize", handleResize);
          clearInterval(interval);
        };
      }, [currentImageIndex]);
  
    return (
      <CarouselWrapper>
        <CarouselImage imageUrl={imagesToDisplay[currentImageIndex]}></CarouselImage>
        <CarouselLeftButton onClick={prevImage} direction="prev">Anterior</CarouselLeftButton>
        <CarouselRightButton onClick={nextImage} direction="next">Próxima</CarouselRightButton>
      </CarouselWrapper>
    );
  };
  
  export default Carousel;
