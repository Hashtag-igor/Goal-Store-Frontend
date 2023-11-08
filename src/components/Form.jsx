import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FormButton, FormLink, FormButtonArea, FormContainer, FormInput, FormInputContainer, FormLabel, FormTitle, FormWrapper } from "../styles/FormStyles";
import Links from './Links';

export default function Form({ isLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { updateUserLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const searchUserByEmail = async (email) => {
    try {
      const response = await fetch(`https://goal-store-backend.vercel.app/users/search?email=${email}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar o usuário.');
      }
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const userData = await searchUserByEmail(email);
  
      if (!userData) {
        alert('Usuário não encontrado! Tente novamente');
        return;
      }
  
      const { password: storedPassword } = userData;
  
      if (password === storedPassword) {
        // Senhas coincidem, você pode autenticar o usuário
        // Atualize o estado do usuário no contexto com o usuário autenticado
        updateUserLoggedIn(userData);
  
        // Resto do seu código de redirecionamento e autenticação
        navigate('/account', { state: { user: userData } });
      } else {
        alert('Senha incorreta! Tente novamente');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão vazios
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Consulta o backend para verificar se o email já existe
      const user = await searchUserByEmail(email);

      if (user) {
        // Usuário já cadastrado com o mesmo email
        alert('Usuário já cadastrado com esse email. Tente novamente com outro email.');
        setName('');
        setEmail('');
        setPassword('');
        setLoading(false);
      } else {
        // Cria um novo usuário
        const usuario = { name, email, password };

        // Envia os dados do novo usuário para o backend
        fetch('https://goal-store-backend.vercel.app/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao salvar o usuário.');
            }
            return response.json();
          })
          .then((newUser) => {
            console.log('Novo usuário criado:', newUser);
            setName('');
            setEmail('');
            setPassword('');
            setSubmitSuccess(true);
          })
          .catch((error) => {
            console.error('Erro ao salvar o usuário:', error);
          })
          .finally(() => {
            setLoading(false);
            setTimeout(() => {
              setSubmitSuccess(false);
              setAutenticado(true);
              setUsuarioAtual(usuario);
              navigate('/');
            }, 1000);
          });
      }
    } catch (error) {
      console.error('Erro ao buscar os usuários:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      alert('Usuário cadastrado com sucesso!');
    }
  }, [submitSuccess]);

  return (
    <>
      {/* Area de Links antes do conteúdo */}
      <Links />

      {isLogin ? (
        <>
          {!autenticado ? (
            <FormContainer onSubmit={handleLogin}>
              <FormTitle>ENTRAR</FormTitle>
              <FormWrapper>
                <FormInputContainer>
                  <FormLabel>Email</FormLabel>
                  <FormInput type="email" value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                </FormInputContainer>
                <FormInputContainer>
                  <FormLabel>Senha</FormLabel>
                  <FormInput type="password" value={password} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                </FormInputContainer>
                <FormButtonArea>
                  <FormButton>Enviar</FormButton>
                  <FormLink to="/register">Crie sua conta</FormLink>
                </FormButtonArea>
              </FormWrapper>
            </FormContainer>
          ) : null}
        </>
      ) : (
        <>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitle>CRIAR CONTA</FormTitle>
            <FormWrapper>
              <FormInputContainer>
                <FormLabel>Nome</FormLabel>
                <FormInput type="text" value={name} placeholder='Nome' onChange={(e) => setName(e.target.value)} />
              </FormInputContainer>
              <FormInputContainer>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
              </FormInputContainer>
              <FormInputContainer>
                <FormLabel>Senha</FormLabel>
                <FormInput type="password" value={password} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
              </FormInputContainer>
              <FormButtonArea>
                <FormButton type="submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Salvar'}
                </FormButton>
                <FormLink to="/">Retornar a Loja</FormLink>
              </FormButtonArea>
            </FormWrapper>
          </FormContainer>
        </>
      )}
    </>
  );
}
