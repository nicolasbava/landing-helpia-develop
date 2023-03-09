import {Box, Button, Grid, styled, Typography} from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import {BoxProps} from "@mui/material/Box";
import Image from "next/image";
import Contact, {ContactContainer} from "@/components/Contact";
import React from "react";
import {RevealDown, RevealLeft, RevealRight, RevealUp} from "@/components/Reveal";


import ContactBanner from "@/components/ContactBanner";
import StyledTitleElement from "@/components/StyledTitleElement";
import StyledHeroImg from "@/components/StyledHeroImg";
import HeroSection from "@/components/HeroSection";
import SolutionItem from "@/components/SolutionItem";
import Plans from "@/components/Plans";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import BenefitsSection from "@/components/Benefits";


const HomeSection1Container = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        backgroundImage: `url("https://statics.helpia.com/landing/Banner-home.jpg")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "90vh",
    },
}))

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
        minHeight: "400px",
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
                    <Grid item xs={12} md={8}>
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
                    <Grid container sx={{pb: 8}} rowSpacing={{xs: 4, md: 2}}>
                        <Grid item xs={12} sx={{textAlign: "center"}}>
                            <Typography variant="h4">La solución para tu Empresa</Typography>
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
                                    text={"Para cambiar la vida de los emprendedores en un solo click. Tu tiempo y tus clientes son nuestra prioridad. Atendelos con Helpia los 365 días del año y sigamos creciendo juntos."}
                                    src="https://statics.helpia.com/landing/Frente_1-1-422x600.png"/>
                            </RevealUp>
                        </Grid>
                    </Grid>
                </PageSection>

                <BenefitsSection />

            </HomeSection2Container>


            <PageSection>
                <Stack alignItems="center" sx={{width: "100%", my: 8}}>
                    <Typography id="plans" variant="h5" sx={{fontWeight: "bold", mb: 4}}>Planes Mensuales</Typography>
                    <Plans/>
                </Stack>
            </PageSection>


            <PageSection>
                <Grid container sx={{py: 8}}>
                    <Grid item xs={12} md={6}>
                        <RevealLeft>
                            <Box sx={{
                                width: {xs: "100%", md: "80%"},
                                mt: {xs: 0, md: 8},
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                <StyledTitleElement variant="h4" sx={{fontWeight: "bold", mb: 2}}>¿Qué
                                    hacemos?</StyledTitleElement>
                                <Typography>Brindamos una solución para tu emprendimiento,
                                    proporcionando una plataforma que te ayude
                                    a la gestión de pre venta y post venta,
                                    minimizando los tiempos de respuesta
                                    y masificando tus ingresos.</Typography>
                            </Box>
                        </RevealLeft>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box sx={{display: "flex", justifyContent: {xs: "center", md: 'flex-end'}}}>
                                <ImageElementFirst src={"https://statics.helpia.com/landing/Lateral.gif"}
                                                   alt={"Celular mostrando gráficos y chats mostrando éxito por usar Helpia"}
                                                   width={364} height={422} loading="lazy"/>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            </PageSection>

            <HomeSection2Container>
                <PageSection>
                    <Grid container sx={{py: 8}}>

                        <Grid item xs={12} md={6}>
                            <RevealLeft>
                                <Box sx={{display: "flex", justifyContent: {xs: "center", md: "flex-start"}}}>
                                    <ImageElementSecond
                                        src={"https://statics.helpia.com/landing/Frente_1-1-422x600.png"}
                                        alt={"Celular mostrando el inicio de sesión de Helpia"} width={360}
                                        height={511}/>
                                </Box>
                            </RevealLeft>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RevealRight>
                                <Box sx={{
                                    width: {xs: "100%", md: "80%"},
                                    mt: {xs: 0, md: 8},
                                    textAlign: {xs: "center", md: "left"}
                                }}>
                                    <StyledTitleElement variant="h4"
                                                        sx={{color: "primary.light", fontWeight: "bold", mb: 2}}>¿Cómo
                                        lo hacemos?</StyledTitleElement>
                                    <Typography mb={{xs: 3, md: 0}}>Te conectamos a la primera plataforma multicanal,
                                        centralizando todos tus contactos en un solo lugar
                                        donde serán atendidos por cientos
                                        de expertos en atención al cliente.</Typography>
                                </Box>
                            </RevealRight>
                        </Grid>
                    </Grid>
                </PageSection>
            </HomeSection2Container>

            <HomeSection3Container>
                <PageSection>
                    <Grid container sx={{py: 8}}>
                        <Grid item xs={12} md={6}>
                            <RevealLeft>
                                <Box sx={{
                                    width: {xs: "100%", md: "80%"},
                                    mt: {xs: 0, md: 8},
                                    textAlign: {xs: "center", md: "left"}
                                }}>

                                    <StyledTitleElement variant="h4" sx={{fontWeight: "800", mb: 2}}>Disponibilidad
                                        24/7</StyledTitleElement>
                                    <Typography>Respondemos a todas las consultas de tus clientes
                                        los 365 días del año, mientras vos
                                        conquistas nuevos productos y clientes,
                                        nosotros te potenciamos las ventas!!!</Typography>
                                </Box>
                            </RevealLeft>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{textAlign: 'center', justifyContent: 'center'}}>
                            <RevealRight>
                                <Box sx={{
                                    display: 'flex',
                                    mb: {xs: 4, md: 0},
                                    justifyContent: {xs: 'center', sm: 'center'},
                                    ml: {xs: 0, sm: 9},
                                    mt: {xs: 6, md: 0}
                                }}>
                                    <ImageElementThird src={"https://statics.helpia.com/landing/Frente_3-1-1.png"}
                                                       alt={"Un hombre dibujado mostrando lo util que seria usar Helpia y como lo ha ayudado en su negocio"}
                                                       width={350} height={522}
                                    />
                                </Box>
                            </RevealRight>
                        </Grid>
                    </Grid>
                </PageSection>
            </HomeSection3Container>

            <ContactBanner>
                <PageSection>
                    <StyledTitleElement variant="h4" sx={{fontWeight: "bold"}}>Contactanos</StyledTitleElement>
                </PageSection>
            </ContactBanner>

            <ContactContainer>
                <PageSection>
                    <RevealUp>
                        <Contact sx={{py: 4}}/>
                    </RevealUp>
                </PageSection>
            </ContactContainer>

        </PageContainer>)
}
