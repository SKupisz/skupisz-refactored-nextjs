import styled from "styled-components";

export const BlogArticleHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fonts.fancy};
    margin-bottom: 4vh;
    color: ${(props) => props.theme.colors.regular};

    @media screen and (min-width: 375px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 425px){
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 3.4em;
    }
`;

export const BlogArticleParagraph = styled.p`
    width: calc(100% - 20px);
    text-indent: 0em;
    text-align: center;
    font-size: 1.05em;
    letter-spacing: 0.05em;
    line-height: 1.15em;
    color: ${(props) => props.theme.colors.regularDarker};
    font-family: ${(props) => props.theme.fonts.regular};
    margin-bottom: 5vh;

    @media screen and (min-width: 375px){
        font-size: 1.25em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        text-indent: 0.5em;
        text-align: left;
        font-size: 1.45em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 1440px){
        width: calc(70% - 20px);
    }
`;

export const BlogImageContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    margin-bottom: 4vh;

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const BlogImageWrapper = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    height: calc(40vh - 20px);

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        height: calc(50vh - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }
`;

export const BlogImageTitle = styled.header`
    width: fit-content;
    font-size: 1em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.colors.regularDarker};
    font-family: ${(props) => props.theme.fonts.regular};

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;

export const BlogLinksContainer = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.regularDarker};

    & > a {
        text-decoration: none;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
    }
`;

export const BlogLink = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    border-radius: 10px;
    background: rgba(25,25,25,.5);
    margin-bottom: 2vh;
    color: ${(props) => props.theme.colors.regularDarker};
    font-size: 1.05em;
    letter-spacing: 0.05em;
    text-decoration: none;

    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
        font-size: 1.7em;
    }
`;
