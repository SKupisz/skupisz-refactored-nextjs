import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { PortfolioConsoleCommandDisplay, PortfolioConsoleCommandInput, PortfolioConsoleCommandLineWrapper, PortfolioConsoleContainer, PortfolioConsoleLine, PortfolioHeader } from "styled/components/portfolio/portfolio";
import { useMediaQuery } from "@mui/material";

const Portfolio:NextPage = () => {

    const isBiggerThanLaptop:boolean = useMediaQuery("(min-width: 1024px)");
    const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
    const isBiggerThanPhone:boolean = useMediaQuery("(min-width: 425px)");

    const [commands, setCommands] = useState<string[]>([
        "> Portfolio console...",
        "> Use the command input to know more about me...",
        "> For more informations type help..."
    ]);

    const [nextCommand, setNextCommand] = useState<string>("");

    const processTheCommand = (key: string):void => {
        if(key === "Enter" && nextCommand.length > 0){
            setNextCommand("");
        }
    };

    return <>
        <Head>
            <title>Portfolio - Simon G. Kupisz</title>
        </Head>
        <PortfolioHeader className="block-center" layout
        initial={{
            marginTop: "-30vh"
        }} animate={{
            marginTop: "2vh"
        }} transition={{
            duration: 0.55,
            delay: 0.0
        }}>
            Some of my career's story...
        </PortfolioHeader>
        <PortfolioConsoleContainer className="block-center" layout
        initial={{
            marginLeft: "100%"
        }} animate={{
            marginLeft: isBiggerThanLaptop ? "20%" : isBiggerThanTablet ? "15%" : isBiggerThanPhone ? "5%" : "1%" 
        }} transition={{
            duration: 0.25,
            delay: 0.4
        }}>
            <PortfolioConsoleCommandDisplay className="block-center">
                {
                    commands.map((command: string) => <PortfolioConsoleLine className="block-center">
                        {command}
                    </PortfolioConsoleLine>)
                }
            </PortfolioConsoleCommandDisplay>
            <PortfolioConsoleCommandLineWrapper className="block-center">
                <PortfolioConsoleCommandInput type="input" 
                    placeholder="Enter the command..."
                    value={nextCommand}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNextCommand(event.currentTarget.value)} 
                    onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => processTheCommand(event.key)}/>
            </PortfolioConsoleCommandLineWrapper>
        </PortfolioConsoleContainer>
    </>
};

export default Portfolio;
