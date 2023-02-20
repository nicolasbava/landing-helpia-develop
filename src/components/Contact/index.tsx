import React, {forwardRef} from "react"
import Grid, {GridProps} from "@mui/material/Grid";
import useMail from "@/hooks/use-mail";
import ContactForm, {ContactFormFields} from "@/components/ContactForm";
import {Box, styled, Typography} from "@mui/material";
import {BoxProps} from "@mui/material/Box";



export const ContactContainer = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        backgroundImage: `url("https://statics.helpia.com/landing/Group-8-1-scaled.jpg")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "100%",
    },
}))

const Contact = forwardRef<any, Pick<GridProps, "sx">>((props, ref)=>{
        const formId = "contact-form"
        const {sendContactMail} = useMail()
        const [sending, setSending] = React.useState<boolean>(false)
        const handleSend = ({phone, name, message, email}: ContactFormFields) => {
            setSending(true)
            sendContactMail({
                email,
                message,
                phone,
                name
            }).then(() => {
                setSending(false)
            }).catch((err) => {

                setSending(false)
            })
        }

   return (<Grid container ref={ref}  {...props} >
       <Grid item xs={12}></Grid>
       <Grid item xs={12} md={5}>
           <Box sx={{p: {xs: 0, md:2}, mb: 5}}>
               <Typography sx={{fontWeight: "bold", mb: 4}}>¿Alguna duda?</Typography>
               <Typography variant="h3">Escribinos cuando quieras</Typography>
           </Box>
       </Grid>
       <Grid item xs={12} md={7}>
           <Box sx={{p: {xs: 0, md:2}, width: {xs: "100%", md: "90%", lg: "75%"}}}>
               <ContactForm sending={sending} submitAction={handleSend} formId={formId}/>
           </Box>
       </Grid>


    </Grid>)
}
)
Contact.displayName = "Contact";
export default Contact