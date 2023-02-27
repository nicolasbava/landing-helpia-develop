import {Box, Grid, styled, Typography} from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import {BoxProps} from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import {RevealLeft, RevealRight, RevealUp} from "@/components/Reveal";
import Contact, {ContactContainer} from "@/components/Contact";
import ContactBanner from "@/components/ContactBanner";
import Plans from "@/components/Plans";


const PlansSection1Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        minHeight: "250px",
        color: "#fff",
        [theme.breakpoints.down("md")]: {
            minHeight: "150px",
        }
    },
}))


const StyledImage = styled("img")(() => ({
    width: "250px",
    height: "auto",
}))
export default function PlansPage() {
    return (
        <PageContainer title={"Planes"}>
            <PlansSection1Container>
                <PageSection>
                    <Grid container sx={{py: 8}} justifyContent="space-between">
                        <Grid item xs={12} md={6}>
                            <RevealLeft>
                                <Stack sx={{height: "100%"}} justifyContent="center">
                                    <Typography variant="h4" sx={{fontWeight: "bold"}}>Planes</Typography>
                                </Stack>
                            </RevealLeft>


                        </Grid>

                        <Grid item xs={12} md={6} sx={{display: {xs: "none", md: "flex"}}}>
                            <RevealRight>
                                <Stack sx={{height: "100%"}} justifyContent={"center"} alignItems={"center"}>
                                    <StyledImage src={"https://statics.helpia.com/landing/plans-banner.png"}
                                                 alt={"plans-banner.png"}/>
                                </Stack>
                            </RevealRight>
                        </Grid>
                    </Grid>
                </PageSection>
            </PlansSection1Container>

            <PageSection>
                <Box sx={{my: 8}}>
                    <Plans/>
                </Box>
            </PageSection>


            <ContactBanner>
                <PageSection>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>Contactanos</Typography>
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
