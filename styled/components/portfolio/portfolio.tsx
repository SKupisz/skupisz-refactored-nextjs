import { motion } from "framer-motion";
import styled from "styled-components";

export const PortfolioHeader = styled(motion.header)`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.05em;
    font-family: ${(props) => props.theme.fonts.fancy};
    color: ${(props) => props.theme.colors.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 6vh;

    @media screen and (min-width: 375px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 425px){
        font-size: 2.2em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
        font-size: 3.2em;
    }
`;

export const PortfolioConsoleContainer = styled(motion.section)`
    width: calc(98% - 22px);
    height: calc(50vh - 22px);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.regularDarker};
    box-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 5vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 22px);
        height: calc(60vh - 22px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 22px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }
`;

export const PortfolioConsoleCommandDisplay = styled.div`
    width: calc(100% - 10px);
    height: calc(38vh - 10px);
    padding: 5px;
    overflow-Y: scroll;

    @media screen and (min-width: 425px){
        height: calc(48vh - 10px);
    }
`;

export const PortfolioConsoleCommandLineWrapper = styled.div`
    width: calc(100% - 10px);
    height: calc(10vh - 10px);
    padding: 5px;
    text-align: center;
`;

export const PortfolioConsoleLine = styled.div`
    font-family: ${(props) => props.theme.fonts.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    font-size: 1em;
    margin-bottom: 1vh;
    color: inherit;
    text-align: left;
    text-indent: 0.5em;

    @media screen and (min-width: 425px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.4em;
    }
`;

export const PortfolioConsoleCommandInput = styled.input`
    width: calc(95% - 20px);
    height: calc(8vh - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 1.2em;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.consoleColor};
    text-shadow: ${(props) => props.theme.textShadow};
    letter-spacing: 0.04em;
    text-indent: 0.5em;
    box-shadow: ${(props) => props.theme.textShadow};
    background: ${(props) => props.theme.colors.consoleBackground};

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.45em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.6em;
    }
`;
