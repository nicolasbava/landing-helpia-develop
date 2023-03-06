import React from "react"
import {styled, Typography} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import useLocalStorage from "@/hooks/use-local-storage";


const FloatPromoContainer = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        maxWidth: "250px",
        position: 'fixed',
        background: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
        bottom: "50%",
        borderRadius: "16px 0",
        opacity: "0.5",
        zIndex: 99,
        right: 0,
        padding: "8px",
        a: {textDecoration: "none"},
        transition: "0.5s",
        "&:hover": {
            opacity: "1",
        }
    },
}))

type FloatPromoStore = {
    closed: boolean
}
const FloatPromo: React.FC = () => {
    const key = "float_promo"
    const {getData, putData} =  useLocalStorage()

    const [show, setShow] = React.useState<boolean>(false)

    React.useEffect(()=>{
        const data = getData<FloatPromoStore>(key)
        if(!data  || (data && !data.closed)){
            setShow(true)
            putData<FloatPromoStore>(key, {closed: false})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleClose = ()=>{
        putData<FloatPromoStore>(key, {closed: true})
        setShow(false)
    }


    if(!show){
        return null;
    }
    return (<FloatPromoContainer>
        <Stack direction="row" justifyContent="flex-end">

        <CloseIcon fontSize="small" sx={{cursor: "pointer"}} onClick={handleClose} />
        </Stack>
        <Link href={"https://app.helpia.com/auth/signin"} target="_blank">
            <Typography variant="caption" sx={{fontWeight: "bold"}}>Súmate  a Helpia y recibe  60 días gratis de servicio</Typography>
        </Link>
    </FloatPromoContainer>)
}

export default FloatPromo