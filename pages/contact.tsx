import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ContactHeader, ContactWaysContainer, ContactWaysSingleWay, ContactWrapper } from "styled/components/contact/contact";

const Contact:NextPage = () => {
    return <>
        <Head>
            <title>Contact - Simon G. Kupisz</title>
        </Head>
        <ContactWrapper className="block-center">
            <ContactHeader className="block-center">
                Contact me
            </ContactHeader>
            <ContactWaysContainer className="block-center" layout initial={{
                marginLeft: "100%"
            }}
            animate={{
                marginLeft: "10%"
            }} transition={{
                duration: 0.4,
                delay: 0.3
            }}>
                <ContactWaysSingleWay>
                    <a href="mailto:granarax@protonmail.com" target="_blank">
                        <MailIcon style={{
                            color: "inherit",
                            fontSize: "inherit"
                        }} />
                    </a>
                </ContactWaysSingleWay>
                <ContactWaysSingleWay>
                    <a href="https://github.com/SKupisz" target="_blank">
                        <GitHubIcon style={{
                            color: "inherit",
                            fontSize: "inherit"
                        }} />
                    </a>
                </ContactWaysSingleWay>
                <ContactWaysSingleWay>
                    <a href="https://twitter.com/granarax" target="_blank">
                        <TwitterIcon style={{
                            color: "inherit",
                            fontSize: "inherit"
                        }} />
                    </a>
                </ContactWaysSingleWay>
                <ContactWaysSingleWay>
                    <a href="https://www.linkedin.com/in/szymon-kupisz-0a8a91193/" target="_blank">
                        <LinkedInIcon style={{
                            color: "inherit",
                            fontSize: "inherit"
                        }} />
                    </a>
                </ContactWaysSingleWay>
            </ContactWaysContainer>
        </ContactWrapper>
    </>
};

export default Contact;
