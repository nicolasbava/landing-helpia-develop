import React, {forwardRef, useMemo} from 'react'
import {Badge, BadgeOrigin, BadgeProps, Box, styled} from '@mui/material';
import {BoxProps} from "@mui/material/Box";


type DotsOrientation = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "mobile"


const StyledBadge = styled(Badge)<BadgeProps & { dots: DotsOrientation }>(({dots}) => {
    const styles: {
        right?: number | string,
        left?: number | string,
        bottom?: number | string,
        top?: number | string
    } = {}
    switch (dots) {
        case "bottom-right": {
            styles.right = 20
            styles.bottom = 65
            break
        }

        case "bottom-left": {
            styles.right = 20
            styles.bottom = 65
            break
        }

        case "top-right": {
            styles.right = 5
            styles.top =70
            break
        }

        case "top-left": {
            styles.right = 10
            styles.top = 70
            break
        }

        case "mobile": {
            styles.right = 30
            styles.bottom = 20
            break
        }
    }


    return {
        '& .MuiBadge-badge': {
            zIndex: 0,
            ...styles
        },
    }
});


const ImageDots = forwardRef<any, Omit<BoxProps, "children">>((props, ref) => {
     const factor = 2.17
     const width = 90
    return (<Box ref={ref} {...props}>
        <svg width={width} height={width*factor} viewBox="0 0 141 306" fill="none">
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
}>(({ dots}) => {

    const padding1 = "60px"
    const padding2 = "25px"

    let padding = padding1;

    switch (dots) {
        case "bottom-right":
            padding = `0px ${padding2} ${padding1} 0px`
            break;

        case "bottom-left":
            padding = `0px 0px ${padding1} ${padding1}`
            break;

        case "top-right":
            padding = `${padding1} ${padding1} 0px 0px`
            break;

        case "top-left":
            padding = `${padding1} 0px 0px ${padding1}`

            break;

        case "mobile":
            padding = `0px ${padding2} ${padding1} 0px`
            break;
    }


    return {
        "&.MuiBox-root": {
            borderRadius: '8px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding,
        }
    }
});


const BoxContainerImageElement = styled(Box)(({theme}) => {


    return {
    "&.MuiBox-root": {
        border: '4px #22AD00 solid',
        borderRadius: '8px',
        display: "flex",
        zIndex: 1,
    }
}});


const ImageElement = styled('img')<React.ImgHTMLAttributes<any> & {dots: DotsOrientation}>(({dots}) => {

    const m = "8px"
   // style={{marginTop: "8px", marginLeft: "-8px"}}
    let margin = undefined
    switch (dots) {
        case "bottom-right":
            margin = `${m} 0 0 ${m}`
            break;

        case "bottom-left":
            margin = `${m} 0 0 -${m}`
            break;

        case "top-right":
            margin = `-${m} 0 0 ${m}`
            break;


        case "top-left":
            margin = `-${m}  0 0 -${m}`
            break;

        case "mobile":
            margin = `${m} 0 0 ${m}`
            break;

        default: {
            return undefined
        }
    }



   return {
    width: '100%',
    height: '100%',
    objectFit: "cover",
       margin
}


})


export type ImageData = {

    id: string
    src: string,
    alt: string

    dots?:DotsOrientation
};


type StyledHeroImgProps = {
    image: ImageData,

} & BoxProps



const StyledHeroImg = forwardRef<any, StyledHeroImgProps>( ({
                                                         image,
    ...props
                                                     }, ref) => {

    const dots = image?.dots ? image.dots : "bottom-right"

    const anchorOrigin: BadgeOrigin | undefined = useMemo(() => {

        switch (dots) {
            case "bottom-right":
                return {
                    vertical: "bottom",
                    horizontal: "right"
                }

            case "bottom-left":
                return {
                    vertical: "bottom",
                    horizontal: "left"
                }

            case "top-right":
                return {
                    vertical: "top",
                    horizontal: "right"
                }

            case "top-left":
                return {
                    vertical: "top",
                    horizontal: "left"
                }

            case "mobile":
                return {
                    vertical: "bottom",
                    horizontal: "right"
                }

            default: {
                return undefined
            }
        }
    }, [dots])




    return (<BoxContainer dots={dots}>
            <StyledBadge dots={dots} anchorOrigin={anchorOrigin}
                         badgeContent={<ImageDots sx={{transform: dots === "mobile" ? "rotate(90deg)" : undefined}}/>}
            >
                <BoxContainerImageElement ref={ref} {...props} >
                    <ImageElement  {...image} dots={dots} />
                </BoxContainerImageElement>
            </StyledBadge>

        </BoxContainer>
    )
})

StyledHeroImg.displayName = "StyledHeroImg"
export default StyledHeroImg





