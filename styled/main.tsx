import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const LightTheme = {
    navbarTheme: "#D6D6D6",
    mainTheme: "#E9E9E9",
    navbarElemBackground: "rgba(200,200,200,.1)",
    fonts: {
        regular: "Oswald, sans-serif",
        fancy: "Rubik Vinyl, cursive",
    },
    colors: {
        regular: "#82C3EC",
        regularDarker: "#82C3EC",
        consoleBackground: "rgba(90,90,90,.9)",
        consoleColor: "#1C6348",
    },
    textShadow: "3px 3px 4px rgba(0,0,0,.15)",
};

export const DarkTheme = {
    navbarTheme: "#001111",
    mainTheme: "#001111",
    navbarElemBackground: "rgba(50,50,50,.2)",
    fonts: {
        regular: "Oswald, sans-serif",
        fancy: "Rubik Vinyl, cursive",
    },
    colors: {
        regular: "#82C3EC",
        regularDarker: "#207A9A",
        consoleBackground: "rgba(90,90,90,.2)",
        consoleColor: "#05AB45",
    },
    textShadow: "3px 3px 4px rgba(0,0,0,.15)",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: #001111;
    }

    .block-center{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`
export const ContentContainer = styled.main`
    position: relative;
    top: 15vh;
    width: 100%;
    overflow-x: hidden;
`;
