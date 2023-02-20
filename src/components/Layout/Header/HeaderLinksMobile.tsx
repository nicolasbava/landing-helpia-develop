import React from "react";

import Stack from "@mui/material/Stack";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {useAppContext} from "@/context/app";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import {Drawer, DrawerProps, styled} from "@mui/material";
import Divider from "@mui/material/Divider";
import StyledLinkText, {StyledLinkTextMarked} from "@/components/Layout/Header/StyledLinkText";


const StyledMenuDrawer = styled(Drawer)<DrawerProps & { special?: boolean }>(({theme}) => ({
    "&.MuiDrawer-root": {
        // background:  `rgba(108, 108, 170, 0.89)`

        ".MuiDrawer-paper": {
            padding: "16px",
            minWidth: "256px",
            background: theme.palette.secondary.dark,
            opacity: "0.8",
            color: "#fff"
        }
    },
}))

const HeaderLinksMobile: React.FC = () => {
    const {menu: {items, open}, toggleMenu} = useAppContext()
    return (<>
        <MenuIcon fontSize="large" sx={{color: "#fff", cursor: 'pointer'}} onClick={() => toggleMenu(true)}/>

        <StyledMenuDrawer sx={{p: 2}} anchor="right" open={open} onClose={() => toggleMenu(false)}>
            <Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <CloseIcon fontSize="large" sx={{cursor: 'pointer'}} onClick={() => toggleMenu(false)}/>

                </Stack>
                <Divider sx={{background: "#fff", my: 2}}/>
                <Stack>
                    {
                        items.map((menu, key) => {

                            return (<MenuItem key={key} sx={{my: 0.2, a: {textDecoration: "none"}}}>
                                <Link href={menu.path} target={menu.external ? "_blank" : undefined}>
                                    {menu.id === "plans" && <StyledLinkTextMarked>{menu.label}</StyledLinkTextMarked>}
                                    {menu.id !== "plans" && <StyledLinkText>{menu.label}</StyledLinkText>}
                                </Link>
                            </MenuItem>)
                        })
                    }
                </Stack>
            </Stack>

        </StyledMenuDrawer>
    </>)
}
export default HeaderLinksMobile