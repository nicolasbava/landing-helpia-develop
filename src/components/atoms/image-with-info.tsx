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
  "@media (min-width: 600px)": {
    margin: 0,
  },
}));

const Title = styled(StyledTitleElement)(() => ({
  color: "#94FF7A",
  fontFamily: "Poppins",
  "&.MuiTypography-root": {
    fontSize: "min(1.5vw, 44px)",
  },
  "@media (min-width: 600px)": {
    width: "100%",
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
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Poppins",
            color: "#94FF7A",
          }}
        >
          {title}
        </Title>
        <Typography
          sx={{
            fontFamily: "Poppins",
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
