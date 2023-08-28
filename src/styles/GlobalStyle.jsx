import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        /* font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace; */
        font-family: 'Inter', sans-serif;
        font-family: 'Oswald', sans-serif;
    }

    a{
        text-decoration: none;
        color: white;
    }

    /* Estilos para a barra de rolagem */
    ::-webkit-scrollbar {
        width: 10px; /* Largura da barra de rolagem */
    }

    /* Estilos para o "trilho" da barra de rolagem (a área cinza) */
    ::-webkit-scrollbar-track {
        background-color: #fff; /* Cor de fundo do trilho */
    }

    /* Estilos para a "alça" da barra de rolagem (a parte que você arrasta) */
    ::-webkit-scrollbar-thumb {
        background-color: #f82e56; /* Cor da alça */
        height: 103px;
    }

`

export default GlobalStyle;