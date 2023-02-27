import {Box, Grid, Typography, styled } from "@mui/material";
import PageContainer, { PageSection } from "@/components/PageContainer";
import { StyledHero } from "@/components/StyledHero";
import { ImageElement, ImageElementHero } from "../about";
import { RevealLeft, RevealRight } from "@/components/Reveal";
import TitleElementStyled from "@/components/StyledTitleElement";

export const BenefitsList = styled('ul')(()=> ({

}))

export const BenefitsListItem = styled('li')(()=> ({

}))

export default function ServicesPage() {
    return (
        <PageContainer title={"Servicios"}>
            <StyledHero direction={{xs: "column", md: 'row'}} justifyContent={'space-between'} alignItems={'center'} >
                <Box sx={{width: {sm:'100%',md:'40%'}}}>
                    <Typography variant="h2" color="main" sx={{textAlign: 'center', pb:{xs:4, md:0}}}>Servicio</Typography>
                </Box>
                <Box sx={{width: {xs: '100%', sm: '38%'}}}>
                    <ImageElementHero src={"https://statics.helpia.com/landing/banner-servicio.png"} loading="lazy" />
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
                                <TitleElementStyled variant="h4" sx={{fontWeight: "bold", mb: 3, mt:{xs: 3, md: 0}}}>
                                    ¿Para qué lo hacemos?
                                </TitleElementStyled>
                                <Typography mb={3}>
                                    Para cambiar la vida de los emprendedores en un solo click.
                                </Typography>
                                <Typography mb={3}>

                                    Tu tiempo y tus clientes son nuestra prioridad.
                                </Typography>
                                <Typography>
                                    Atendelos con Helpia los 365 días del año y sigamos creciendo juntos.
                                </Typography>
                            </Box>
                        </RevealRight>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <RevealLeft>
                             <Box sx={{display: 'flex'}}> 
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
                <Grid container sx={{py: 8, }}>
                    
                    <Grid item xs={12} md={6}>
                        <RevealRight>
                            <Box sx={{
                                width: {xs: "100%", md: "100%"},
                                mt: {xs: 0, md: 3},
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                <TitleElementStyled variant="h4" sx={{fontWeight: "bold", mb: 3, mt:{xs: 3, md: 0}}}>
                                    Beneficios para ti
                                </TitleElementStyled>
                                <BenefitsList>
                                    <BenefitsListItem>
                                        <Typography >Primeros 60 días gratis</Typography>
                                    </BenefitsListItem>
                                    <BenefitsListItem>
                                        <Typography >Pagás por lo que usas</Typography>
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
                    <Grid item xs={12} md={6}  >
                        <RevealLeft>
                             <Box sx={{display: 'flex'}}> 
                                <ImageElement 
                                        src="https://statics.helpia.com/landing/servicios1.gif"
                                        alt={"Imagen de dos personas atendiendo callcenter de Helpia"} width={550} height={550} loading="lazy"
                                />
                            </Box>
                        </RevealLeft>
                    </Grid>
                </Grid>
            </PageSection>  
        </PageContainer>
    )
}
