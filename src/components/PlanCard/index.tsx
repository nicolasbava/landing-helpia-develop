import React from "react"
import {Card, CardActions, CardContent, CardProps, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ApiPlanType} from "@/types/api";
import Stack from "@mui/material/Stack";
import {numberToPrice} from "@/utility/generic-utility";
import {getPlanCurrency, getPlanFreq} from "@/utility/plan-utility";
import StyledButton from "@/components/StyledButton";


const PlanCardContainer = styled(Card)<CardProps>(({theme}) => ({
    "&.MuiCard-root": {
        background: "#F2F2F2",
        maxWidth: "290px",
        color: theme.palette.secondary.main,
        wordBreak: "break-word",
        height: "380px",
        display: "flex",
        borderRadius: "0px",
        border: "1px solid #CCCCCC",
        flexDirection: "column",
        padding: "8px",
        transition: "1.2s",
        cursor: "pointer",
        "&:hover": {
            background: "#c6c2c2",

        },

        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}))

type PlanCardProps = {
    plan: ApiPlanType
}
const PlanCard: React.FC<PlanCardProps> = ({plan}) => {
    const handleClick = () => {
        window.open("https://app.helpia.com/auth/signin", "_self")
    }
    return (<PlanCardContainer elevation={2}>
        <CardContent sx={{minHeight: "230px"}}>

            <Typography sx={{fontWeight: "bold" , mb: 1}}>{plan.name}</Typography>

            <Box sx={{display: "flex", height: "60px"}}>
                    <Typography>{getPlanCurrency(plan.currency)}</Typography>
                    <Typography sx={{fontSize: "60px", mt:-2}}>
                        {plan.subscription_base_cost}
                    </Typography>

                    <Typography variant="caption" sx={{fontWeight: 'bold', mt:4}}>+imp</Typography>


            </Box>
            <Typography sx={{
                px:1,
                fontSize: "10px",
                width: "max-content",
                borderRadius: 2,
                fontWeight: 'bold',
                color: "#fff",
                background: "#555555"
            }}>{getPlanFreq(plan.frequence)}</Typography>

            <Box sx={{height: "150px", width: "100%", mt:3, wordBreak: "break-word", overflow: "auto"}}>
                <Typography variant="caption">{plan.description}</Typography>
            </Box>
        </CardContent>

        <CardActions>
            <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
                <StyledButton sx={{width: "150px"}} onClick={handleClick}>Contratar</StyledButton>
            </Stack>
        </CardActions>
    </PlanCardContainer>)
}

export default PlanCard

