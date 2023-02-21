import React from "react"
import {styled, Typography} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";


const FloatPromoContainer = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        maxWidth: "250px",
        position: 'fixed',
        background: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
        bottom: "50%",
        borderRadius: "16px 0",
        opacity: "0.5",
        right: 0,
        padding: "8px",
        a: {textDecoration: "none"},
        transition: "0.5s",
        "&:hover": {
            opacity: "1",
        }
    },
}))

const FloatPromo: React.FC = () => {


    const [show, setShow] = React.useState<boolean>(true)


    if(!show){
        return null;
    }
    return (<FloatPromoContainer>
        <Stack direction="row" justifyContent="flex-end">

        <CloseIcon fontSize="small" sx={{cursor: "pointer"}} onClick={()=>setShow(false)} />
        </Stack>
        <Link href={"https://app.helpia.com/auth/signin"} target="_blank">
            <Typography variant="caption" sx={{fontWeight: "bold"}}>Súmate  a Helpia y recibe  60 días gratis de servicio</Typography>
        </Link>
    </FloatPromoContainer>)
}

export default FloatPromo