import React, { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "flex",
    flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      maxWidth: "240px",
      minHeight: "190px",
      padding: "0 8px 0 8px",
      border : `2px solid ${theme.palette.primary.dark}`
  },
}));

const Image = styled("img")(() => ({
    width: "64px",
    height: "64px"

}));


export type BenefitItemProps = {
  src: string;
  title: string;
}

const BenefitItem: FC<BenefitItemProps> = ({
  src,
  title,

}) => {
  return (
      <StyledBox>
          <Image
            src={src}
            alt={title}
            loading="lazy"
          />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            mt: 3,
            color: "primary.light",
          }}
        >{title}
        </Typography>
      </StyledBox>
  );
};

export default BenefitItem;
