import React, { CSSProperties, FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import StyledTitleElement from "@/components/StyledTitleElement";

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "80%",
    columnGap: "6%",
    textAlign: "center",
  },
}));

const Image = styled("img")(() => ({
  // margin: "auto",
  width: "min(80vw, 40%)",
  height: "auto",

}));

const Title = styled(Typography)(() => ({
  "&.MuiTypography-root": {
    color: "#94FF7A",
    fontSize: "min(7.5vw, 17px)",
  },
}));

interface Props {
  urlImage: string;
  title: string;
  text?: string;
  cssImage?: CSSProperties;
  border?: boolean;
}

const ImageWithInfo: FC<Props> = ({
  urlImage,
  title,
  text,
  cssImage,
  border,
}) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center" },
          border: border ? "2px green solid" : "none",
          borderRadius: border ? "5%" : "0",
          padding: border ? "5% 0" : "0",
          width: border ? "90%" : "100%",
          margin: 'auto',
          marginBottom: {xs: '15vh', md: 0},
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center" },
          }}
        >
          <Image
            src={urlImage}
            alt={title}
            loading="lazy"
            style={cssImage ?? cssImage}
          />
        </Box>
        <Title
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 2,
            mt: 3,
            color: "#94FF7A",
          }}
        >
          {title}
        </Title>
        <Typography
          sx={{
            color: "#D9D9D9",
          }}
        >
          {text}
        </Typography>
      </Container>
    </>
  );
};

export default ImageWithInfo;
