import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { PortfolioConsoleCommandDisplay, PortfolioConsoleCommandInput, 
    PortfolioConsoleCommandLineWrapper, PortfolioConsoleContainer, 
    PortfolioConsoleLine, PortfolioHeader } from "styled/components/portfolio/portfolio";
import { useMediaQuery } from "@mui/material";
import { checkIfTheCommandExists, processTheLatestCommand } from "util/portfolio";
import { DarkTheme } from "styled/main";

const Portfolio:NextPage = () => {

    const isBiggerThanLaptop:boolean = useMediaQuery("(min-width: 1024px)");
    const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
    const isBiggerThanPhone:boolean = useMediaQuery("(min-width: 425px)");

    const commandsRef = React.useRef<HTMLDivElement>(null);

    const [commands, setCommands] = useState<string[]>([
        "> Portfolio console...",
        "> Use the command input to know more about me...",
        "> For more informations type help..."
    ]);

    const [nextCommand, setNextCommand] = useState<string>("");
    const [consoleColor, setConsoleColor] = useState<string>(DarkTheme.colors.consoleColor);

    const processTheCommand = (key: string):void => {
        if(key === "Enter" && nextCommand.length > 0){
            const commandsOperand:string[] = [...commands];
            const commandOperand:string = "> " + nextCommand;
            commandsOperand.push(commandOperand);
            if(!checkIfTheCommandExists(nextCommand)){
                commandsOperand.push(`Command ${nextCommand.split(" ")[0]} not found`);
            }
            setCommands(commandsOperand);
            processTheLatestCommand(nextCommand, commandsOperand, setCommands, consoleColor, setConsoleColor);
            setNextCommand("");
        }
    };

    const scrollToBottom = () => {
        commandsRef.current?.scrollTo({
            top: commandsRef.current?.scrollHeight,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        scrollToBottom();
    }, [commands])

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
        }} style={{
            color: consoleColor,
        }}>
            <PortfolioConsoleCommandDisplay className="block-center" ref={commandsRef}>
                {
                    commands.map((command: string) => <PortfolioConsoleLine className="block-center"
                        style={{
                            marginBottom: command.length === 0 ? "6vh" : ""
                        }}>
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
