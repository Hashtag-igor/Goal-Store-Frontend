import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace;
    }

    a{
        text-decoration: none;
        color: white;
    }

`

export default GlobalStyle;