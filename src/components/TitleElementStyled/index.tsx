import React from 'react';

import { styled } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';


const TitleElementStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
    '&.MuiTypography-root': {
        fontFamily: 'Varela Round',
    }
}))

export default TitleElementStyled