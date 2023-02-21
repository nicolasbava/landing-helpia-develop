import React from "react"
import {styled, Typography} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";


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

const SubscriptionDialog: React.FC = () => {


    const [open, setOpen] = React.useState<boolean>(false)

    if(!open){
        return null;
    }
    return (<Dialog open={open} onClose={()=>setOpen(false)} >

    <Typography>Subscriber</Typography>
    </Dialog>)
}

export default SubscriptionDialog