import {Box, Grid, Typography} from "@mui/material";
import PageContainer from "@/components/PageContainer";
import { RevealLeft, RevealRight } from "@/components/Reveal";
import Image from "next/image";


export default function AboutUsPage() {
    return (
        <PageContainer title={"Quienes somos"} >
            <Typography variant="h2" color="secondary" sx={{textAlign: 'center'}}>Quienes somos</Typography>
            <Grid container sx={{py: 8}}>

                        <Grid item xs={12} md={6}>
                            <RevealLeft>
                                <Box>
                                    <Image src={"https://statics.helpia.com/landing/somos.png"}
                                           alt={"Frente_3-1-1.png"} width={550} height={522}/>
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
        </PageContainer>)
}
