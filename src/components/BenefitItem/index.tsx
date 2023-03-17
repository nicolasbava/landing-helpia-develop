import React, { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "8px",
    minWidth: '235px',
    maxWidth: "240px",
    minHeight: '200px',
    padding: "16px 8px 8px 8px",
    border : `2px solid ${theme.palette.primary.dark}`,
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
            height='129'
            width='150'
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
