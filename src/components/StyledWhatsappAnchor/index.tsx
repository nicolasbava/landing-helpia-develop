import { styled } from '@mui/material'
import React from 'react'
import { RevealLeft } from '@/components/Reveal';


export const ElementWhatsappAnchor = styled('img')(() => ({
    position: 'fixed',
    bottom: '75px',
    right: '22px',
    transition: '250ms all ease',
    '&:hover': {
        transform: 'scale(1.025)'
    }
}))

export const StyledWhatsappAnchor: React.FC = () => {
    return (
        <a href="https://wa.me/5491131004593" target="_blank" rel="noreferrer">
                <ElementWhatsappAnchor src={"https://statics.helpia.com/landing/whatsapp-icon.png"}  alt="whatsapp" width="48" height="48"/>
        </a>
    )
}