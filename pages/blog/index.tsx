import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";

import { BlogCard, BlogCardDescription, BlogCardHeader, BlogHeader, BlogWrapper } from "styled/components/blog/blogMainPage";
import blogArticles from "data/blog";

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
            {articles.map((elem) => <BlogCard>
                <BlogCardHeader className="block-center">
                    {elem.title}
                </BlogCardHeader>
                <BlogCardDescription className="block-center">
                    {elem.description}
                </BlogCardDescription>
            </BlogCard>)}
        </BlogWrapper>
    </>
};

export const getStaticProps:GetStaticProps = async() => {
    return {
        props: {
            articles: blogArticles
        }
    }
}

export default Blog;
