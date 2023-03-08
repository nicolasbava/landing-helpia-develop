import React, {forwardRef, useEffect, useState, useCallback, memo} from 'react'
import {Badge, BadgeProps, Box, styled} from '@mui/material';
import {BoxProps} from "@mui/material/Box";
import {keyframes} from "@emotion/react";
import {DoDisturb} from "@mui/icons-material";


type DotsOrientation = {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
    orientation?: "normal" | "landscape"
}

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
        zIndex: 0,
        right: 20,
        bottom: 50,
    },
}));


const ImageDots = forwardRef<any, Omit<BoxProps, "children">>((props, ref) => {

    return (<Box ref={ref} {...props}>
        <svg width="141" height="306" viewBox="0 0 141 306" fill="none">
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 297)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 264)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 231)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 198)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 165)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 132)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 99)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 66)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 33)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 297)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 264)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 231)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 198)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 165)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 132)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 99)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 66)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 33)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 33 0)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 297)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 264)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 231)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 165)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 132)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 99)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 66)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 33)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 66 0)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 297)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 264)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 231)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 198)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 165)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 132)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 99)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 66)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 33)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 99 0)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 297)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 264)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 231)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 198)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 165)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 132)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 99)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 66)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 33)" fill="#22AD00"/>
            <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 132 0)" fill="#22AD00"/>
        </svg>

    </Box>)
})

ImageDots.displayName = "ImageDots"


const BoxContainer = styled(Box)<BoxProps & {
    dots: DotsOrientation
}>(({theme, dots: {horizontal, vertical}}) => {

    const factor = "48px"

    let padding = factor;
    if (horizontal === "right" && vertical === "bottom") {
         padding = `0px ${factor} ${factor} 0px`
    }

    if (horizontal === "right" && vertical === "top") {
        padding = `${factor} ${factor} 0px 0px`
    }

    if (horizontal === "left" && vertical === "bottom") {
        padding = `0px 0px ${factor} ${factor}`
    }

    if (horizontal === "left" && vertical === "top") {
        padding = `${factor} 0px 0px ${factor}`
    }


    return {
        "&.MuiBox-root": {
            borderRadius: '8px',
            width: '452px',
            minHeight: '655px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "red",
            padding,
            [theme.breakpoints.down("md")]: {
                width: "550px",
                minHeight: "225px",
            },
            [theme.breakpoints.down("sm")]: {
                width: "350px",
                minHeight: "175px",
            }
        }
    }
});


const BoxContainerImageElement = styled(Box)(({theme}) => ({
    "&.MuiBox-root": {
        border: '4px #22AD00 solid',
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        display: "flex",
        zIndex: 1,

        /* [theme.breakpoints.down("md")]: {
             width: "550px",
             minHeight: "225px",
         },
         [theme.breakpoints.down("sm")]: {
             width: "350px",
             minHeight: "175px",

         }*/

    }
}));

const imageKf = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageElement = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: "cover",
    animation: `${imageKf} 1s`
}))


type ImagesType = {
    src: string,
    alt: string
};


type StyledHeroImgProps = {
    images: Array<ImagesType>,
    dots?: DotsOrientation
}
const StyledHeroImg: React.FC<StyledHeroImgProps> = ({
                                                         images, dots = {
        vertical: 'bottom',
        horizontal: 'right',
        orientation: "landscape"
    }
                                                     }) => {


    const [state, setState] = useState<ImagesType | undefined>(images[0])


    React.useEffect(() => {
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

    return (<BoxContainer dots={dots}>
            {/* <StyledBadge anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }} badgeContent={<ImageDots sx={{transform: {xs: "rotate(90deg)", md: "rotate(0deg)"}}}/>}> */}

            <BoxContainerImageElement>
                {
                    images.map((image, i) => {


                        return (<> {
                            state?.src === image.src &&
                            <ImageElement key={i} {...image} style={{marginTop: "8px", marginLeft: "-8px"}}/>
                        }
                        </>)
                    })
                }


            </BoxContainerImageElement>
            {/*</StyledBadge>*/}

        </BoxContainer>
    )
}

export default memo(StyledHeroImg)




