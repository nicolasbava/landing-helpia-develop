import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


const BoxContainerImageElement = styled(Box)(() => ({
    "&.MuiBox-root": {
        border: '2px #22AD00 solid',
        borderRadius: '15px',
        width: '80vw',
        marginRight: 'auto',
        marginLeft: '7vw',
        marginTop: '10vw',
        position: 'relative',
    }
}));

const ImageElement = styled('img')(() => ({
    maxWidth: '80vw',
    height: 'auto',
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
                <Swiper 
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1000
                    }}
                >
                    {/* {images.map( (img, index) => {
                        return (
                            <SwiperSlide >
                                <ImageElement src={img?.url} alt={'alt img de fondo'} height='350' width='450' loading='lazy' />
                            </SwiperSlide>
                        )
                    })} */}
                        <SwiperSlide >
                            <ImageElement src={'https://statics.helpia.com/landing/home-1-min.jpg'} alt={'alt img de fondo'} height='350' width='450' loading='lazy' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ImageElement src={'https://statics.helpia.com/landing/home-2-min.jpg'} alt={'alt img de fondo'} height='350' width='450' loading='lazy' />
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

