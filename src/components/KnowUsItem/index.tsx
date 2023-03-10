import React, { FC } from "react";
import { BoxProps } from "@mui/material/Box";
import { Grid, Box, styled, Typography } from "@mui/material";
import StyledFooterIcon from "@/components/Layout/Footer/StyledFooterIcon";

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "80%",
    columnGap: "6%",
    textAlign: "center",
  },
}));

const Image = styled("img")(() => ({
  "@media (min-width: 600px)": {
    margin: 0,
  },
}));

interface Props {
  urlImage: string;
  title: string;
  name: string;
  text?: string;
  urlContact?: string;
}

const KnowUsItem: FC<Props> = ({ urlImage, title, text, name, urlContact }) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center" },
          width: { xs: "100%" },
        }}
      >
        <Grid
          sx={{
            justifyContent: { xs: "center" },
            height: { xs: "50%" },
            mb: { xs: "4%" },
          }}
        >
          <Image src={urlImage} alt={title} loading="lazy" />
        </Grid>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            lineHeight: "28px",
            color: "#94FF7A",
            fontSize: "20px",
            mb: { xs: "2%" },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "#D9D9D9",
            mb: { xs: "3%" },
            mt: { md: "10%", lg: 0 },
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#D9D9D9",
            maxHeight: { xs: "100px", md: "100%" },
            height: { xs: "110px", md: "100px" },
          }}
        >
          {text}
        </Typography>

        {urlContact && (
          <Grid container justifyContent="center">
            <Grid item xs={1} md={1} lg={1}>
              <StyledFooterIcon
                className="fa-brands fa-linkedin"
                sx={{
                  ml: { md: "50px", lg: "1%" },
                }}
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <a href={urlContact}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#D9D9D9",
                    textDecorationLine: "underline",
                    mt: "2%",
                    mb: { xs: "20%" },
                  }}
                >
                  {name}
                </Typography>
              </a>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default KnowUsItem;
