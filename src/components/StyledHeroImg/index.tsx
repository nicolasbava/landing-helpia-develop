import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import Image from 'next/image';


const BoxContainerImageElement = styled(Box)(() => ({
    "&.MuiBox-root": {
        border: '2px #22AD00 solid',
        borderRadius: '15px',
        width: '85%',
        marginRight: 'auto',
        marginLeft: '7vw',
        marginTop: '10vw',
        position: 'relative',
    }
}))




const ImageElement = styled('img')(() => ({
    width: '100%',
    height:'auto',
    objectFit: 'contain',
    marginTop: '-12px',
    marginLeft: '-10px',
    transition: '250ms all ease'
    // position: 'absolute',
    // top:'-8px',
    // left: '-8px'
}))

type ImagesType = {
    url: string,
    alt: string
}[];

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
    // const [ imgCount, setImgCount ] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(imgCount < 2){
    //             setImgCount(imgCount + 1)
    //         }else{
    //             setImgCount(0)
    //         }
    //     }, 5000);
    
    //     return () => clearInterval(interval);
    // })

    // const swiper = new Swiper('.swiperClass', {
    //     autoplay: {
    //         delay: 1000,
    //       },
    //   });

    return (
        <BoxContainerImageElement>
           
                        <Image src={'https://statics.helpia.com/landing/home-1-min.jpg'} alt={'alt img de fondo'} height='350' width='450' />
                    {/* </SwiperSlide> */}
                {/* })} */}
            {/* </Swiper> */}
        </BoxContainerImageElement>
    )
}

 {/* <Swiper > */}
                {/* {images?.map( (image) => { */}
                    {/* <SwiperSlide > */}