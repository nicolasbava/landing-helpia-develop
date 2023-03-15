import React, {forwardRef} from "react"
import Grid, {GridProps} from "@mui/material/Grid";
import useMail from "@/hooks/use-mail";
import ContactForm, {ContactFormFields} from "@/components/ContactForm";
import {Box, styled, Typography, Stack} from "@mui/material";
import {BoxProps} from "@mui/material/Box";
import {toast} from "react-toastify";
import StyledTitleElement from "../StyledTitleElement";


const ImageElement = styled('img')(() => ({
    margin: 'auto',
    maxWidth: '37vw'
}));


export const ContactContainer = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        background: '#F5F5F5',
        paddingBottom: '10vh',
        paddingTop: '7vh',
        margin: 'auto',
        paddingInline: '5vw',
        
    },
}));


const StyledStack = styled(Stack)(({theme})=> ({
    '&': {
        color: theme.palette.secondary,
        marginBlock: '5vh'
    }
}));


export const Contact = () => {
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
                toast.success(`Enviado correctamente!` )
            }).catch((err) => {
                toast.error(`Lo sentimos, no pudimos enviar su mensaje` )
                setSending(false)
            })
        }

    return (
        <StyledStack id='contact'>
            <Typography variant='h4' sx={{textAlign:'center', fontSize: '1.5rem', fontWeight: '500',}} id='contact'>
                Contacto
            </Typography>
            <Grid  sx={{ justifyContent: 'space-between', maxWidth: {xs: '450px', md: '100vw'}, marginInline: 'auto' }} container mt={5}>
                
                <Grid item xs={12} md={5} ml={{xs: 0, md: '5vw'}}>
                    <Typography mb={2} sx={{fontWeight: '600', fontSize: '1.2rem'}}>¿Alguna duda?</Typography>
                    <Typography variant='body1' mb={3} sx={{fontSize: '0.9rem'}}>Completa el formulario con tus consultas y uno de nuestros representantes se pondrá en contacto.</Typography>
                    <ContactForm sending={sending} submitAction={handleSend} formId={formId}/>  
                </Grid>
                <Grid item xs={12} md={5} sx={{display: {xs: 'none', md: 'block'}}}>
                        <ImageElement src={'https://statics.helpia.com/landing/contact-img.png'} height='auto' width='auto' alt="Persona escribiendo en una computadora" />
                </Grid>
            </Grid>
        </StyledStack>
    )

};


