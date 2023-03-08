import React from "react";

import Stack  from "@mui/material/Stack";
import {useAppContext} from "@/context/app";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import StyledLinkText  from "@/components/Layout/Header/StyledLinkText";
import {Button} from "@mui/material";

 const HeaderLinks: React.FC = ()=>{
 const {menu: {items}} =  useAppContext()
    return(
        <Stack direction="row" alignItems="center" sx={{a: {textDecoration: "none"}}}>
        <Stack direction={"row"} alignItems={"center"} >
            {items.map((menu, key)=>{



                return(   
                <MenuItem key={key} >
                    <Link href={menu.path} target={menu.external ? "_blank" : undefined}>
                        <StyledLinkText>{menu.label}</StyledLinkText>
                    </Link>
                </MenuItem>
                )
            })}

        </Stack>

           <Stack gap={1} direction="row" sx={{ml:1}} >
               <Link href="https://app.helpia.com/auth/signin" target={"_blank"}>
                   <Button size="small" variant="contained" sx={{backgroundColor: "primary.light", width: "125px"}}>INICIAR SESSIÓN</Button>

               </Link>

               <Link href="https://app.helpia.com/auth/signup" target={"_blank"}>
                   <Button size="small" variant="outlined" sx={{color: "primary.light", width: "125px"}}>REGÍSTRATE</Button>
               </Link>

           </Stack>

 </Stack>
 )
}
export default HeaderLinks