import {Box, Button, Grid, styled, Typography} from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import {BoxProps} from "@mui/material/Box";
import  {ContactContainer, Contact} from "@/components/Contact";
import React from "react";
import {RevealDown, RevealUp} from "@/components/Reveal";


import HeroSection from "@/components/HeroSection";
import SolutionItem from "@/components/SolutionItem";
import Plans from "@/components/Plans";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import BenefitsSection from "@/components/Benefits";

const HomeSection2Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        minHeight: "400px",
        color: "#fff",
        position: 'relative',
        paddingBlock: '15vh'
    },
}))


const HomeSection3Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.primary.light,
        width: "100%",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: theme.palette.secondary.dark
    },
}))


export const ImageElementFirst = styled('img')(() => ({
    margin: 'auto',
    width: 'min(80vw, 350px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0
    }
}))

export const ImageElementSecond = styled('img')(() => ({
    margin: 'auto',
    width: 'min(80vw, 250px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0
    }
}))

export const ImageElementThird = styled('img')(() => ({
    margin: 'auto',
    width: 'min(80vw, 220px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0,
    }
}))


export default function HomePage() {
    return (
        <PageContainer title={"Inicio"}>
            <PageSection>
                <Grid container sx={{py: {xs: 4, md: 2, lg: 1}}} rowSpacing={4}>
                    <Grid item xs={12} md={8} mt={{xs: 3, md: '13vh'}}>
                        <Box sx={{width: {xs: "100%", md: "95%", lg: "90%"}, a: {textDecoration: "none"}}}>
                            <Typography sx={{color: "primary.dark", fontWeight: "bold", mb: 2}}>Atención
                                24/7</Typography>
                            <Typography variant="h2" sx={{wordBreak: "break-word", mb: 4}}>Especialistas
                                en atención al cliente</Typography>

                            <Link href={"#plans"}>
                                <Button variant="contained"
                                        sx={{width: "150px", fontWeight: "bold", backgroundColor: "primary.light"}}>VER
                                    PLANES</Button>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            display: "flex",
                            width: "100%", flexDirection: "row", justifyContent: {xs: "flex-start", md: "flex-end"}
                        }}>
                            <HeroSection/>
                        </Box>
                    </Grid>
                </Grid>

            </PageSection>


            <HomeSection2Container>
                <PageSection>
                    <Grid container sx={{pb: 8}} rowSpacing={{xs: 4, md: 4}}>
                        <Grid item xs={12} sx={{textAlign: "center"}}>
                            <Typography variant="h4" sx={{pb: 4}}>La solución para tu Empresa</Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <RevealUp>
                                <SolutionItem
                                    title={"¿Qué hacemos?"}
                                    text={"Te proporcionamos una plataforma que te ayude a la gestión de pre venta y post venta, minimizando los tiempos de respuesta y masificando tus ingresos."}
                                    src="https://statics.helpia.com/landing/Lateral.gif"/>
                            </RevealUp>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <RevealDown>
                                <SolutionItem
                                    title={"¿Cómo lo hacemos?"}
                                    text={"Te conectamos a la primera plataforma multicanal, centralizando todos tus contactos en un solo lugar donde serán atendidos por cientos de expertos en atención al cliente."}
                                    src="https://statics.helpia.com/landing/seccion-2-2.png"/>
                            </RevealDown>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <RevealUp>
                                <SolutionItem
                                    title={"¿Para qué lo hacemos?"}
                                    text={"Para cambiar la vida de los emprendedores en un solo click. Tu tiempo y tus clientes son nuestra prioridad. Atiendelos con Helpia los 365 días del año y sigamos creciendo juntos."}
                                    src="https://statics.helpia.com/landing/Frente_1-1-422x600.png"/>
                            </RevealUp>
                        </Grid>
                    </Grid>
                </PageSection>

                <PageSection>
                    <Box sx={{textAlign: "center", width: "100%", mt: 2, mb: 2}}>
                        <Typography variant="h4" sx={{mb: 4}}>Beneficios para ti</Typography>
                        <BenefitsSection/>
                    </Box>
                </PageSection>
            </HomeSection2Container>

            <PageSection>
                <Stack alignItems="center" sx={{width: "100%", my: 12}}>
                    <Typography id="plans" variant='h4' sx={{fontSize: '24px', mb: {xs: 4, md: 7}}}>Planes Mensuales</Typography>
                    <Plans/>
                </Stack>
            </PageSection>


            <HomeSection3Container>
                <PageSection>
                    <Grid container justifyContent="space-evenly" alignItems="center" rowSpacing={{xs:2, md:0}}
                          sx={{height: "min-content", a: {textDecoration: "none"}  }}>
                        <Grid item xs={12} md={8} sx={{textAlign: "center"}}>
                            <Typography id="plans" variant="h5" sx={{fontWeight: "bold"}}>Sumate a Helpia y recibe 60 días gratis de servicio</Typography>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{textAlign: {xs: "center", md: "left"}}}>
                            <Link href="https://app.helpia.com/auth/signup" target="_blank">
                                <Button variant="contained"
                                        sx={{width: "150px", fontWeight: "bold", backgroundColor: "secondary.dark", color: "#fff"}}>REGÍSTRATE</Button>
                            </Link>
                        </Grid>

                    </Grid>
                </PageSection>
            </HomeSection3Container>


            <ContactContainer >
                <PageSection >
                    <RevealUp>
                        <Contact />
                    </RevealUp>
                </PageSection>
            </ContactContainer>

        </PageContainer>)
}
