import React, {forwardRef} from 'react';
import {AppBarProps} from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Link from 'next/link';

import Logo from "@/components/Logo";
import StyledAppBar from "@/components/Layout/Header/StyledAppBar";
import Stack from "@mui/material/Stack";
import HeaderLinks from "@/components/Layout/Header/HeaderLinks";
import HeaderLinksMobile from "@/components/Layout/Header/HeaderLinksMobile";
import {useScrollTrigger} from "@mui/material";


type HideOnScrollProps = {
    window?: () => Window;
    children: any;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({children, window}: HideOnScrollProps) => {

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger} >
            {children}
        </Slide>
    );
}

const Header = forwardRef<any, Omit<AppBarProps, "position">>((props, ref) => {
    return (<HideOnScroll>
        <StyledAppBar ref={ref} position="sticky" {...props} >
            <Link href='/'>
                <Logo style={{width: '100%', marginTop: '8px', minWidth: '120px'}} alt="Helpia Logo" height={50} width={140}/>
            </Link>
            <Stack sx={{ml: {xs: 2, md: 4, lg: 16}, display: {xs: "none", md: "flex"}}}>
                <HeaderLinks/>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" sx={{width: "100%", display: {xs: "flex", md: "none"}}}>
                <HeaderLinksMobile/>
            </Stack>
        </StyledAppBar>
    </HideOnScroll>)
})

Header.displayName = "Header";

export default Header;
