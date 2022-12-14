import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from "@mui/material";

import { NavbarClosingElem, NavbarContainer, NavbarElem, NavbarSection } from "styled/components/main/navbar";

const Navbar:React.FC = () => {

    const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    return <NavbarContainer layout initial={{
        height: isBiggerThanTablet ? "fit-content" : "10vh"
    }} animate={{
        height: isBiggerThanTablet ? "fit-content" : isOpened ? ["10vh","100vh"] : ["100vh","10vh"]
    }}>
        <NavbarSection flexDirection="row" layout initial={{
            height: "fit-content",
            overflow: "hidden"
        }} animate={{
            height: isBiggerThanTablet ? "fit-content" : isOpened ? ["10vh","30vh"] : ["30vh","10vh"]
        }}>
            <NavbarElem>
                Main
            </NavbarElem>
            <NavbarElem>
                Portfolio
            </NavbarElem>
        </NavbarSection>
        <NavbarSection flexDirection="row-reverse" layout initial={{
            height: "fit-content",
            overflow: "hidden"
        }} animate={{
            height: isBiggerThanTablet ? "fit-content" : isOpened ? ["10vh","30vh"] : ["30vh","10vh"]
        }}>
            <NavbarElem>
                Blog
            </NavbarElem>
            <NavbarElem>
                Contact
            </NavbarElem>
        </NavbarSection>
        {
            !isBiggerThanTablet ? <NavbarClosingElem onClick={() => toggleIsOpened(!isOpened)}>
                <CloseIcon style={{
                    color: "inherit",
                    fontSize: "inherit"
                }} />
            </NavbarClosingElem> : null
        }
    </NavbarContainer>
};

export default Navbar;
