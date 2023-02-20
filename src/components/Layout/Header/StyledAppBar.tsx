import AppBar, {AppBarProps} from "@mui/material/AppBar";
import {styled} from "@mui/material";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    "&.MuiAppBar-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        height: "80px",
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
    },
}))
export default StyledAppBar