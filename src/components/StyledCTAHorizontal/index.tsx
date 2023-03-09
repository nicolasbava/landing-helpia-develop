import React from 'react';
import { Stack, Typography, Button, styled } from '@mui/material';
import Link from 'next/link';

const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.dark,
    color: theme.palette.background.default,
    padding: '5px 25px',
    fontSize: '16px',

}))

export const StyledCTAHorizontal = () => {
    return (
        <Stack direction='row' py={{xs:4}} sx={{justifyContent: 'center', alignItems: 'center', gap: 3, position: 'sticky', top: '0px'}}>
            <Typography variant='h6' sx={{fontWeight: 'bold'}}>Sumate a Helpia y recibe 60 días gratis de servicio.</Typography>
                <StyledButton>REGÍSTRATE</StyledButton>
        </Stack>
    )
}