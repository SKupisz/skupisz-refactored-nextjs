import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { BlogArticleHeader, BlogArticleParagraph, BlogImageContainer, BlogImageTitle, BlogImageWrapper, BlogLink, BlogLinksContainer } from "styled/components/blog/blogArticles";

import blogArticles from "data/blog";

interface BlogPostInterface{
    title: string,
    paragraphs: any[],
}

const BlogPost:NextPage<BlogPostInterface> = (props) => {

    const { title, paragraphs } = props;

    return <>
        <Head>
            <title>{title} - Simon G. Kupisz</title>
        </Head>
        <BlogArticleHeader className="block-center">
            {title}
        </BlogArticleHeader>
        {
            paragraphs.map((elem) => elem.type === "p" ? <BlogArticleParagraph className="block-center">
                {elem.content}
            </BlogArticleParagraph> : elem.type === "image" ? <BlogImageContainer className="block-center">
                <BlogImageWrapper className="block-center">
                    <Image alt={elem.title} src={`/assets/${elem.src}`} fill style={{
                        objectFit: "contain",
                    }} className="block-center"/> 
                </BlogImageWrapper>
                <BlogImageTitle className="block-center">
                    {elem.title}
                </BlogImageTitle>
            </BlogImageContainer> : elem.type === "blogLinking" ? <BlogLinksContainer className="block-center">
                {
                    elem.links.map((link:{
                        to: string,
                        content: string
                    }) => <Link href={link.to}>
                        <BlogLink className="block-center">
                            {link.content}
                        </BlogLink>
                    </Link>)
                }
            </BlogLinksContainer> : null)
        }
    </>
};

export const getStaticProps:GetStaticProps = async(context) => {

    const blogId = context.params?.blogId;
    const isBlogId = !!blogId;

    if(isBlogId){

        const articleSearch = blogArticles.filter((elem) => elem.id === blogId);
        if(articleSearch.length === 0) 
            return {
                props: {
                    title: "No article found",
                    paragraphs: []
                },
                notFound: true
            }
        
        const displayedArticle = articleSearch[0];

        const Data = JSON.parse(JSON.stringify(require(`../../data/blogs/${displayedArticle.id}.ts`)));

        return {
            props: {
                title: displayedArticle.title,
                paragraphs: Data.default.content
            }
        }
    }


    return {
        props: {
            title: "No article found",
            paragraphs: []
        }
    }
    

}

export const getStaticPaths:GetStaticPaths = async() => {
    return{
        paths: blogArticles.map((elem) => ({
            params: {
                blogId: elem.id
            }
        })),
        fallback: false,
    }
}

export default BlogPost;