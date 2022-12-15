import styled from "styled-components";
import { motion } from "framer-motion";

export const WelcomePageSegment = styled.section`
    width: 100%;
    min-height: 90vh;
    height: fit-content;
    color: ${(props) => props.theme.colors.regular};
    font-family: ${(props) => props.theme.fonts.regular};
    text-shadow: ${(props) => props.theme.textShadow};
`;

export const WelcomeHeader = styled(motion.header)`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fancy};
    font-size: 1.9em;
    letter-spacing: 0.04em;
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

export const WelcomeShortDescriptionWrapper = styled(motion.section)`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.25em;
    letter-spacing: 0.04em;
    line-height: 1.1em;
    font-family: ${(props) => props.theme.fonts.regular};
    margin-bottom: 6vh;

    @media screen and (min-width: 425px){
        font-size: 1.45em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.7em;
    }
`;

export const WelcomeGoDownButton = styled(motion.button)`
    width: fit-content;
    height: fit-content;
    padding: 20px 40px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.regular};
    font-family: ${(props) => props.theme.fonts.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    font-size: 3.2em;
    background: none;
    border: none;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const WelcomeDescriptionHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.04em;
    margin-bottom: 4vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 2.3em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 2.9em;
    }
`;

export const WelcomeDescriptionContent = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.15em;
    letter-spacing: 0.03em;
    line-height: 1.2em;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.25em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.3em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        line-height: 1.4em;
        font-size: 1.5em;
    }
`;
