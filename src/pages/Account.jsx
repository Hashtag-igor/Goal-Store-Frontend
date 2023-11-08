import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Links from '../components/Links'
import { AccountButton, AccountContainer, AccountInfo, AccountTitle, AccountWarning, BeStrong, AccoutPasswordContainer, AccountPasswordButton, KeyOff, KeyOn } from "../styles/AccountStyles"


export default function Account() {
  const { userLoggedIn, updateUserLoggedIn } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  function createHiddenPassword(length) {
    return '*'.repeat(length); // Isso criará uma string com asteriscos do comprimento especificado
  }

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
          <AccoutPasswordContainer>
            <AccountInfo>Sua Senha: <BeStrong>{showPassword ? userLoggedIn.password : createHiddenPassword(9)}</BeStrong></AccountInfo>
              <AccountPasswordButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <KeyOff /> : <KeyOn />}
              </AccountPasswordButton>
          </AccoutPasswordContainer>
          <AccountButton onClick={handleLogout}>Deslogar</AccountButton>
          <AccountWarning>*Em breve você poderá alterar a senha do seu usuário..</AccountWarning>
        </AccountContainer>
      ) : null}
    </>
  );
}




