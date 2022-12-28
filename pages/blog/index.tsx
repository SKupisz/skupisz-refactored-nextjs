import React from "react";
import { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";

import { BlogCard, BlogCardDescription, BlogCardFilter, BlogCardHeader, BlogHeader, BlogWrapper } from "styled/components/blog/blogMainPage";
import blogArticles from "data/blog";
import path from "path";

interface Props{
    articles: object[]
}

const Blog:NextPage<Props> = (props) => {

    const { articles } = props;

    return <>
        <Head>
            <title>Blog - Simon G. Kupisz</title>
        </Head>
        <BlogHeader className="block-center">
            Blog
        </BlogHeader>
        <BlogWrapper className="block-center">
            {articles.map((elem) => <BlogCard style={{backgroundImage: `url(${elem.imagePath})`,
            backgroundPositionX: "center", backgroundSize: "cover"}}>
                <BlogCardFilter className="block-center">
                    <BlogCardHeader className="block-center">
                        {elem.title}
                    </BlogCardHeader>
                    <BlogCardDescription className="block-center">
                        {elem.description}
                    </BlogCardDescription>
                </BlogCardFilter>
            </BlogCard>)}
        </BlogWrapper>
    </>
};

export const getStaticProps:GetStaticProps = async() => {

    const articlesForShow = [...blogArticles];
    articlesForShow.forEach((elem) => {
        if(elem.imagePath.indexOf("assets") === -1) elem.imagePath = "assets/" + elem.imagePath;
    });

    return {
        props: {
            articles: articlesForShow,
        },
        revalidate: 10,
    }
}

export default Blog;
