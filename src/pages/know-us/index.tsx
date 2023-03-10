import React from "react";
import { Typography, Box, styled, Grid } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import PageContainer, { PageSection } from "@/components/PageContainer";
import KnowUsItem from "@/components/KnowUsItem";

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    background: theme.palette.secondary.dark,
    width: "100%",
    minHeight: "400px",
    color: "#fff",
    position: "relative",
    paddingBlock: "12vh",
  },
}));

const KnowUs = () => {
  const infoCeo =
    "Digital Transformation I Entrepreneur | Sales I Operations & Customer Service I Business Development I CX-UX-CS | Team Mentor";

  const infoComercial =
    "Inteligencia de Negocios  I  Sales  I   Customer Service  I  Especialista en procesos de contact center  I Travel";

  const infoOpCal =
    "Customer Experience  I  Operaciones  I  Calidad y Procesos  I Sales";

  const infoTecInn =
    "Transformación Digital  I Enterprise Agile Coach  I Especialista en Procesos  I  Gestión del Cambio  I Gestión de Proyectos  I Coach Personal y de Equipos.";

  return (
    <>
      <PageContainer title="Conocenos">
        <Container>
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Poppins",
              color: "#FFFFFF",
              textAlign: "center",
              mb: { xs: "15vh", md: "4%" },
              width: { xs: "100%" },
            }}
          >
            ¿Cómo nos organizamos?
          </Typography>

          <Grid container>
            <Grid item xs={12} md={6} lg={3}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-1.png"
                title="CEO"
                name="Horacio Canavesi"
                text={infoCeo}
                urlContact="https://www.linkedin.com/in/horaciocanavesi/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-2.png"
                title={"Comercial"}
                name="Soledad Rabado"
                text={infoComercial}
                urlContact="https://www.linkedin.com/in/soledad-robado-84008a8b/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-3.png"
                title="Operaciones y Calidad"
                name="Facundo Gentile"
                text={infoOpCal}
                urlContact="https://www.linkedin.com/in/facundo-gentile-a39821170/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-4.png"
                title="Tecnología e Ignovación"
                name="Orlando Nogales"
                text={infoTecInn}
                urlContact="https://www.linkedin.com/in/orlando-jose-nogales-alcantara-a662b78a/"
              />
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </>
  );
};

export default KnowUs;
