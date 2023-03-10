import React, {forwardRef} from 'react';
import {Grid,Typography} from '@mui/material';
import Box, {BoxProps} from '@mui/material/Box';

import {Stack} from '@mui/system';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import StyledFooterContainer from "@/components/Layout/Footer/StyledFooterContainer";
import StyledFooterSection from "@/components/Layout/Footer/StyledFooterSection";
import Logo from "@/components/Logo";
import StyledFooterIcon from "@/components/Layout/Footer/StyledFooterIcon";
import FooterContactLink from "@/components/Layout/Footer/FooterContactLink";
import StyledTitleElement from '@/components/StyledTitleElement';
import StyledWhatsappAnchor from '@/components/StyledWhatsappAnchor';

const Footer = forwardRef<any, BoxProps>((props, ref) => {

    return (
        <Box>
            <StyledWhatsappAnchor />

            <StyledFooterContainer ref={ref} {...props}>
                <Grid container columnSpacing={{xs: 0, md: 2, lg:0}}
                      justifyContent={{xs: "center", md: "space-evenly", lg: "space-between"}}>
                    <Grid item xs={12}  md={3}>
                        <StyledFooterSection sx={{mt: 4}}>
                            <Link href='/'>
                                <Logo alt={"footer-logo"} width={178} height={80}/>
                            </Link>
                            <Typography variant="caption">Somos especialistas en atención al cliente online.
                                Conocenos.</Typography>
                        </StyledFooterSection>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <StyledFooterSection sx={{mt: 4, mx:1}}>

                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold", mt: 2}}>Contáctanos</StyledTitleElement>


                            <Box sx={{mb: 2}}>
                                <Typography sx={{fontWeight: 'bold'}}>{"Whatsapp"}:</Typography>

                                <FooterContactLink type={"whatsapp"} flag="ar" label="+549 11 310 04593" href="https://wa.me/5491131004593"  />
                                <FooterContactLink type={"whatsapp"} flag="uy" label="+598 94 602 736" href="https://wa.me/59894602736"  />

                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography sx={{fontWeight: 'bold'}}>{"Teléfono"}:</Typography>

                                <FooterContactLink type={"phone"} flag="ar" label="+549 11 310 04593" href="tel:+5491131004593"  />
                                <FooterContactLink type={"phone"} flag="uy" label="+598 94 602 736" href="tel+59894602736"  />
                            </Box>

                            <Box sx={{mb: 0}}>
                                <FooterContactLink type={"mail"} label="info@helpia.com" href="mailto:info@helpia.com"/>
                            </Box>
                        </StyledFooterSection>
                    </Grid>

                    <Grid item xs={12}   md={3}>
                        <StyledFooterSection sx={{mt: 4}}>

                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold", mt: 2}}>Seguinos</StyledTitleElement>
                            <Stack direction="row" gap={2} sx={{justifyContent: {xs: 'center', sm: 'left'}}}>
                                <Link href='https://www.facebook.com/somos.helpia' target="_blank">
                                    <StyledFooterIcon className="fa-brands fa-facebook"/>
                                </Link>
                                <Link href='https://twitter.com/helpia_latam' target='_blank'>
                                    <StyledFooterIcon className="fab fa-twitter"/>
                                </Link>
                                <Link href='https://www.linkedin.com/company/helpia-latam/about/' target='_blank'>
                                    <StyledFooterIcon className="fa-brands fa-linkedin"/>
                                </Link>
                                <Link href='https://www.instagram.com/helpia_latam/?hl=es' target='_blank'>
                                    <StyledFooterIcon className="fa-brands fa-square-instagram"/>
                                </Link>
                            </Stack>
                        </StyledFooterSection>
                    </Grid>


                    <Grid item xs={12}  md={3}>
                        <StyledFooterSection sx={{mt: 4}}>
                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold", mt: 2}}>Trabajá con nosotros</StyledTitleElement>
                            <Typography variant="caption" sx={{mb:2}}>Si te interesa formar parte de nuestro equipo, envianos tu CV</Typography>

                            <FooterContactLink type="mail" label="reclutamiento@helpia.com"  href="mailto:reclutamiento@helpia.com" />

                        </StyledFooterSection>
                    </Grid>





                    <Grid item xs={12} sx={{mt: {xs: 2, md: 4}, mb: 4}}>
                        <Box sx={{width: "100%", textAlign: "center", a: {textDecoration: "none"}}}>
                            <Divider sx={{mb: 2, background: "#fff"}}/>
                            <Link href='/terms'>
                                <StyledTitleElement variant="caption" sx={{color: "text.disabled", fontWeight: "bold"}}>Términos
                                    y
                                    condiciones</StyledTitleElement>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </StyledFooterContainer>
        </Box>
    )
})

Footer.displayName = "Footer"
export default Footer