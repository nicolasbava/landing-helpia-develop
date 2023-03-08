import React, { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import ImageWithInfo from "@/components/atoms/image-with-info";
import { RevealUp } from "@/components/Reveal";

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20%",
    columnGap: "5%",
    textAlign: "center",
  },
}));

interface Props {}

const BeneficesSection: FC<Props> = () => {
  return (
    <>
      <Typography
        sx={{
          margin: "4% 0 3% 0",
          fontSize: "36px",
          fontFamily: "Poppins",
          color: "#FFFFFF",
        }}
      >
        Beneficios para ti
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center" },
        }}
      >
        <RevealUp>
          <ImageWithInfo
            urlImage="https://statics.helpia.com/landing/icon-benefits-star.png"
            title="Primeros 60 días gratis"
            border
          />
        </RevealUp>
        <RevealUp>
          <ImageWithInfo
            urlImage="https://statics.helpia.com/landing/icon-benefits-price.png"
            title="Pagarás por lo que uses"
            border
          />
        </RevealUp>
        <RevealUp>
          <ImageWithInfo
            urlImage="https://statics.helpia.com/landing/icon-benefits-calendar.png"
            title="Atención 24hs, los 365 días del año"
            border
          />
        </RevealUp>
        <RevealUp>
          <ImageWithInfo
            urlImage="https://statics.helpia.com/landing/icon-benefits-three.png"
            title="Plataforma multicanal"
            border
          />
        </RevealUp>
      </Container>
    </>
  );
};

export default BeneficesSection;
