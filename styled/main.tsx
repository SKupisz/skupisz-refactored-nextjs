import { createGlobalStyle } from "styled-components";

export const LightTheme = {
    navbarTheme: "#D6D6D6",
    mainTheme: "#E9E9E9",
    navbarElemBackground: "rgba(200,200,200,.1)",
    fonts: {
        regular: "Oswald, sans-serif",
    },
    colors: {
        regular: "#82C3EC"
    }
};

export const DarkTheme = {
    navbarTheme: "#001111",
    mainTheme: "#001111",
    navbarElemBackground: "rgba(50,50,50,.2)",
    fonts: {
        regular: "Oswald, sans-serif",
    },
    colors: {
        regular: "#82C3EC"
    }
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.mainTheme};
    }
`

