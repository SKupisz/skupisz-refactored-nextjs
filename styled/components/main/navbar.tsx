import { motion } from "framer-motion";
import styled from "styled-components";

interface NavbarSectionInterface{
    flexDirection: string
}

export const NavbarContainer = styled(motion.nav)`
    width: 100%;
    padding: 5px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.navbarTheme};
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.regular};

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const NavbarSection = styled(motion.div)<NavbarSectionInterface>`
    width: calc(80% - 20px);
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    text-align: center;
    margin: 0px auto;

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
        margin: 0px;
        flex-direction: ${(props) => props.flexDirection};
    }
`;

export const NavbarElem = styled.div`
    padding: 0px 40px;
    border-radius: 10px;
    margin: 0px 5px 5px;
    background: ${(props) => props.theme.navbarElemBackground};
    height: 10vh;
    line-height: 10vh;
    font-size: 1.25em;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        margin: 0px 5px;
        font-size: 1.5em;
    }
`;

export const NavbarClosingElem = styled.div`
    padding: 0px 40px;
    width: fit-content;
    margin: 10px auto 5px;
    background: ${(props) => props.theme.navbarElemBackground};
    height: 10vh;
    line-height: 10vh;
    font-size: 2em;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 20px;

    &:hover{
        filter: brightness(70%);
    }
`;