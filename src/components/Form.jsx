import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Account from '../pages/Account';

export default function Form({ isLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { setUsuarios, setAllUsersData, usuarios, updateUserLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const searchUsers = () => {
    return fetch('http://localhost:3001/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os usuários.');
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Consulta o backend para buscar a lista de usuários
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
  
      // Salva os usuários no estado local (usuarios) e no contexto
      setUsuarios(data);
      setAllUsersData(data);
  
      const isAdmin = email === 'admin@admin.com' && password === '123';
  
      if (isAdmin) {
        setAutenticado(true);
        const adminUser = {
          name: 'Admin',
          email: 'admin@admin.com',
          password: '123',
          isAdmin: true,
        };
        setUsuarioAtual(adminUser);
        updateUserLoggedIn(adminUser); // Atualiza o estado do usuário logado
        return; // Interrompe a execução da função
      }
  
      const usuario = data.find((u) => u.email === email);
  
      if (usuario && usuario.password === password) {
        setAutenticado(true);
        setUsuarioAtual(usuario);
        updateUserLoggedIn(usuario); // Atualiza o estado do usuário logado
        navigate('/account', { state: { user: usuario } });
      } else {
        setAutenticado(false);
        setUsuarioAtual(null);
        alert('Usuário não encontrado! Tente novamente');
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      alert('Ocorreu um erro ao buscar usuários. Tente novamente mais tarde.');
    }
  };
  

  const handleLogout = (e) => {
    e.preventDefault();

    setAutenticado(false);
    setUsuarioAtual(null);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão vazios
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Primeiro, busca os usuários no banco de dados
      const data = await searchUsers();

      // Verifica se o email já existe na lista de usuários
      const checkUser = data.find((u) => u.email === email);

      if (checkUser) {
        // Usuário já cadastrado com o mesmo email
        alert('Usuário já cadastrado com esse email.. Tente novamente com outro email');
        setName('');
        setEmail('');
        setPassword('');
        setLoading(false);
      } else {
        // Cria um novo usuário
        const usuario = { name, email, password };

        fetch('http://localhost:3001/users', {
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
    searchUsers();
  }, [submitSuccess]);

  return (
    <>
      {isLogin ? (
        <>
          {!autenticado ? (
            <form onSubmit={handleLogin}>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <hr />
              <label>Password</label>
              <input type="text" onChange={(e) => setPassword(e.target.value)} />
              <hr />
              <button>Enviar</button>
            </form>
          ) : (
            <div>
              <div>
                <h1>Seja Bem-Vindo, {usuarioAtual.name}!</h1>
                <h2>Informações do usuário</h2>
                <p>Nome: {usuarioAtual.name}</p>
                <p>Email: {usuarioAtual.email}</p>
                <p>Password: {usuarioAtual.password}</p>
                <button onClick={handleLogout}>Sair</button>
              </div>
              {usuarioAtual.email === 'admin@admin.com' ? (
                <>
                  <ul>
                    <h1>Usuários salvos no banco de dados</h1>
                    {usuarios.map((usuario) => (
                      <li key={usuario._id}>
                        <Account name={usuario.name} email={usuario.email} password={usuario.password} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          )}
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div>
              <label>Nome</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Salvar'}
            </button>
          </form>
        </>
      )}
    </>
  );
}

