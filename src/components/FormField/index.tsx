import React, {forwardRef} from "react"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputLabel, {InputLabelProps} from "@mui/material/InputLabel"
import {styled} from "@mui/material";
import Typography, {TypographyProps} from "@mui/material/Typography";




const StyledInputLabel = styled(InputLabel)<InputLabelProps>(({ theme  }) => ({
    "&.MuiInputLabel-root": {
         fontWeight: "bold",
         fontSize: "12px",
          ".MuiInputLabel-asterisk": {
             color: theme.palette.error.main
          }
    },
}))

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme  }) => ({
    "&.MuiTextField-root": {
         background: "#EDEDED"
    },
}))

const FormField = forwardRef<any, TextFieldProps>(({ className, label, type, size, variant, ...props }, ref) => {
    return (
        <Box>
            {label && (
                <StyledInputLabel sx={{mb:1}} error={props.error} required={props.required} color={props.color}>
                    {label}
                </StyledInputLabel>
            )}
            <StyledTextField
                type={type}
                size={size ? size : "small"}
                variant={variant ? variant : "outlined"}
                label={undefined}
                ref={ref}
                {...props}
            />
        </Box>
    )
})

FormField.displayName = "FormField"
export default FormField
