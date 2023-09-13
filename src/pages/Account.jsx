import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Links from '../components/Links'


const AccountContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 25px 0; 
  margin: 70px auto 200px auto;

  @media screen and (max-width: 550px) {
    margin: 50px auto 150px auto;
  }

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`
const AccountTitle = styled.h2`
  font-size: 40px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 32px;
  }
`
const AccountButton = styled.button`
  background-color: #333745;
  color: white;
  padding: 15px 0;
  width: 300px;
  font-size: 18px;
  font-weight: bolder;
  border: 1px solid #333745;

  &:hover {
    background-color: #fff;
    color: #333745;
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    width: 250px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`
const BeStrong = styled.strong`
  padding-left: 10px;
`
const AccountInfo = styled.p`
  font-size: 20px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 17px;
  }
`
const AccountWarning = styled.p`
  margin-top: 60px;

  @media screen and (max-width: 490px) {
    text-align: center;
    font-size: 15px;
  }
`


export default function Account() {
  const { userLoggedIn, updateUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      // Se o usuário não está logado, redireciona para a rota "/"
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  const handleLogout = () => {
    updateUserLoggedIn(null); // Limpa as informações do usuário logado no contexto
    localStorage.removeItem('userLoggedIn'); // Remove o usuário logado do localStorage
    navigate('/'); // Redireciona para a rota "/"
  };

  return (
    <>
      <Links />
      {userLoggedIn ? (
        <AccountContainer>
          <AccountTitle>Bem-Vindo, {userLoggedIn.name}!</AccountTitle>
          <AccountInfo>Seu Email: <BeStrong>{userLoggedIn.email}</BeStrong></AccountInfo>
          <AccountInfo>Sua Senha: <BeStrong>{userLoggedIn.password}</BeStrong></AccountInfo>
          <AccountButton onClick={handleLogout}>Deslogar</AccountButton>
          <AccountWarning>*Em breve você poderá alterar a senha do seu usuário..</AccountWarning>
        </AccountContainer>
      ) : null}
    </>
  );
}




