import {Box, Grid, styled, Typography} from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import {BoxProps} from "@mui/material/Box";
import Image from "next/image";
import Contact, {ContactContainer} from "@/components/Contact";
import React from "react";
import { RevealLeft, RevealRight, RevealUp} from "@/components/Reveal";


export const HomeSection1Container = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        backgroundImage: `url("https://dummyimage.com/1800x400/E6E8E9/aa1")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "400px"
    },
}))

export const HomeSection2Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        minHeight: "400px",
        color: "#fff"
    },
}))


export const HomeSection3Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.primary.light,
        width: "100%",
        minHeight: "400px",
        color: theme.palette.secondary.dark
    },
}))

export const HomeSection4Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minHeight: "150px",
        color: "#fff"
    },
}))

export default function HomePage() {
    return (
        <PageContainer title={"Inicio"}>
            <HomeSection1Container>
                <PageSection>
                    <RevealLeft>
                        <Typography variant="h4" sx={{
                            color: "#fff",
                            wordBreak: "break-word",
                            pt: 10,
                            ml: {xs: 0, md: 2},
                            width: {xs: "100%", md: "60%", lg: "40%"}
                        }}>Somos especialistas en atención al cliente</Typography>
                    </RevealLeft>
                </PageSection>
            </HomeSection1Container>

            <PageSection>
                <Grid container sx={{py: 8}}>
                    <Grid item xs={12} md={6}>
                        <RevealLeft>
                            <Box sx={{
                                width: {xs: "100%", md: "80%"},
                                mt: {xs: 0, md: 8},
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                <Typography variant="h4" sx={{fontWeight: "bold", mb: 2}}>¿Qué hacemos?</Typography>
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
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Image src={"https://statics.helpia.com/landing/Lateral.gif"} alt={"Lateral.gif"}
                                       width={364} height={422}/>
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
                                <Box sx={{
                                    width: {xs: "100%", md: "80%"},
                                    mt: {xs: 0, md: 8},
                                    textAlign: {xs: "center", md: "left"}
                                }}>
                                    <Typography variant="h4" sx={{color: "primary.light", fontWeight: "bold", mb: 2}}>¿Cómo
                                        lo hacemos?</Typography>
                                    <Typography>Te conectamos a la primera plataforma multicanal,
                                        centralizando todos tus contactos en un solo lugar
                                        donde serán atendidos por cientos
                                        de expertos en atención al cliente.</Typography>
                                </Box>
                            </RevealLeft>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RevealRight>
                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <Image src={"https://statics.helpia.com/landing/Frente_1-1-422x600.png"}
                                           alt={"Frente_1-1-422x600.png"} width={360} height={511}/>
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
                                <Box>
                                    <Image src={"https://statics.helpia.com/landing/Frente_3-1-1.png"}
                                           alt={"Frente_3-1-1.png"} width={350} height={522}/>
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
                                    <Typography variant="h4" sx={{fontWeight: "bold", mb: 2}}>Disponibilidad
                                        24/7</Typography>
                                    <Typography>Respondemos a todas las consultas de tus clientes
                                        los 365 días del año, mientras vos
                                        conquistas nuevos productos y clientes,
                                        nosotros te potenciamos las ventas!!!</Typography>
                                </Box>
                            </RevealRight>
                        </Grid>

                    </Grid>
                </PageSection>
            </HomeSection3Container>

            <HomeSection4Container>
                <PageSection>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>Contactanos</Typography>
                </PageSection>
            </HomeSection4Container>

            <ContactContainer>
                <PageSection>
                    <RevealUp>
                        <Contact sx={{py: 4}}/>
                    </RevealUp>
                </PageSection>
            </ContactContainer>

        </PageContainer>)
}
