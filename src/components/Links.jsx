import {useLayoutEffect, useState} from 'react'
import { ProfileLink, ProfileLinksContainer, ProfileHomeLink, ProfileSlash } from "../styles/SharedFiles"

export default function Links() {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 500;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Adicione um ouvinte de redimensionamento para atualizar o estado quando a largura da tela mudar
  //   window.addEventListener('resize', handleResize);

  //   // Limpe o ouvinte de redimensionamento quando o componente for desmontado
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // }

  // Renderize o conteúdo
  return (
    <>
      {isMobile ? (
        <ProfileLinksContainer>
          <ProfileLink to="/"><ProfileHomeLink/></ProfileLink>
          <ProfileSlash> / </ProfileSlash>
          <ProfileLink to="/newcollection">NOVA COLEÇÃO</ProfileLink>
          <ProfileSlash> / </ProfileSlash>
          <ProfileLink to="/oldcollection">TEMPORADA PASSADA</ProfileLink>
        </ProfileLinksContainer>
      ) : (
        <ProfileLinksContainer>
          <ProfileLink to="/"><ProfileHomeLink/></ProfileLink>
          <ProfileSlash> / </ProfileSlash>
          <ProfileLink to="/newcollection">JÁ CONHECE A NOVA COLEÇÃO?</ProfileLink>
          <ProfileSlash> / </ProfileSlash>
          <ProfileLink to="/oldcollection">CAMISAS DA TEMPORADA PASSADA</ProfileLink>
      </ProfileLinksContainer>
      )}
    </>
  )
}



// import {useEffect, useState} from 'react'
// import { ProfileLink, ProfileLinksContainer, ProfileHomeLink, ProfileSlash } from "../styles/SharedFiles"

// export default function Links() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Use useEffect para atualizar o estado quando a largura da tela mudar
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     // Adicione um ouvinte de redimensionamento para atualizar o estado quando a largura da tela mudar
//     window.addEventListener('resize', handleResize);

//     // Limpe o ouvinte de redimensionamento quando o componente for desmontado
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Defina o conteúdo com base na largura da tela
//   let content;
//   if (windowWidth > 500) {
//     content = (
//       <>
//         <ProfileLink to="/"><ProfileHomeLink/></ProfileLink>
//         <ProfileSlash> / </ProfileSlash>
//         <ProfileLink to="/newcollection">JÁ CONHECE A NOVA COLEÇÃO?</ProfileLink>
//         <ProfileSlash> / </ProfileSlash>
//         <ProfileLink to="/oldcollection">CAMISAS DA TEMPORADA PASSADA</ProfileLink>
//       </>
//     );
//   } else {
//     content = (
//       <>
//         <ProfileLink to="/"><ProfileHomeLink/></ProfileLink>
//         <ProfileSlash> / </ProfileSlash>
//         <ProfileLink to="/newcollection">NOVA COLEÇÃO</ProfileLink>
//         <ProfileSlash> / </ProfileSlash>
//         <ProfileLink to="/oldcollection">TEMPORADA PASSADA</ProfileLink>
//       </>
//     );
//   }

//   // Renderize o conteúdo
//   return <ProfileLinksContainer>{content}</ProfileLinksContainer>;
// }
