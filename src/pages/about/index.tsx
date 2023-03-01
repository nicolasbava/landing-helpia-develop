import {Box, Grid, Typography, styled, StackProps, Stack} from "@mui/material";
import PageContainer, { PageSection } from "@/components/PageContainer";
import { RevealLeft, RevealRight, RevealUp } from "@/components/Reveal";
import { BoxProps } from "@mui/material/Box";
import { StyledHero } from "@/components/StyledHero";
import StyledTitleElement from "@/components/StyledTitleElement";



export const ImageBoxContainer = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        background: '#94ff7a',
        borderRadius: '50%',
        width: '120px',
        padding: '23px',
        height: '120px',
        margin: 'auto',
        marginBottom: 3,
        display: 'flex'
    }
}))



export const ImageElementHero = styled('img')(() => ({
    margin:'auto',
    width: 'min(80vw, 300px)',
    height: 'auto',
}))


export const ImageElement = styled('img')(() => ({
    margin:'auto',
    width: 'min(80vw, 350px)',
    height: 'auto',
    '@media (min-width: 600px)': {
        margin: 0
    }
}))

export const ImageElementValues = styled('img')(() => ({
    margin:'auto',
    height: 'auto',
}))

export const ListElement = styled('ol')(()=> ({
}))

export const ListItem = styled('li')(()=> ({
    color: 'auto'
}))

const boxStyle = {
    border: '2px #ececec solid', 
    textAlign: 'center',
    borderRadius: '3px',
}
// export const HomeSection1Container = styled(Box)<BoxProps>(() => ({
//     "&.MuiBox-root": {
//         minHeight: "400px"
//     },
// }))



export default function AboutUsPage() {
    return (
        <PageContainer title={"Quienes somos"}>
            <StyledHero direction={{xs: "column", md: 'row'}} justifyContent={'space-between'} alignItems={'center'} >
                <Box sx={{width: {sm:'auto',md:'60%'}}}>
                    <StyledTitleElement variant="h2" color="main" sx={{textAlign: 'center', pb:{xs:4, md:0}}}>¿Quienes somos?</StyledTitleElement>
                </Box>
                <ImageElementHero src={"https://statics.helpia.com/landing/about-hero.png"} loading="lazy" />
            </StyledHero>
            <PageSection>
                <Grid container sx={{py: 8, }}>
                    <Grid item xs={12} md={6}  >
                        <RevealLeft>
                             <Box sx={{display: 'flex'}}> 
                                <ImageElement 
                                        src="https://statics.helpia.com/landing/somos.png"
                                        alt={"Frente_3-1-1.png"} width={550} height={550} loading="lazy"
                                />
                            </Box>
                        </RevealLeft>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box sx={{
                                width: {xs: "100%", md: "100%"},
                                mt: {xs: 0, md: 3},
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                <Typography variant="h4" sx={{fontWeight: "bold", mb: 3, mt:{xs: 3, md: 0}}}>
                                    Pilares de la empresa
                                </Typography>
                                <Typography mb={3}>
                                    Somos una empresa flexible, tecnológica y moderna. Buscamos innovar con un modelo de negocio que se adapta a las necesidades de nuestros clientes.
                                </Typography>
                                <Typography>
                                    A través de la inteligencia artificial ayudamos a los emprendedores y empresas a estar siempre conectados con sus clientes, dando respuesta y soluciones rápidas y eficientes.
                                </Typography>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            </PageSection>  

            <PageSection>
                <Grid container sx={{py: 0, mb: 8 }}>
                    <Grid item xs={12} md={6} >
                        <RevealLeft>
                            <Box sx={{
                                width: {xs: "100%", md: "100%"},
                                textAlign: {xs: "center", md: "left"},
                                float: {xs: 'auto', sm: 'right'}
                            }}>
                                <Typography variant="h4" sx={{fontWeight: "bold", mb: 3}}>
                                    Creación de la empresa
                                </Typography>
                                <Typography mb={3}>
                                    Helpia nace para satisfacer una necesidad cada vez más frecuente entre los emprendedores y empresas. El crecimiento exponencial del e-commerce en la región ha hecho que las respuestas, consultas y soluciones en preventa y postventa, sean imprescindibles para satisfacer las necesidades de los clientes.
                                </Typography>
                                <Typography >
                                    A su vez, con un modelo flexible y a demanda, creamos una solución diferente, que te ayuda a bajar los costos fijos y brindarle a tus clientes un servicio eficiente, revolucionario e innovador.
                                </Typography>
                            </Box>
                            
                        </RevealLeft>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: 'flex', mt: 2, justifyContent: {xs: 'center', md: 'flex-end'}}}>
                        <RevealRight>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}> 
                                <ImageElement src={"https://statics.helpia.com/landing/somos2.png"}
                                        alt={"Frente_3-1-1.png"} width={380} height={380}  loading="lazy"/>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            </PageSection>  

            <PageSection> 
                <RevealUp>
                    <Grid container sx={{paddingBottom: '10vh', margin:'auto', justifyContent: 'center'}} columns={{xs: 12, sm: 13 }} gap={2}>
                        <Grid item xs={12} sm={4} sx={boxStyle} py={4} px={2}>
                            <ImageBoxContainer >
                                <ImageElementValues 
                                    src={"https://statics.helpia.com/landing/about-mision-2.png"}
                                    alt={"Frente_3-1-1.png"} width={75} height={75} loading="lazy"
                                    style={{marginTop: '-8px'}}
                                />
                            </ImageBoxContainer>
                            <Typography variant="h4" sx={{marginTop: 3, marginBottom: 1}}>
                                Misión
                            </Typography>
                            <Typography variant="body1" >Cambiar la vida de los emprendedores en un solo click.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={boxStyle} py={4} px={2} >
                            <ImageBoxContainer >
                                <ImageElementValues src={"https://statics.helpia.com/landing/about-vision3.png"}
                                            alt={"Frente_3-1-1.png"} width={75} height={75} loading="lazy"
                                />
                            </ImageBoxContainer>
                            <Typography variant="h4" sx={{marginTop: 3, marginBottom: 1}}>Visión</Typography>
                            <Typography variant="body1" >Ser la plataforma colaborativa #1 del mundo en Atención al cliente al alcance de todos.</Typography>


                        </Grid>
                        <Grid item xs={12} sm={4} sx={boxStyle} py={4} px={2}>
                            <ImageBoxContainer >
                                <ImageElementValues src={"https://statics.helpia.com/landing/about-heart-2.png"}
                                            alt={"Frente_3-1-1.png"} width={75} height={75} loading="lazy"
                                />
                            </ImageBoxContainer>
                            <Typography variant="h4" sx={{marginTop: 3, marginBottom: 1}}>Valores</Typography>
                            <Box sx={{textAlign: 'left', marginLeft: 0}}>
                                <ListElement>
                                    <ListItem >
                                          Tecnología para transformarnos.
                                    </ListItem>
                                    <ListItem >
                                         Inspiramos equipos.
                                    </ListItem>
                                    <ListItem >
                                        Pasión por lo que hacemos.
                                    </ListItem>
                                </ListElement>
                            </Box>
                        </Grid>
                    </Grid>
                </RevealUp>
            </PageSection>
        </PageContainer>)
}
