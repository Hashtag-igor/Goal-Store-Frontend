import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Logo from "../assets/icone.png"
import { UserActionsLink, UserActionsAccount, UserActionsCart, UserActionsInput, UserActionsInputButton, UserActionsInputContainer,
         UserActionsInputButtonIcon, HeaderContainer, NavbarContainer, NavbarWrapper, UserActionsContainer, UserActionsLogo,
         UserActionsWrapper, UserActionsLoggedInContainer, FixedHeaderContainer, LogoContainer, NavbarContainerFixed,
        NavbarWrapperFixed, UserActionsLogoFixed  } from "../styles/HeaderStyles"


export default function Header() {
  const { userLoggedIn } = useContext(UserContext);
  const [search, setSearch] = useState("");
  // const [isScrolled, setIsScrolled] = useState(false);
  const [headerState, setHeaderState] = useState("normal");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    let isScrolling = false;
  
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
  
        const scrollY = window.scrollY;
        const headerActivationHeight = 280;
        const scrollThreshold = 50; // Limite mínimo de scroll antes de mudar o estado
        const isHeaderFixed = scrollY > headerActivationHeight;
  
        if (isHeaderFixed && headerState !== "fixed") {
          setHeaderState("fixed");
        } else if (!isHeaderFixed && headerState !== "normal") {
          // Verifica se o scroll está no topo antes de mudar para o estado normal
          if (scrollY <= scrollThreshold) {
            setHeaderState("normal");
          }
        }
  
        setTimeout(() => {
          isScrolling = false;
        }, 50);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerState]);
  
  
  

  return (
    <>
      {headerState === "fixed" ? (
        <FixedHeaderContainer>
          <LogoContainer>
            <UserActionsLink to="/">
              <UserActionsLogoFixed src={Logo} alt="" />
            </UserActionsLink>
          </LogoContainer>
          <NavbarContainerFixed>
            <NavbarWrapperFixed>
              <UserActionsLink to="/brshirts">TIMES BRASILEIROS</UserActionsLink>
              <UserActionsLink to="/rdmshirts">RESTO DO MUNDO</UserActionsLink>
              <UserActionsLink to="/nationshirts">SELEÇÕES</UserActionsLink>
              <UserActionsLink to="/retroshirts">RETRÔ</UserActionsLink>
            </NavbarWrapperFixed>
          </NavbarContainerFixed>
        </FixedHeaderContainer>
      ) : (
        <HeaderContainer>
          <UserActionsContainer>
            <UserActionsWrapper>
              <UserActionsLink to="/">
                <UserActionsLogo src={Logo} alt="" />
              </UserActionsLink>
              <UserActionsInputContainer>
                <UserActionsInput type="text" value={search} placeholder='Procure aqui..' onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                <UserActionsInputButton onClick={handleSubmit}>
                  <UserActionsInputButtonIcon />
                </UserActionsInputButton>
              </UserActionsInputContainer>
              {userLoggedIn ? (
                <UserActionsLoggedInContainer>
                  <UserActionsLink to="/cart"><UserActionsCart /></UserActionsLink>
                  <UserActionsLink to="/account"><UserActionsAccount /></UserActionsLink>
                </UserActionsLoggedInContainer>
              ) : (
                <UserActionsLoggedInContainer>
                  <UserActionsLink to="/register">REGISTRAR-SE</UserActionsLink>
                  <UserActionsLink to="/login">ENTRAR</UserActionsLink>
                </UserActionsLoggedInContainer>
              )}
            </UserActionsWrapper>
          </UserActionsContainer>
          <NavbarContainer>
            <NavbarWrapper>
              <UserActionsLink to="/brshirts">TIMES BRASILEIROS</UserActionsLink>
              <UserActionsLink to="/rdmshirts">RESTO DO MUNDO</UserActionsLink>
              <UserActionsLink to="/nationshirts">SELEÇÕES</UserActionsLink>
              <UserActionsLink to="/retroshirts">RETRÔ</UserActionsLink>
            </NavbarWrapper>
          </NavbarContainer>
        </HeaderContainer>
      )}
    </>
  );
}

