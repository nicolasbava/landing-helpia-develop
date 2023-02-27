import {Box, Grid, Typography} from "@mui/material";
import PageContainer, { PageSection } from "@/components/PageContainer";
import { RevealLeft, RevealRight } from "@/components/Reveal";
import Image from "next/image";


export default function AboutUsPage() {
    return (
        <PageContainer title={"Quienes somos"} >
            <Typography variant="h2" color="secondary" sx={{textAlign: 'center'}}>Quienes somos</Typography>
            {/* <PageSection> */}
                <Grid container sx={{py: 8, }}>
                    <Grid item xs={12} md={6}>
                        <RevealLeft>
                            <Box sx={{float: 'right', paddingRight: 4}}>
                                <Image src={"https://statics.helpia.com/landing/somos.png"}
                                        alt={"Frente_3-1-1.png"} width={500} height={500}/>
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
                                <Typography>
                                    Somos una empresa flexible, tecnológica y moderna. Buscamos innovar con un modelo de negocio que se adapta a las necesidades de nuestros clientes.
                                </Typography>
                                <Typography>
                                    A través de la inteligencia artificial ayudamos a los emprendedores y empresas a estar siempre conectados con sus clientes, dando respuesta y soluciones rápidas y eficientes.
                                </Typography>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            {/* </PageSection> */}
            {/* SECTION 2 */}
            {/* <PageSection>  */}
                <Grid container sx={{py: 0, }}>
                    <Grid item xs={12} md={6}>
                        <RevealLeft>
                            <Box sx={{
                                width: {xs: "100%", md: "80%"},
                                mt: {xs: 0, md: 8},
                                textAlign: {xs: "center", md: "left"},
                                float: {xs: 'auto', sm: 'right'}
                            }}>
                                <Typography variant="h4" sx={{fontWeight: "bold", mb: 2}}>Disponibilidad
                                    24/7</Typography>
                                <Typography>
                                    Somos una empresa flexible, tecnológica y moderna. Buscamos innovar con un modelo de negocio que se adapta a las necesidades de nuestros clientes.
                                </Typography>
                                <Typography>
                                    A través de la inteligencia artificial ayudamos a los emprendedores y empresas a estar siempre conectados con sus clientes, dando respuesta y soluciones rápidas y eficientes.
                                </Typography>
                            </Box>
                            
                        </RevealLeft>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box >
                                <Image src={"https://statics.helpia.com/landing/somos.png"}
                                        alt={"Frente_3-1-1.png"} width={500} height={500}/>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            {/* </PageSection> */}
        </PageContainer>)
}
