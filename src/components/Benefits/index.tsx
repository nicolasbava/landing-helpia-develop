import React, { FC } from "react";
import { Box, styled, Typography, Grid } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import ImageWithInfo from "@/components/atoms/image-with-info";
import { RevealUp } from "@/components/Reveal";

interface Props {}

const StyledGrid = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    maxWidth: '250px', 
    margin: 'auto'
  }
}));

const BenefitsSection: FC<Props> = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#FFFFFF",
          textAlign: 'center',
          mb: '10vh'
        }}
      >
        Beneficios para ti
      </Typography>
      <Grid container >
        <StyledGrid item xs={12} md={3}  >
          <RevealUp>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/icon-benefits-star.png"
              title="Primeros 60 días gratis"
              border
            />
          </RevealUp>
        </StyledGrid>
        <StyledGrid item xs={12} md={3}>
          <RevealUp>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/icon-benefits-price.png"
              title="Pagarás por lo que uses"
              border
            />
          </RevealUp>
        </StyledGrid>
        <StyledGrid item xs={12} md={3}>
          <RevealUp>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/icon-benefits-calendar.png"
              title="Atención 24hs, los 365 días del año"
              border
            />
          </RevealUp>
        </StyledGrid>
        <StyledGrid item xs={12} md={3}> 
          <RevealUp>
            <ImageWithInfo
              urlImage="https://statics.helpia.com/landing/icon-benefits-three.png"
              title="Plataforma multicanal"
              border
            />
          </RevealUp>
        </StyledGrid>
      </Grid>
      
    </> 
  );
};

export default BenefitsSection;


const Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20%",
    columnGap: "5%",
    textAlign: "center",
  },
}));