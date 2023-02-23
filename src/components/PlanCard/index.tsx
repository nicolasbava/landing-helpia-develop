import React from "react"
import {Card, CardActions, CardContent, CardProps, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ApiPlanType} from "@/types/api";
import Stack from "@mui/material/Stack";
import {numberToPrice} from "@/utility/generic-utility";
import {getPlanFreq} from "@/utility/plan-utility";
import StyledButton from "@/components/StyledButton";


const PlanCardContainer = styled(Card)<CardProps>(({theme}) => ({
    "&.MuiCard-root": {
        background: "#F2F2F2",
        maxWidth: "250px",
        color: theme.palette.secondary.main,
        width: "250px",
        wordBreak: "break-word",
        height: "300px",
        display: "flex",
        borderRadius: "16px 0",
        flexDirection: "column",
        padding: "8px",
        transition: "1.2s",
        cursor: "pointer",
        "&:hover": {
            background: "#c6c2c2",

        }
    },
}))

type PlanCardProps = {
    plan: ApiPlanType
}
const PlanCard: React.FC<PlanCardProps> = ({plan}) => {
    const handleClick = () => {
        window.open("https://app.helpia.com/auth/signin", "_self")
    }
    return (<PlanCardContainer elevation={4}>
        <CardContent sx={{minHeight: "230px"}}>
            <Stack direction="row" alignItems="flex-end">
                <Typography
                    variant={'h4'}
                >
                    {numberToPrice(plan.subscription_base_cost)}
                </Typography>
                <Typography variant="caption" sx={{fontWeight: 'bold'}}>+imp</Typography>
            </Stack>
            <Typography variant="caption" sx={{
                px: 2,
                borderRadius: 2,
                fontWeight: 'bold',
                color: "#fff",
                background: "#555555"
            }}>{getPlanFreq(plan.recurrence)}</Typography>

            <Typography sx={{fontWeight: "bold", mt: 1, mb: 2}}>{plan.name}</Typography>
            <Box sx={{height: "100px", width: "100%", wordBreak: "break-word", overflow: "auto"}}>
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

