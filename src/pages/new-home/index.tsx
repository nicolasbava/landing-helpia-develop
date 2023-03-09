import React, { useState, useEffect } from "react";
import { Box, Grid, styled, Typography, Stack, StackProps, Button } from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import { BoxProps } from "@mui/material/Box";
import Image from "next/image";
import Contact, { ContactContainer, NewContactContainer, NewContact } from "@/components/Contact";
import { RevealLeft, RevealRight, RevealUp} from "@/components/Reveal";
import HeroSection from "@/components/HeroSection";


import ContactBanner from "@/components/ContactBanner";
import  StyledHeroImg  from "@/components/StyledHeroImg";
import BenefitsSection from "@/components/Benefits";
import Index from "@/components/BenefitItem";
import StyledTitleElement from "@/components/StyledTitleElement";
import { StyledCTAHorizontal } from "@/components/StyledCTAHorizontal";



const HomeSection1Container = styled(Stack)<StackProps>(() => ({
        background: '#D9D9D9',
        backgroundSize: "cover",
        width: "100%",
        minHeight: "90vh",
       
}));


const HomeSection2Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        minHeight: "400px",
        color: "#fff",
        position: 'relative',
        paddingBlock: '12vh',
    },
}))


const HomeSection3Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.primary.light,
        width: "100%",
        color: theme.palette.secondary.dark
    },
}))

export const ImageElementFirst = styled('img')(() => ({
    margin:'auto',
    width: 'min(80vw, 350px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0
    }
}))

export const ImageElementSecond = styled('img')(() => ({
    margin:'auto',
    width: 'min(80vw, 250px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0
    }
}))

export const ImageElementThird = styled('img')(() => ({
    margin:'auto',
    width: 'min(80vw, 220px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0,
    }
}))

export const Title = styled(StyledTitleElement)(() =>({
    color: 'white', 
    '&.MuiTypography-root': {
        fontSize: 'min(10vw, 44px)',
    },
    '@media (min-width: 600px)':{
        width: '60%'
    }    
}));

export const SubTitle = styled(StyledTitleElement)(() =>({
    color: 'white', 
    '&.MuiTypography-root': {
        fontSize: 'min(10vw, 44px)',
    },
    '@media (min-width: 600px)':{
        width: '60%'
    }    
}));

const ImageElement = styled('img')(() => ({


}));




const titleLeft = "¿Qué hacemos?";
const textLeft =
    "Te proporcionamos una plataforma que te ayude a la gestión de pre venta y post venta, minimizando los tiempos de respuesta y masificando tus ingresos.";

const titleCenter = "¿Cómo lo hacemos?";
const textCenter =
    "Te conectamos a la primera plataforma   multicanal, centralizando todos tus contactos en un solo lugar donde serán atendidos por cientos de expertos en atención al cliente.";

const titleRight = "¿Para qué lo hacemos?";
const textRight =
    "Para cambiar la vida de los emprendedores en un solo click. Tu tiempo y tus clientes son nuestra prioridad. Atendelos con Helpia los 365 días del año y sigamos creciendo juntos.";

export default function NewHomePage() {


  return (
    <>
      <PageContainer title={"InicioNuevo"}>
      <PageSection>

        <Grid container sx={{py: {xs: 4, md:2, lg: 1}}} rowSpacing={4} >
            <Grid item xs={12} md={8}>
                <Box sx={{width: {xs: "100%", md: "95%", lg: "90%"}}}>
                    <Typography sx={{color: "primary.dark", fontWeight:"bold", mb:2}}>Atención 24/7</Typography>
                    <Typography variant="h2" sx={{wordBreak: "break-word", mb:4}}>Especialistas
                        en atención al cliente</Typography>

                    <Button size="small" variant="contained" sx={{width: "128px", fontWeight:"bold", backgroundColor: "primary.light"}}>Ver planes</Button>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex",
                    width: "100%", flexDirection: "row", justifyContent: {xs: "flex-start", md: "flex-end"}}} >
                    <HeroSection />
                </Box>
            </Grid>
        </Grid>

        </PageSection>


        <HomeSection2Container>
            <Typography sx={{ fontSize: "30px", fontFamily: "Poppins", color: "#FFFFFF", textAlign: 'center', mb: {xs: '15vh', md: 4}}} >
                La solución para tu Empresa
            </Typography>
            <Grid container sx={{mb: {xs: '20vh'}}}>
                <Grid item xs={12} md={4}>
                    <RevealLeft>
                        <Index
                            src="https://statics.helpia.com/landing/Frente_1-1-422x600.png"
                            title={titleLeft}
                            text={textLeft}
                        />
                    </RevealLeft>
                </Grid>
                <Grid item xs={12} md={4}>
                    <RevealUp>
                        <Index
                            src="https://statics.helpia.com/landing/seccion-2-2.png"
                            title={titleCenter}
                            text={textCenter}
                            cssImage={{ marginTop: "3%", marginBottom: "4%", width: "50%" }}
                        />
                    </RevealUp>
                </Grid>
                <Grid item xs={12} md={4}>

                    <RevealRight>
                        
                         <Index
                            src="https://statics.helpia.com/landing/Lateral.gif"
                            title={titleRight}
                            text={textRight}
                            cssImage={{ marginTop: "16px", marginBottom: "-16px", width: "50%" }}
                        />
                    </RevealRight>
                </Grid>
            </Grid>

            <BenefitsSection />


        </HomeSection2Container>

        <HomeSection3Container>
            {/* <PageSection>
                <Box
                    sx={{
                    width: { xs: "100%", md: "80%" },
                    mt: { xs: 0, md: 8 },
                    textAlign: { xs: "center", md: "left" },
                    }}
                >
                    
                    <Typography>
                    Sumate a Helpia y recibe 60 días gratis de servicio.
                    </Typography>
                </Box>
            </PageSection> */}

            <StyledCTAHorizontal />

        </HomeSection3Container>



            <NewContactContainer>
                <PageSection>
                    <RevealUp>
                        <NewContact />
                    </RevealUp>
                </PageSection>
            </NewContactContainer>

        </ PageContainer >
    </>
    )
}
