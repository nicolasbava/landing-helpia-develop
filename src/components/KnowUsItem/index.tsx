import React, { FC } from "react";
import { BoxProps } from "@mui/material/Box";
import { Grid, Box, styled, Typography, Stack } from "@mui/material";
import StyledFooterIcon from "@/components/Layout/Footer/StyledFooterIcon";
import { useTheme } from '@mui/material';

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
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '300px',
          margin: 'auto',
          mb: 6
        }}
      >
          <Image src={urlImage} alt={title} loading="lazy" />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            lineHeight: "28px",
            color: theme.palette.primary.light,
            fontSize: "20px",
            mb: { xs: "2%" },
            mt: 1
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: theme.palette.background.default,
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
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: theme.palette.background.default,
            maxHeight: { xs: "100px", md: "100%" },
            height: { xs: "auto", md: "100px" },
            mb: {xs: 3, md: 0}
          }}
        >
          {text}
        </Typography>

        {urlContact && (
          <Stack direction="row" justifyContent="center" spacing={1}>
              <StyledFooterIcon
                className="fa-brands fa-linkedin"
              />
              <a href={urlContact}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: theme.palette.background.default,
                    textDecorationLine: "underline",
                    mt: "2%",
                    mb: "20%" ,
                  }}
                >
                  {name}
                </Typography>
              </a>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default KnowUsItem;
