import styled from "styled-components";
import { motion } from "framer-motion";

export const WelcomeHeader = styled(motion.header)`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fancy};
    font-size: 1.9em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.colors.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    background: linear-gradient(135deg, ${(props) => props.theme.colors.regular} 20%, #05ab45 40%, #1c6348 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 6vh;

    @media screen and (min-width: 425px){
        font-size: 2.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 3.6em;
    }

    @media screen and (min-width: 1024px){
        font-size: 4.3em;
    }

    @media screen and (min-width: 1440px){
        font-size: 5.2em;
    }
`;