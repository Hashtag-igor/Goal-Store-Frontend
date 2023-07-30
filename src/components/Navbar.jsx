import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Logo from "../assets/icone.png"

export default function Navbar() {
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
    <div>
      <ul style={{ display: 'flex', alignItems: 'center', width: "100%", flexDirection: "column" }}>
        <div style={{width: "100%", padding: "20px 0", background: '#0c441c'}}>
          <div style={{width: "95%", display: "flex", alignItems: "center", justifyContent: "space-between", margin: 'auto'}}>
            <div>
              <Link to="/"><img style={{ height: "120px", width: "160px"}} src={Logo} alt="" /></Link>
            </div>
            <div>
              <input type="text" value={search} placeholder='Search..' onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
              <button onClick={handleSubmit}>Enviar</button>
            </div>

            {userLoggedIn ? (
              <div style={{width: "20%", display: "flex", justifyContent: "space-around"}}>
                <Link style={{color: "white"}} to="/cart">Carrinho</Link>
                <Link style={{color: "white"}} to="/account">Conta</Link>
              </div>
            ) : (
              <div style={{width: "20%", display: "flex", justifyContent: "space-around"}}>
                <Link style={{color: "white"}} to="/register">Registrar-se</Link>
                <Link style={{color: "white"}} to="/login">Entrar</Link>
              </div>
            )}
          </div>
        </div>
        
        <div style={{width: "100%", padding: "14px 0", backgroundColor: "#0b3f1a", borderBottom: "1px solid #0a3d19",  boxShadow: "3px 2px 2px #093817"}}>
          <div style={{width: "95%", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: 'auto'}}>
            <Link style={{color: "white"}} to="/brshirts">Times Brasileiros</Link>
            <Link style={{color: "white"}} to="/rdmshirts">Resto do Mundo</Link>
            <Link style={{color: "white"}} to="/nationshirts">Seleções</Link>
            <Link style={{color: "white"}} to="/retroshirts">Retrô</Link>
          </div>
        </div>
      </ul>
    </div>
  );
}

