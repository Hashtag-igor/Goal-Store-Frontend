import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Logo from "../assets/icone.png"
import { UserActionsLink, UserActionsAccount, UserActionsCart, UserActionsInput, UserActionsInputButton, UserActionsInputContainer,
         UserActionsInputButtonIcon, HeaderContainer, NavbarContainer, NavbarWrapper, UserActionsContainer, UserActionsLoggedInContainer,
         UserActionsLogo, UserActionsWrapper  } from "../styles/HeaderStyles"

export default function Header() {
  const { userLoggedIn } = useContext(UserContext);

  const [search, setSearch] = useState("");
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

  return (
    <>
      <HeaderContainer>
        <UserActionsContainer>
          <UserActionsWrapper>
            <UserActionsLink to="/">
              <UserActionsLogo src={Logo} alt="" />
            </UserActionsLink>
            <UserActionsInputContainer>
              <UserActionsInput type="text" value={search} placeholder='Procure aqui..' onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
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
    </>
  );
}

