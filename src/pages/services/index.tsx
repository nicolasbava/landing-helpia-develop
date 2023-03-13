import {Box, Grid, Typography, styled, Stack } from "@mui/material";
import PageContainer, { PageSection } from "@/components/PageContainer";
import { StyledHero } from "@/components/StyledHero";
import { ImageElement, ImageElementHero } from "../about";
import { RevealLeft, RevealRight } from "@/components/Reveal";
import StyledTitleElement from "@/components/StyledTitleElement";

export const BenefitsList = styled('ul')(()=> ({

}))

export const BenefitsListItem = styled('li')(()=> ({

}))

export default function ServicesPage() {
    return (
        <PageContainer title={"Servicios"}>
            <StyledHero direction={{xs: "column", md: 'row'}} justifyContent={'space-between'} alignItems={'center'} >
                <Box sx={{width: {sm:'100%',md:'40%'}}}>
                    <StyledTitleElement variant="h2" color="main" sx={{textAlign: 'center', pb:{xs:4, md:0}}}>Servicio</StyledTitleElement>
                </Box>
                <Box sx={{width: {xs: 'auto%', md: '38%'}, margin: 'auto'}}>
                    <ImageElementHero src={"https://statics.helpia.com/landing/banner-servicio.png"} loading="lazy" style={{marginLeft: '8px'}} />
                </Box>

            </StyledHero>
            <PageSection>
                <Grid container sx={{py: 8, }}>
                    
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box sx={{
                                width: {xs: "100%", md: "100%"},
                                mt: {xs: 0, md: 3},
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                <StyledTitleElement variant="h4" sx={{fontWeight: "bold", mb: 3, mt:{xs: 3, md: 0}}}>
                                    ¿Para qué lo hacemos?
                                </StyledTitleElement>
                                <Typography mb={3}>
                                    Para cambiar la vida de los emprendedores en un solo click.
                                </Typography>
                                <Typography mb={3}>

                                    Tu tiempo y tus clientes son nuestra prioridad.
                                </Typography>
                                <Typography>
                                    Atiéndelos con Helpia los 365 días del año y sigamos creciendo juntos.
                                </Typography>
                            </Box>
                        </RevealRight>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <RevealLeft>
                             <Box sx={{display: 'flex', mt: {xs: 6, md: 0}, justifyContent: {xs: 'center', md: 'flex-end'}}}> 
                                <ImageElement 
                                        src="https://statics.helpia.com/landing/servicios1.gif"
                                        alt={"Imagen de dos personas atendiendo callcenter de Helpia"} width={550} height={550} loading="lazy"
                                />
                            </Box>
                        </RevealLeft>
                    </Grid>
                </Grid>
            </PageSection>  
            <PageSection>
                <Grid container sx={{py: {xs: 0, md: 8}, mb: {xs: 8, md: 0} }}>
                    
                    <Grid item xs={12} md={6}  >
                        <RevealLeft>
                                <Box sx={{display: 'flex'}}> 
                                <ImageElement 
                                        src="https://statics.helpia.com/landing/servicios-2-new.png"
                                        alt={"Imagen de dos personas atendiendo callcenter de Helpia"} width={550} height={550} loading="lazy"
                                />
                            </Box>
                        </RevealLeft>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box sx={{
                                margin: 'auto',
                                mt: {xs: 'auto', md: 3},
                                textAlign: {xs: "center", md: "left"},
                                ml: {xs: 'auto', md: 9},
                                maxWidth: '350px',
                            }}>
                                <StyledTitleElement variant="h4" sx={{fontWeight: "bold", mb: 3, mt:{xs: 3, md: 0}}}>
                                    Beneficios para ti
                                </StyledTitleElement>
                                <BenefitsList>
                                    <BenefitsListItem>
                                        <Typography >Primeros 60 días gratis</Typography>
                                    </BenefitsListItem>
                                    <BenefitsListItem>
                                        <Typography >Pagas por lo que usas</Typography>
                                    </BenefitsListItem>
                                    <BenefitsListItem>
                                        <Typography >Atención los 365 días del año</Typography>
                                    </BenefitsListItem>
                                    <BenefitsListItem>
                                        <Typography >Rápida atención</Typography>
                                    </BenefitsListItem>
                                    <BenefitsListItem>
                                        <Typography >Plataforma multicanal</Typography>
                                    </BenefitsListItem>
                                </BenefitsList>
                            </Box>
                        </RevealRight>
                    </Grid>
                </Grid>
            </PageSection>  
            <PageSection>
                <Stack>

                </Stack>
            </PageSection>  
        </PageContainer>
    )
}
