import React, {forwardRef} from "react"
import {Badge, BadgeProps, Card, CardActions, CardContent, CardProps, styled, Typography} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";
import {ApiPlanDescription, ApiPlanType} from "@/types/api";
import Stack from "@mui/material/Stack";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
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


const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
        right: 46,
        top: 42,
    },
}));

const StyledTag = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.dark,
        width: "110px",
        height: "32px",
        fontWeight: "bold",
        borderRadius: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}))

const PopularTag = forwardRef<any, BoxProps>((props, ref) => {

    return (
        <Box sx={{width: "100%"}}>
            <StyledTag ref={ref}>
                Destacado
            </StyledTag>
            <ArrowLeftIcon fontSize="large" sx={{color: "primary.dark",
                marginLeft: "77.9%",
                marginTop: "-14.5px",
                transform: "rotate(45deg)" }} />
        </Box>
    )
})

PopularTag.displayName = "PopularTag"


type PlanCardProps = {
    plan: ApiPlanType
}
const PlanCard: React.FC<PlanCardProps> = ({plan}) => {


    const hasPopular = (plan.description as ApiPlanDescription).popular
    const description = (plan.description as ApiPlanDescription).description
    const handleClick = () => {
        window.open("https://app.helpia.com/auth/signin", "_self")
    }
    return (<StyledBadge badgeContent={ hasPopular ? <PopularTag/> : null}>

            <PlanCardContainer elevation={2}>
                <CardContent sx={{minHeight: "230px",}}>
                    <Typography sx={{fontWeight: "bold", my: 2}}>{plan.name}</Typography>
                    <Box sx={{display: "flex", height: "60px"}}>
                        <Typography>{getPlanCurrency(plan.currency)}</Typography>
                        <Typography sx={{fontSize: "60px", mt: -2}}>
                            {plan.subscription_base_cost}
                        </Typography>
                        <Typography variant="caption" sx={{fontWeight: 'bold', mt: 4}}>+imp</Typography>
                    </Box>
                    <Typography sx={{
                        px: 1,
                        fontSize: "10px",
                        width: "max-content",
                        borderRadius: 2,
                        fontWeight: 'bold',
                        color: "#fff",
                        background: "#555555"
                    }}>{getPlanFreq(plan.frequence)}</Typography>

                    <Box sx={{display: "flex", flexDirection: "column", height: "150px", width: "100%", mt: 3, wordBreak: "break-word", overflow: "auto"}}>
                        {Array.from(description ?? []).map((x, i)=>{

                            return(
                                <Typography key={i} variant="caption" sx={{fontWeight: "bold"}}>{`- ${x}`}</Typography>
                            )
                        })}
                    </Box>
                </CardContent>

                <CardActions>
                    <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
                        <StyledButton sx={{width: "150px"}} onClick={handleClick}>Contratar</StyledButton>
                    </Stack>
                </CardActions>
            </PlanCardContainer>
        </StyledBadge>
    )
}

export default PlanCard

