import {styled} from "@mui/material";
import Icon, {IconProps} from "@mui/material/Icon";

const StyledFooterIcon = styled(Icon)<IconProps>(() => ({
    "&.MuiIcon-root": {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "14px",
        border: '2px solid #fff',
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        transition: "0.5s",
        "&:hover" :{
            background: "#e5dbe7"
        }
    },
}))
export default StyledFooterIcon