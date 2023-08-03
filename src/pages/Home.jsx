import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Card from '../components/Card';
import NewCollection from '../pages/NewCollection';

export default function Home() {
  const [product, setProduct] = useState([])
  const { userLoggedIn } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const searchProducts = () => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToTheProfilePage = (product) => {
    navigate("/profile", { state: { product } });
  };

  useEffect(() => {
    searchProducts(); // Chamada da função aqui

    // Verificar se o usuário está logado
    const isUserLoggedIn = userLoggedIn !== null;

    if (!isUserLoggedIn && location.pathname !== '/') {
      // Se o usuário não está logado e a rota atual não é '/', redirecioná-lo para a página de login
      navigate('/login');
    }
  }, [userLoggedIn, location, navigate]);
  

  return (
    <div>
      <div style={{backgroundImage: "url(https://www.superstore.com.br/images/lojas/foto-04-gr.jpg)", padding: "400px", backgroundPosition: "center", backgroundSize: "cover"}}>
        <h1 style={{textAlign: "center", fontSize: "60px", color: "white", fontWeight: "bolder"}}>Bem-Vindo,</h1>
      </div>
      <div>
        <div>
          <h1>COLEÇÃO NOVA TEMPORADA</h1>
          <p>- Compre em até 12x no Cartão ou à vista no PIX ou Boleto -</p>
          <Link to="newcollection">CONFIRA NOSSA COLEÇÃO 2023/24</Link>
        </div>
        <NewCollection />
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "30px 0px", margin: "50px 0"}}>
        {product.map((products, i) => (
          <div key={i}>
            <Card onClick={() => goToTheProfilePage(products)} name={products.name} description={products.description} price={products.price} img={products.img} img_back={products.img_back}/>
          </div>
        ))}
      </div>
    </div>
  );
}






