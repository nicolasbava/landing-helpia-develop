import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'


const BoxContainerImageElement = styled(Box)(() => ({
    border: '2px #22AD00 solid',
    borderRadius: '15px',
    width: '85%',
    marginRight: 'auto',
    marginLeft: '7vw',
    marginTop: '10vw',
    position: 'relative',
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
}[]

export const StyledHeroImg: React.FC <ImagesType> = (images:ImagesType) => {

    console.log('images prop:', images)
    
    const [ imgCount, setImgCount ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(imgCount < 2){
                setImgCount(imgCount + 1)
            }else{
                setImgCount(0)
            }
        }, 5000);
    
        return () => clearInterval(interval);
    
    })

    return (
        <BoxContainerImageElement>
            {images.images[imgCount]?.url && images.images[imgCount]?.alt &&
                <ImageElement src={images.images[imgCount].url} width='250' height='200' alt={images.images[imgCount].alt} />
            }
        </BoxContainerImageElement>
    )
}