import React from "react";

import { Box, Grid, styled, Typography, Button, Stack, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    border: `2px solid #000`,
    // background: "#F2F2F2",
    background: theme.palette.background.default,
    cursor: "pointer",
    "&:hover": {
      background: "#c6c2c2",
    },
    transition: "1.2s",
    minWidth: "360px",
    padding: '24px',
    marginTop: '12vh'
  },
}));

const Image = styled("img")(() => ({
  width: "200px",
  height: "auto",
  borderRadius: '6px',
  marginLeft: '3vw',
  marginTop: '13px',
}));

const ImageLogo = styled("img")(() => ({
  height: "3%",
}));

const PlanFlex = () => {
  const handleClick = () => {
    window.open("https://app.helpia.com/auth/signup", "_blank");
  };

  const theme = useTheme()


  return (
    <StyledBox sx={{ width: { xs: "60%", md: "95%",  } }}>
      <Grid container>
        <Grid item sm={12} md={7} lg={9} sx={{ padding: { xs: "3%", md: "0%" },}} > 
          <Stack direction="row" spacing={1} sx={{ mt: { xs: "4%", md: "0" }, }}> 
            <ImageLogo
              src="https://statics.helpia.com/landing/helpia-plan-flex.png"
              alt="plan-flex-logo"
              loading="lazy"
            />
            <Typography sx={{
                            fontWeight: 500,
                            fontSize: "24px",
                            color: theme.palette.primary.dark,
                            ml: "1%",
                          }}
            >
              Plan flex
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              color: theme.palette.text.primary,
              mt: { xs: "4%", md: "0" },
            }}
          >
            Para Pymes, Tiendas, Empresas y Grandes Emprendedores
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: theme.palette.text.primary,
              mt: { xs: "4%", md: "1%" },
            }}
          >
            Solicita tu cotización a medida según tu necesidad y demanda para
            que nuestro equipo impulse tu proyecto.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              color: "inherit",
              backgroundColor: theme.palette.primary.light,
              fontWeight: "bold",
              width: "150px",
              mt: { xs: "24px", md: "3%" },
              mb: { xs: "6%", md: "0" },
            }}
            onClick={handleClick}
          >
            CONSULTAR
          </Button>
        </Grid>
        <Grid item xs={0} md={1}>
          <Image
            src="https://statics.helpia.com/landing/home-5-min.png"
            alt="Hombre pensando frente a su computadora"
            loading="lazy"
            sx={{
              display: { xs: "none", md: "block" },
              // ml: { md: "30%", lg: "15%" },
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};
export default PlanFlex;
