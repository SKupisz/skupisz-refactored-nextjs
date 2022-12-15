import styled from "styled-components";

export const ErrorPageContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.regular};
    text-shadow: ${(props) => props.theme.textShadow};

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }
`;

export const ErrorPageHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.7em;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fonts.fancy};
    margin-bottom: 4vh;

    @media screen and (min-width: 768px){
        font-size: 3.4em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 3.8em;
    }
`;

export const ErrorPageContent = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.03em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.9em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 2.2em;
    }
`;
