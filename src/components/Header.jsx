import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Logo from "../assets/icone.png"
import { UserActionsLink, UserActionsAccount, UserActionsCart, UserActionsInput, UserActionsInputButton, UserActionsInputContainer,
         UserActionsInputButtonIcon, HeaderContainer, NavbarContainer, NavbarWrapper, UserActionsContainer, UserActionsLogo,
         UserActionsWrapper, UserActionsLoggedInContainer, FixedHeaderContainer, LogoContainer, NavbarContainerFixed,
         NavbarWrapperFixed, UserActionsLogoFixed, UserActionsLinkMobile, UserActionsLoggedInContainerMobile, UserActionsAccountMobile,
         UserActionsCartMobile, UserActionsLinkMobileAccount} from "../styles/HeaderStyles"
import "../styles/MobileStyles.css"


export default function Header() {
  const { userLoggedIn } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const windowWidth = window.innerWidth;
  const [headerState, setHeaderState] = useState('normal');
  const [aberto, setAberto] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = () => {
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const fecharMenu = () => {
    setAberto(false);
  };

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
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

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        const scrollY = window.scrollY;
        const headerActivationHeight = 280;
        const scrollThreshold = 50;
        const isHeaderFixed = scrollY > headerActivationHeight;

        if (isHeaderFixed && headerState !== 'fixed') {
          setHeaderState('fixed');
        } else if (!isHeaderFixed && headerState !== 'normal') {
          if (scrollY <= scrollThreshold) {
            setHeaderState('normal');
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
          {headerState === 'fixed' ? (
            <FixedHeaderContainer>
              <LogoContainer>
                <UserActionsLink to="/" onClick={handleLogoClick}>
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
                  <UserActionsLink to="/" onClick={handleLogoClick}>
                    <UserActionsLogo src={Logo} alt="" />
                  </UserActionsLink>
                  <UserActionsInputContainer>
                    <UserActionsInput
                      type="text"
                      value={search}
                      placeholder="Procure aqui.."
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <UserActionsInputButton onClick={handleSubmit}>
                      <UserActionsInputButtonIcon />
                    </UserActionsInputButton>
                  </UserActionsInputContainer>
                  {isMobile && isVisible ?
                  <div>
                    <div className={`pagina-overlay ${aberto ? 'pagina-overlay-aberto' : ''}`}>
                      <div className="pagina-conteudo">
                      {/* Conteúdo da "página" */}
                        {/* <h1>Título da Página</h1>
                        <p>Sobre</p>
                        <div style={{display: "flex", flexDirection: "column"}}>
                          <button>Entrar no portal</button>
                          <button>Login</button>
                        </div> */}
                          <div>
                            <div style={{width: "70%", display: "flex", flexDirection: "column"}}>
                              <h2 style={{paddingBottom: "25px", color: "#0b3f1a", fontSize: "28px"}}>MENU</h2>
                              <UserActionsInput type="text" value={search} placeholder="Procure camisas aqui.." onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                              <UserActionsLinkMobile to="/brshirts">TIMES BRASILEIROS</UserActionsLinkMobile>
                              <UserActionsLinkMobile to="/rdmshirts">RESTO DO MUNDO</UserActionsLinkMobile>
                              <UserActionsLinkMobile to="/nationshirts">SELEÇÕES</UserActionsLinkMobile>
                              <UserActionsLinkMobile to="/retroshirts">RETRÔ</UserActionsLinkMobile>
                              {userLoggedIn ? (
                              <UserActionsLoggedInContainerMobile>
                                <UserActionsLinkMobileAccount to="/cart">
                                  <UserActionsCartMobile />
                                </UserActionsLinkMobileAccount>
                                <UserActionsLinkMobileAccount to="/account">
                                  <UserActionsAccountMobile />
                                </UserActionsLinkMobileAccount>
                              </UserActionsLoggedInContainerMobile>
                              ) : (
                              <UserActionsLoggedInContainerMobile>
                                <UserActionsLinkMobileAccount to="/register">REGISTRAR-SE</UserActionsLinkMobileAccount>
                                <UserActionsLinkMobileAccount to="/login">ENTRAR</UserActionsLinkMobileAccount>
                              </UserActionsLoggedInContainerMobile>
                              )}
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  :    
                    <>
                      {userLoggedIn ? (
                        <UserActionsLoggedInContainer>
                          <UserActionsLink to="/cart">
                            <UserActionsCart />
                          </UserActionsLink>
                          <UserActionsLink to="/account">
                            <UserActionsAccount />
                          </UserActionsLink>
                        </UserActionsLoggedInContainer>
                      ) : (
                        <UserActionsLoggedInContainer>
                          <UserActionsLink to="/register">REGISTRAR-SE</UserActionsLink>
                          <UserActionsLink to="/login">ENTRAR</UserActionsLink>
                        </UserActionsLoggedInContainer>
                      )}
                    </>
                  }
                </UserActionsWrapper>
              </UserActionsContainer>
              {isMobile && isVisible ? 
                <button style={{display: "flex", alignItems: "center"}} className="menu-toggle" onClick={toggleMenu}>
                  <span className={`menu-icon ${aberto ? 'menu-icon-x' : 'menu-icon-vazio'}`} onClick={fecharMenu}></span> 
                </button> 
                : 
              <NavbarContainer>
                <NavbarWrapper>
                  <UserActionsLink to="/brshirts">TIMES BRASILEIROS</UserActionsLink>
                  <UserActionsLink to="/rdmshirts">RESTO DO MUNDO</UserActionsLink>
                  <UserActionsLink to="/nationshirts">SELEÇÕES</UserActionsLink>
                  <UserActionsLink to="/retroshirts">RETRÔ</UserActionsLink>
                </NavbarWrapper>
              </NavbarContainer>
              }    
            </HeaderContainer>
          )}
      </>
  );
}
