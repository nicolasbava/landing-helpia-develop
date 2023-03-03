import React from "react";

import Stack  from "@mui/material/Stack";
import {useAppContext} from "@/context/app";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import StyledLinkText, {StyledLinkTextMarked} from "@/components/Layout/Header/StyledLinkText";
 const HeaderLinks: React.FC = ()=>{
 const {menu: {items}} =  useAppContext()
    return(
        <Stack direction={"row"} alignItems={"center"} >
            {items.map((menu, key)=>{
                return(   
                <MenuItem key={key} sx={{a: {textDecoration: "none"}}}>
                    <Link href={menu.path} target={menu.external ? "_blank" : undefined}>
                        {menu.id === "plans" && <StyledLinkTextMarked>{menu.label}</StyledLinkTextMarked>}
                        {menu.id !== "plans" && <StyledLinkText>{menu.label}</StyledLinkText>}
                    </Link>
                </MenuItem>
                )
            })}
    </Stack>)
}
export default HeaderLinks