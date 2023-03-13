import React from "react";
import { Typography, Box, styled, Grid } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import PageContainer from "@/components/PageContainer";
import KnowUsItem from "@/components/KnowUsItem";
import { Contact, ContactContainer } from "@/components/Contact";

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
    "Digital Transformation | Entrepreneur | Sales | Operations & Customer Service | Business Development | CX-UX-CS | Team Mentor";

  const infoComercial =
    "Inteligencia de Negocios  |  Sales  |   Customer Service  |  Especialista en procesos de contact center  |  Travel";

  const infoOpCal =
    "Customer Experience  |  Operaciones  |  Calidad y Procesos  |   Sales";

  const infoTecInn =
    "Transformación Digital  |   Enterprise Agile Coach  |   Especialista en Procesos  |  Gestión del Cambio  | Gestión de Proyectos  |   Coach Personal y de Equipos.";

  return (
    <>
      <PageContainer title="Conócenos">
        <Container>
          <Typography
            sx={{
              fontSize: "36px",
              color: "#FFFFFF",
              textAlign: "center",
              mb: { xs: "15vh", md: "4%" },
              width: { xs: "100%" },
            }}
          >
            ¿Cómo nos organizamos?
          </Typography>

          <Grid container>
            <Grid item xs={12} md={6} lg={3} mb={{xs: 8, sm: 0}}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-1.png"
                title="CEO"
                name="Horacio Canavesi"
                text={infoCeo}
                urlContact="https://www.linkedin.com/in/horaciocanavesi/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3} mb={{xs: 8, sm: 0}}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-2.png"
                title={"Comercial"}
                name="Soledad Robado"
                text={infoComercial}
                urlContact="https://www.linkedin.com/in/soledad-robado-84008a8b/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3} mb={{xs: 8, sm: 0}}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-3.png"
                title="Operaciones y Calidad"
                name="Facundo Gentile"
                text={infoOpCal}
                urlContact="https://www.linkedin.com/in/facundo-gentile-a39821170/"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3} mb={{xs: 8, sm: 0}}>
              <KnowUsItem
                urlImage="https://statics.helpia.com/landing/conocenos-4.png"
                title="Tecnología e Innovación"
                name="Orlando Nogales"
                text={infoTecInn}
                urlContact="https://www.linkedin.com/in/orlando-jose-nogales-alcantara-a662b78a/"
              />
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
      <ContactContainer>
          <Contact />
      </ContactContainer>
    </>
  );
};

export default KnowUs;
