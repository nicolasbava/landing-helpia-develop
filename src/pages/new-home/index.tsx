import React from "react";
import {
  Box,
  Grid,
  styled,
  Typography,
  Stack,
  StackProps,
} from "@mui/material";
import { PageSection } from "@/components/PageContainer";
import { BoxProps } from "@mui/material/Box";
import Contact, { ContactContainer } from "@/components/Contact";
import { RevealLeft, RevealRight, RevealUp } from "@/components/Reveal";

import ContactBanner from "@/components/ContactBanner";
import StyledTitleElement from "@/components/StyledTitleElement";
import StyledButton from "@/components/StyledButton";
import { StyledHeroImg } from "@/components/StyledHeroImg";
import ImageWithInfo from "@/components/atoms/image-with-info";
import BeneficesSection from "@/components/benefices/benefices-section";

const HomeSection1Container = styled(Stack)<StackProps>(() => ({
  background: "#D9D9D9",
  backgroundSize: "cover",
  width: "100%",
  minHeight: "90vh",
}));

const HomeSection2Container: any = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    background: theme.palette.secondary.dark,
    width: "100%",
    minHeight: "400px",
    color: "#fff",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    padding: "6% 1%",
  },
}));

const HomeSection2Box = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    columnGap: "1%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "6%",
  },
}));

const HomeSection3Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    background: theme.palette.primary.light,
    width: "100%",
    minHeight: "400px",
    color: theme.palette.secondary.dark,
  },
}));

export const ImageElementFirst = styled("img")(() => ({
  margin: "auto",
  width: "min(80vw, 350px)",
  height: "auto",
  "@media (min-width: 600px)": {
    margin: 0,
  },
}));

export const ImageElementSecond = styled("img")(() => ({
  margin: "auto",
  width: "min(80vw, 250px)",
  height: "auto",
  "@media (min-width: 600px)": {
    margin: 0,
  },
}));

export const ImageElementThird = styled("img")(() => ({
  margin: "auto",
  width: "min(80vw, 220px)",
  height: "auto",
  "@media (min-width: 600px)": {
    margin: 0,
  },
}));

export const Title = styled(StyledTitleElement)(() => ({
  // paddingTop: '22vh',
  color: "white",
  "&.MuiTypography-root": {
    fontSize: "min(10vw, 44px)",
  },
  "@media (min-width: 600px)": {
    width: "60%",
  },
}));

export const SubTitle = styled(StyledTitleElement)(() => ({
  color: "white",
  "&.MuiTypography-root": {
    fontSize: "min(10vw, 44px)",
  },
  "@media (min-width: 600px)": {
    width: "60%",
  },
}));

const titleLeft = "¿Qué hacemos?";
const textLeft =
  "Te proporcionamos una plataforma que te ayude a la gestión de pre venta y post venta, minimizando los tiempos de respuesta y masificando tus ingresos.";

const titleCenter = "¿Cómo lo hacemos?";
const textCenter =
  "Te conectamos a la primera plataforma   multicanal, centralizando todos tus contactos en un solo lugar donde serán atendidos por cientos de expertos en atención al cliente.";

const titleRight = "¿Para qué lo hacemos?";
const textRight =
  "Para cambiar la vida de los emprendedores en un solo click. Tu tiempo y tus clientes son nuestra prioridad. Atendelos con Helpia los 365 días del año y sigamos creciendo juntos.";

export default function NewHomePage() {
  return (
    <>
      {/* <PageContainer title={"InicioNuevo"}> */}
      <HomeSection1Container
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent={"center"}
        alignItems="center"
      >
        {/* <PageSection> */}
        <RevealLeft>
          <Typography sx={{ color: "#22AD00", textTransform: "uppercase" }}>
            ATENCIÓN 24/7
          </Typography>
          <Title variant="h1" fontSize={"44px"} sx={{ color: "#000" }}>
            Especialistas en atención al cliente
          </Title>
          <StyledButton>VER PLANES</StyledButton>
        </RevealLeft>
        <RevealRight>
          <StyledHeroImg />
        </RevealRight>
        {/* </PageSection> */}
      </HomeSection1Container>

      <HomeSection2Container>
        <Typography
          sx={{
            fontSize: "36px",
            mb: -4,
            fontFamily: "Poppins",
            color: "#FFFFFF",
          }}
        >
          La solución para tu Empresa
        </Typography>
        <HomeSection2Box>
          <RevealLeft>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/Lateral.gif"
              title={titleLeft}
              text={textLeft}
              cssImage={{ marginTop: "0%", marginBottom: "-2%", width: "50%" }}
            />
          </RevealLeft>
          <RevealUp>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/seccion-2-2.png"
              title={titleCenter}
              text={textCenter}
              cssImage={{ marginTop: "3%", marginBottom: "4%", width: "50%" }}
            />
          </RevealUp>
          <RevealRight>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/Frente_1-1-422x600.png"
              title={titleRight}
              text={textRight}
            />
          </RevealRight>
        </HomeSection2Box>

        <BeneficesSection />
      </HomeSection2Container>

      <HomeSection3Container>
        <PageSection>
          <Grid container sx={{ py: 8 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: { xs: "100%", md: "80%" },
                  mt: { xs: 0, md: 8 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <StyledTitleElement
                  variant="h4"
                  sx={{ fontWeight: "800", mb: 2 }}
                >
                  Disponibilidad 24/7
                </StyledTitleElement>
                <Typography>
                  Respondemos a todas las consultas de tus clientes los 365 días
                  del año, mientras vos conquistas nuevos productos y clientes,
                  nosotros te potenciamos las ventas!!!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              <RevealRight>
                <Box
                  sx={{
                    display: "flex",
                    mb: { xs: 4, md: 0 },
                    justifyContent: { xs: "center", sm: "center" },
                    ml: { xs: 0, sm: 9 },
                    mt: { xs: 6, md: 0 },
                  }}
                >
                  <ImageElementThird
                    src={"https://statics.helpia.com/landing/Frente_3-1-1.png"}
                    alt={
                      "Un hombre dibujado mostrando lo util que seria usar Helpia y como lo ha ayudado en su negocio"
                    }
                    width={350}
                    height={522}
                  />
                </Box>
              </RevealRight>
            </Grid>
          </Grid>
        </PageSection>
      </HomeSection3Container>

      <ContactBanner>
        <PageSection>
          <StyledTitleElement variant="h4" sx={{ fontWeight: "bold" }}>
            Contactanos
          </StyledTitleElement>
        </PageSection>
      </ContactBanner>

      <ContactContainer>
        <PageSection>
          <RevealUp>
            <Contact sx={{ py: 4 }} />
          </RevealUp>
        </PageSection>
      </ContactContainer>

      {/* </PageContainer> */}
    </>
  );
}
