import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactWrapper = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.regular};
    text-shadow: ${(props) => props.theme.textShadow};
`;

export const ContactHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.4em;
    letters-spacing: 0.04em;
    margin-bottom: 7vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 2.9em;
    }
`;

export const ContactWaysContainer = styled(motion.div)`
    width: calc(80% - 20px);
    padding: 10px;
    text-align: center;
`;

export const ContactWaysSingleWay = styled.div`
    width: fit-content;
    padding: 20px 40px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 10px;
    font-size: 2.9em;
    cursor: pointer;
    transition: all 0.4s;

    & > a{
        color: inherit;
        text-decoration: none;
        font-size: inherit;
    }

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 3.4em;
    }
`;
