import {Button, ButtonProps, styled} from "@mui/material";

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    "&.MuiButton-root": {
        background: theme.palette.secondary.dark,
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "20px",
    },

    "&.MuiButton-contained.Mui-disabled": {
        background: theme.palette.text.disabled,
    }
}))

export default StyledButton