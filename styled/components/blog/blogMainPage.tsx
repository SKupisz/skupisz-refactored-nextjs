import styled from "styled-components";

export const BlogHeader = styled.header`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 3.6em;
    letter-spacing: 0.05em;
    font-family: ${(props) => props.theme.fonts.fancy};
    color: ${(props) => props.theme.colors.regular};
    margin-bottom: 4vh;

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 4.2em;
    }
`;

export const BlogWrapper = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.regularDarker};
    text-shadow: ${(props) => props.theme.textShadow};

    & > a {
        color: inherit;
        text-decoration: none;
    }
`;

export const BlogCard = styled.div`
    width: calc(90% - 10px);
    height: calc(60vh - 10px);
    border-radius: 10px;
    text-align: center;
    box-shadow: ${(props) => props.theme.textShadow};
    overflow-y: auto;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    transition: filter 0.4s;
    cursor: pointer;
    background: rgba(240,240,240,.2);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 650px){
        width: calc(60% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 1024px){
        width: calc(45% - 30px);
    }
`;

export const BlogCardFilter = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 10px;
    padding: 10px;
    background: rgba(25,25,25,.8);
`;

export const BlogCardHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.06em;
    margin-bottom: 4vh;
    padding-top: 3vh;

    @media screen and (min-width: 768px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 2.1em;
    }
`;

export const BlogCardDescription = styled.div`
    width: calc(95% - 10px);
    min-height: calc(30vh - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.05em;

    @media screen and (min-width: 375px){
        width: calc(85% - 10px);
        font-size: 1.3em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 1440px){
        width: calc(80% - 10px);
        font-size: 1.4em;
    }
`;

export const BlogCardDate = styled.span`
    width: fit-content;
    height: fit-content;
    font-size: 0.9em;
    letter-spacing: 0.04em;
    color: inherit;
`;
