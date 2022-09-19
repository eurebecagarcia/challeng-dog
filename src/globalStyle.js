import { createGlobalStyle } from "styled-components";
import image from "./assets/theme.webp";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background-image: url(${image});
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export default GlobalStyle;
