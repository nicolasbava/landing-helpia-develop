import React, {forwardRef} from "react"
import {Badge, BadgeProps, Button, Card, CardActions, CardContent, CardProps, styled, Typography} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";
import {ApiPlanDescription, ApiPlanType} from "@/types/api";
import Stack from "@mui/material/Stack";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {getPlanCurrency} from "@/utility/plan-utility";
import CircleIcon from '@mui/icons-material/Circle';

const PlanCardContainer = styled(Card)<CardProps & { popular: boolean }>(({theme, popular}) => ({
    "&.MuiCard-root": {
        background: popular ? theme.palette.primary.light : "#F2F2F2",
        width: "380px",
        color: "#000",
        wordBreak: "break-word",
        height: "405px",
        display: "flex",
        borderRadius: "16px",
        border: "2px solid #000",
        flexDirection: "column",
        padding: "16px",
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
        top: 80,
    },
}));

const StyledTag = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: '#e7e3e3',
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
                RECOMENDADO
            </StyledTag>
            <ArrowLeftIcon fontSize="large" sx={{
                color: "text.disabled",
                marginLeft: "77.9%",
                marginTop: "-14.5px",
                transform: "rotate(45deg)"
            }}/>
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
    return (<StyledBadge badgeContent={hasPopular ? <PopularTag/> : null}>

            <PlanCardContainer elevation={2} popular={hasPopular}>
                <CardContent sx={{minHeight: "230px",}}>
                    <Typography variant="h6" sx={{
                        color: hasPopular ? "inherit" : "primary.dark",
                        fontWeight: "bold", mt: 4, mb: 2}}>{plan.name}</Typography>
                    <Box sx={{display: "flex", height: "60px"}}>
                        <Typography>{getPlanCurrency(plan.currency)}</Typography>
                        <Typography sx={{fontSize: "60px", mt: -2}}>
                            {plan.subscription_base_cost.toFixed(2)}
                        </Typography>
                        <Typography variant="caption" sx={{fontWeight: 'bold', mt: 4}}>+imp</Typography>
                    </Box>
                    {/*<Typography sx={{
                        px: 1,
                        fontSize: "10px",
                        width: "max-content",
                        borderRadius: 2,
                        fontWeight: 'bold',
                        color: "#fff",
                        background: "#555555"
                    }}>{getPlanFreq(plan.frequence)}</Typography>*/}

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "135px",
                        width: "100%",
                        mt: 3,
                        wordBreak: "break-word",
                        overflow: "auto",
                    }}>
                        {Array.from(description ?? []).map((x, i) => {

                            return (
                                <Stack key={i} gap={1} direction="row" alignItems="center">
                                    <CircleIcon sx={{ fontSize: 8, color: hasPopular ?"inherit": "primary.dark"}} />
                                    <Typography variant="caption" sx={{fontWeight: "bold"}}>{x}</Typography>
                                </Stack>
                            )
                        })}
                    </Box>
                </CardContent>

                <CardActions>
                    <Button variant="contained"
                            size="large"
                            sx={{color: hasPopular ? "#fff" : "inherit",
                                backgroundColor: hasPopular ? "secondary.dark" : "primary.dark", fontWeight: "bold", width: "150px"}}
                            onClick={handleClick}>CONTRATAR</Button>
                </CardActions>
            </PlanCardContainer>
        </StyledBadge>
    )
}

export default PlanCard

