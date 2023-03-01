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

const Footer = forwardRef<any, BoxProps>((props, ref) => {

    return (
        <Box>
            <StyledFooterContainer ref={ref} {...props}>
                <Grid container columnSpacing={{xs: 0, md: 2, lg:0}}
                      justifyContent={{xs: "center", md: "space-evenly", lg: "space-between"}}>
                    <Grid item xs={12}  md={4}>
                        <StyledFooterSection sx={{mt: 4}}>
                            <Link href='/'>
                                <Logo alt={"footer-logo"} width={180} height={80}/>
                            </Link>
                            <Typography variant="caption">Somos especialistas en atención al cliente online.
                                Conocenos.</Typography>
                        </StyledFooterSection>
                    </Grid>

                    <Grid item xs={12}   md={4}>
                        <StyledFooterSection sx={{mt: 4}}>
<<<<<<< HEAD
                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold", mt: 2}}>Seguinos</StyledTitleElement>
=======
                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold"}}>Seguinos</StyledTitleElement>
>>>>>>> abeecefa8866b940fc1476b4b43aded039231517
                            <Stack direction="row" gap={2} sx={{justifyContent: {xs: 'center', sm: 'left'}}}>
                                <Link href='https://www.facebook.com/somos.helpia' target="_blank">
                                    <StyledFooterIcon className="fab fa-facebook-f"/>
                                </Link>
                                <Link href='https://twitter.com/helpia_latam' target='_blank'>
                                    <StyledFooterIcon className="fab fa-twitter"/>
                                </Link>
                                <Link href='https://www.linkedin.com/company/helpia-latam/about/' target='_blank'>
                                    <StyledFooterIcon className="fa-brands fa-linkedin-in"/>
                                </Link>
                                <Link href='https://www.instagram.com/helpia_latam/?hl=es' target='_blank'>
                                    <StyledFooterIcon className="fab fa-instagram"/>
                                </Link>
                            </Stack>
                        </StyledFooterSection>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <StyledFooterSection sx={{mt: 4, mx:1}}>
<<<<<<< HEAD
                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold", mt: 2}}>Contáctanos</StyledTitleElement>
=======
                            <StyledTitleElement variant='h6' mb={2} sx={{fontWeight: "bold"}}>Contáctanos</StyledTitleElement>
>>>>>>> abeecefa8866b940fc1476b4b43aded039231517

                            <Box sx={{mb: 2}}>
                                <FooterContactLink type={"whatsapp"}/>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <FooterContactLink type={"phone"}/>
                            </Box>

                            <Box sx={{mb: 0}}>
                                <FooterContactLink type={"mail"}/>
                            </Box>
                        </StyledFooterSection>
                    </Grid>

                    <Grid item xs={12} sx={{mt: {xs: 4, md: 8, lg: 16}, mb: 8}}>
                        <Box sx={{width: "100%", textAlign: "center", a: {textDecoration: "none"}}}>
                            <Divider sx={{mb: 1, background: "#fff"}}/>
                            <Link href='/terms'>
                                <StyledTitleElement variant="caption" sx={{color: "primary.dark", fontWeight: "bold"}}>Términos
                                    y
                                    condiciones</StyledTitleElement>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </StyledFooterContainer>
            <Box sx={{ backgroundColor: "primary.light", width: "100%", height: "32px"}}/>
        </Box>
    )
})

Footer.displayName = "Footer"
export default Footer