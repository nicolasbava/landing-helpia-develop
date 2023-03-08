import React, {useState, useEffect} from 'react'
import {Box, styled} from '@mui/material';
import StyledHeroImg, {ImageData} from "@/components/StyledHeroImg";
import {keyframes} from "@emotion/react";

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const ImageContainer = styled(Box)(({theme}) => ({
    "&.MuiBox-root": {
        animation: `${animation} 2s`,
    }
}));


const HeroSection: React.FC = () => {


    const [images] = useState<Array<ImageData>>([
        {
            id: "1",
            src: 'https://statics.helpia.com/landing/home-1-min.jpg',
            alt: 'alt 1',
            dots: "bottom-left"
        },
        {
            id: "2",
            src: 'https://statics.helpia.com/landing/home-2-min.jpg',
            alt: 'alt 2',
            dots: "top-left"

        },
        {
            id: "3",
            src: 'https://statics.helpia.com/landing/home-3-min.jpg',
            alt: 'alt 3',
            dots: "top-right"
        },
        {
            id: "4",
            src: 'https://statics.helpia.com/landing/home-3-min.jpg',
            alt: 'alt 4',
            dots: "bottom-right"
        },
    ])
    const [state, setState] = useState<ImageData>(images[0])


    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < images.length) {
                setState(images[i])
                i++;
            } else {
                i = 0;
                setState(images[i])
                i++;
            }
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<Box>

        {
            images.map((image, i) => {
                return (<> {
                    state.id === image.id &&
                    <ImageContainer key={i+1}>
                        <StyledHeroImg image={image}/>
                    </ImageContainer>
                }
                </>)
            })
        }
    </Box>)

}

export default HeroSection





