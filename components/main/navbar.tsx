import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { useMediaQuery } from "@mui/material";

import { NavbarClosingElem, NavbarContainer, NavbarElem, NavbarSection } from "styled/components/main/navbar";
import Link from "next/link";

const Navbar:React.FC = () => {

    const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    return <AnimatePresence>
        <NavbarContainer layout initial={{
        height: "10vh",
        overflow: "hidden",
    }} animate={{
        height: isBiggerThanTablet ? "10vh" : isOpened ? "100vh" : "10vh"
    }} transition={{
        duration: 0.5,
    }}>
        <NavbarSection flexdirection="row" layout initial={{
            height: "0vh",
            overflow: "hidden"
        }} animate={{
            height: isBiggerThanTablet ? "fit-content" : isOpened ? ["10vh","30vh"] : ["30vh","10vh"]
        }}>
            <Link href="/">
                <NavbarElem onClick={() => toggleIsOpened((opened:boolean) => !opened)}>
                    Main
                </NavbarElem>
            </Link>
            <Link href="/portfolio">
                <NavbarElem onClick={() => toggleIsOpened((opened:boolean) => !opened)}>
                    Portfolio
                </NavbarElem>
            </Link>
        </NavbarSection>
        <NavbarSection flexdirection="row-reverse" layout initial={{
            height: "0vh",
            overflow: "hidden"
        }} animate={{
            height: isBiggerThanTablet ? "fit-content" : isOpened ? ["10vh","30vh"] : ["30vh","10vh"]
        }}>
            <Link href="/contact">
                <NavbarElem onClick={() => toggleIsOpened((opened:boolean) => !opened)}>
                    Contact
                </NavbarElem>
            </Link>
            <Link href="/blog">
                <NavbarElem onClick={() => toggleIsOpened((opened:boolean) => !opened)}>
                    Blog
                </NavbarElem>
            </Link>
        </NavbarSection>
        {
            !isBiggerThanTablet ? <NavbarClosingElem onClick={() => toggleIsOpened((opened:boolean) => !opened)}>
                {isOpened ? <CloseIcon style={{
                    color: "inherit",
                    fontSize: "inherit"
                }} /> : <KeyboardDoubleArrowDownIcon style={{
                    color: "inherit",
                    fontSize: "inherit",
                }} />}
            </NavbarClosingElem> : null
        }
    </NavbarContainer>
    </AnimatePresence>
};

export default Navbar;
