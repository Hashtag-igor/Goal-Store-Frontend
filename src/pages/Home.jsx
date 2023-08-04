import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Card from '../components/Card';


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


  const newCollectionShirts = product.length > 0 ? product.filter((shirts) =>
    shirts.description.toLowerCase().includes('24') &&
    !shirts.description?.toLowerCase().includes('retrô')
    ) : []

  const retroShirts = product.length > 0 ? product.filter((shirts) => 
    shirts.description.toLowerCase().includes('retrô') &&
    !shirts.description.toLowerCase().includes('rdm') &&
    !shirts.description?.toLowerCase().includes('seleção') 
    ) : []      
        
  const lastSeasonShirts = product.length > 0 ? product.filter((shirts) => 
    shirts.name.toLowerCase().includes('2021/22') &&
    !shirts.description?.toLowerCase().includes('retrô')
    ) : [] 


  const selectedNewCollectionShirts = newCollectionShirts.slice(0, 8);
  const selectedRetroShirts = retroShirts.slice(0, 8)

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

      {/* Nova Coleção */}
      <div style={{margin: "50px auto", width: "90%"}}> 
        <h1>COLEÇÃO NOVA TEMPORADA</h1>
        <p>- Compre em até 12x no Cartão ou à vista no PIX ou Boleto -</p>
        <Link to="/newcollection">CONFIRA NOSSA COLEÇÃO 2023/24</Link>
        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap: "30px 0px", margin: "50px 0", width: '100%'}}>
          {selectedNewCollectionShirts.map((product, i) => (
            <div key={i}>
                <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
              </div>
            ))}
        </div>
      </div>


      {/* Camisas Retrô */}
      <div style={{margin: "50px auto", width: "90%"}}>
          <h1>Camisas Retrô</h1>
          <p>- Compre em até 12x no Cartão ou à vista no Boleto -</p>
          <Link to="/retroshirts">CONFIRA NOSSA LINHA RETRÔ</Link>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap: "30px 0px", margin: "50px 0", width: '100%'}}>
          {selectedRetroShirts.map((product, i) => (
            <div key={i}>
              <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
             </div>
          ))}
        </div>
      </div>      

      {/* Camisas Da temporada passada */}
      <div style={{margin: "50px auto", width: "90%"}}>
          <h1>Camisas da Temporada Passada</h1>
          <p>- Compre em até 12x no Cartão ou à vista no Boleto -</p>
          <Link to="/retroshirts">CONFIRA A LINHA DA TEMPORADA PASSADA</Link>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap: "30px 0px", margin: "50px 0", width: '100%'}}>
          {lastSeasonShirts.map((product, i) => (
            <div key={i}>
              <Card onClick={() => goToTheProfilePage(product)} name={product.name} description={product.description} price={product.price} img={product.img} img_back={product.img_back}/>
            </div>
          ))}
        </div>
      </div>

      <div style={{backgroundImage: "url(https://th.bing.com/th/id/R.433bab1fae3960564a64eeceb657fc53?rik=uKgPF%2fIOGkAdwg&riu=http%3a%2f%2fkidutsport.com.br%2fimages%2fbanners%2fpromocional-04.jpg&ehk=DMlGN622qwGywMg5PWZY8KvHsFnnyjZdH1K28qqpsP0%3d&risl=&pid=ImgRaw&r=0)", padding: "300px", backgroundPosition: "center", backgroundSize: "cover"}}></div>
    </div>
  );
}






