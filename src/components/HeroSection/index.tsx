import React, {useState, useEffect} from 'react'
import {Box, styled, useMediaQuery, useTheme} from '@mui/material';
import StyledHeroImg, {ImageData} from "@/components/StyledHeroImg";
import {keyframes} from "@emotion/react";
import {useAppContext} from "@/context/app";
import {isWidthDown} from "@mui/material/Hidden/withWidth";

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

   const theme =  useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("md"));
    const [images] = useState<Array<ImageData>>([
        {
            id: "1",
            src: 'https://statics.helpia.com/landing/home-1-min.png',
            alt: 'Dos compañeros de trabajo festejando chocando las palmas',
            dots: "bottom-left"
        },
        {
            id: "2",
            src: 'https://statics.helpia.com/landing/home-2-min.png',
            alt: 'Hero 2',
            dots: "top-left"

        },
        {
            id: "3",
            src: 'https://statics.helpia.com/landing/home-3-min.png',
            alt: 'Hero 3',
            dots: "top-right"
        },
        {
            id: "4",
            src: 'https://statics.helpia.com/landing/home-4-min.png',
            alt: 'Hero4 4',
            dots: "bottom-right"
        },
        {
            id: "5",
            src: 'https://statics.helpia.com/landing/home-5-min.png',
            alt: 'Hero 5',
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
        }, 15000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>

        {
            images.map((image, i) => {

                const factor = 1.41
                const lg = 350
                const md = 250
                const sm = 450
                const xs = 250
                image.dots = mobile ? "mobile" : image.dots
                return (<> {
                    state.id === image.id &&


                    <ImageContainer key={i}>
                        <StyledHeroImg image={image} sx={{
                            maxWidth: {xs: xs * factor, sm: sm * factor, md, lg},
                            minHeight: {xs, sm, md: md * factor, lg: lg * factor}
                        }}/>
                    </ImageContainer>
                }
                </>)
            })
        }
    </Box>)

}

export default HeroSection





