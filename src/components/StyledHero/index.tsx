import { Stack, StackProps, styled } from "@mui/material";

export const StyledHero = styled(Stack)<StackProps>(({theme}) => ({
    background: theme.palette.secondary.dark,
    minHeight: '80vh',
    color: 'white',
    paddingInline: '10vw',
    paddingBlock: '10vh',
    '@media (min-width: 600px)': {
        paddingBlock: '5vh'
    }
}))
