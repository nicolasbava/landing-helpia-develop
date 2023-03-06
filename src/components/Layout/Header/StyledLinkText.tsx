import {styled} from "@mui/material";
import Typography, {TypographyProps} from "@mui/material/Typography";

const StyledLinkText = styled(Typography)<TypographyProps>(({ theme  }) => ({
    "&.MuiTypography-root": {
        color: theme.palette.text.disabled,
        fontSize: "12px",
        width: "100%",
        fontWeight: "bold",
        transition: "0.5s",
        "&:hover":{
            color :theme.palette.primary.light
        }
    },
}))
export const StyledLinkTextMarked = styled(Typography)<TypographyProps>(({ theme,  }) => ({
    "&.MuiTypography-root": {
        color: "#fff",
        fontSize: "12px",
        width: "100%",
        background: theme.palette.primary.dark ,
        padding:  "8px 16px" ,
        borderRadius:  "21px" ,
        fontWeight: "bold",
        transition: "0.5s",
        "&:hover":{
            color :theme.palette.primary.light
        }
    },
}))

export default StyledLinkText