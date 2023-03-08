import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';


const BoxContainerImageElement = styled(Box)(({theme}) => ({
    "&.MuiBox-root": {
        border: '2px #22AD00 solid',
        borderRadius: '15px',
        width: '80vw',
        marginRight: 'auto',
        marginLeft: '7vw',
        marginTop: '10vw',
        position: 'relative',
        [theme.breakpoints.down("md")]: {
            width: '33vw',
        }
    }
}));

const ImageElement = styled('img')(({theme}) => ({
    maxWidth: '80vw',
    height: 'auto',
    [theme.breakpoints.down("md")]: {
        maxWidth: '33vw',
    },
    // clipPath: 'polygon(17% 0, 87% 0, 86% 100%, 18% 99%)' 
}))

const images = [
    {
        url: 'https://statics.helpia.com/landing/home-1-min.jpg',
        alt: 'alt 1'
    },
    {
        url: 'https://statics.helpia.com/landing/home-2-min.jpg',
        alt: 'alt 2'
    },
    {
        url: 'https://statics.helpia.com/landing/home-3-min.jpg',
        alt: 'alt 3'
    },
];

export const StyledHeroImg: React.FC = () => {

    return (
        <BoxContainerImageElement>
            <Box sx={{marginLeft: '-10px', marginTop: '-10px'}}>
                {/* <ImageElement src={'https://statics.helpia.com/landing/home-1-min.jpg'} alt={'alt img de fondo'} height='350' width='550' loading='lazy' /> */}

                <Swiper 
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 10000
                    }}
                >
                    <SwiperSlide >
                        <ImageElement src={'https://statics.helpia.com/landing/home-1-min.jpg'} alt={'alt img de fondo'} height='350' width='550' loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <ImageElement src={'https://statics.helpia.com/landing/home-2-min.jpg'} alt={'alt img de fondo'} height='350' width='550' loading='lazy' />
                    </SwiperSlide>
                </Swiper> 
            </Box>
            {/* <ImageElement src={'https://statics.helpia.com/landing/home-2-min.jpg'} alt={'alt img de fondo'} height='350' width='450' loading='lazy' /> */}

        </BoxContainerImageElement>
    )
}


type ImagesType = {
    url: string,
    alt: string
}[];

