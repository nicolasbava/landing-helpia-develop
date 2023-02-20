import {styled} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";


const StyledFooterSection = styled(Box)<BoxProps>(({ theme }) => ({
    '&.MuiBox-root': {
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        a: {
            textDecoration: "none"
        },
        width: "80%",

        [theme.breakpoints.down('lg')]: {
            width: '90%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            alignItems: "center",
            textAlign: "center"
        },
    },
}));
export default StyledFooterSection