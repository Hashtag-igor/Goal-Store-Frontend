import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div style={{background: "#f9f9f9"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: "80px 0"}}>
            <div>
                <h3 style={{fontWeight: "bolder"}}>INFORMAÇÕES</h3>
                <ul>
                    <li>Política de Privacidade</li>
                    <li>Central de Ajuda</li>
                </ul>
            </div>
            <div>
                <h3>MINHA CONTA</h3>
                <ul>
                    <li><Link to="/login">Fazer Login</Link></li>
                    <li><Link to="/register">Criar Conta</Link></li>
                </ul>
            </div>
            <div>
                <h3>CONTATO</h3>
                <div>
                    <p>SAC WHATSAPP (54) 99638-7583</p>
                    <p>sac@fanaticotorcedor.net</p>
                    <p>10:00 - 18:00, Segunda - Sexta</p>
                </div>
            </div>
        </div>
        <div style={{background: "#f1f1f1"}}>
            <div style={{padding: "50px", display: "flex", alignItems: "center", flexDirection: 'column', alignContent: 'center'}}>
                <div>
                    <p>© 2020 Fanático Torcedor. Todos os direitos reservados.</p>
                </div>
                <div>
                    Cartões aceitos
                </div>
            </div>
        </div>
    </div>
  )
}
