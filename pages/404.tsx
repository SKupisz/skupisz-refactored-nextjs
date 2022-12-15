import React from "react";
import { NextPage } from "next";
import { ErrorPageContainer, ErrorPageContent, ErrorPageHeader } from "styled/components/error/error";
import Head from "next/head";

const Error404Page:NextPage = () => {
    return <>
        <Head>
            <title>Page not found - Simon G. Kupisz</title>
        </Head>
        <ErrorPageContainer className="block-center">
            <ErrorPageHeader className="block-center">
                Oops!...
            </ErrorPageHeader>
            <ErrorPageContent className="block-center">
                I'm afraid the subpage you are looking for does not exist. Please check your internet connection and if your internet connection is working as suspected.
            </ErrorPageContent>
        </ErrorPageContainer>
    </>
};

export default Error404Page;