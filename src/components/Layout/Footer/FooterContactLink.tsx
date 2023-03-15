import React from "react";

import {Stack, StackProps, styled, Typography} from "@mui/material";
import Icon from "@mui/material/Icon";
import Link from "next/link";

const StyledStack = styled(Stack)<StackProps>(({theme}) => ({
    minWidth: "54px",
    color: "#fff",
    fontSize: "14px",
    transition: "0.5s",
    "&:hover": {
        color: "#ac9fad"
    },
    ".MuiIcon-root": {
        fontSize: "18px",
        color: theme.palette.primary.light
    }

}))

const StyledFlag = styled('img')(() => ({}))


type FooterContactLinkProps = {
    type: "whatsapp" | "mail" | "phone"
    label: string
    href: string
    flag?: "uy" | "ar"
}
const FooterContactLink: React.FC<FooterContactLinkProps> = ({type, flag, label, href}) => {


    const data: {
        iconClass: string,
        href: string,
        label: string,

        alt?: string;
        src?: string;
    } = React.useMemo(() => {

        let countryData: any = {
            src: undefined,
            alt: undefined,
        }

        switch (flag) {
            case "uy":
                countryData.src = "https://statics.helpia.com/landing/flag-uru.png";
                countryData.alt = "Bandera de Uruguay redonda";
                break

            case "ar":
                countryData.src = "https://statics.helpia.com/landing/flag-arg.png";
                countryData.alt = "Bandera de Argentina redonda";
                break

            default: {
                countryData = undefined
            }
        }


        switch (type) {
            case "whatsapp":
                return {
                    iconClass: "fa-brands fa-whatsapp",
                    label,
                    href,
                    ...countryData
                }

            case "mail":
                return {
                    iconClass: "fa-solid fa-envelope",
                    label,
                    href,
                    ...countryData

                }

            case "phone":
                return {
                    iconClass: "fa-solid fa-phone",
                    label,
                    href,
                    ...countryData

                }

        }
    }, [type])

    const hasFlag = data.src && data.alt


    return (
        <Link href={data.href} target='_blank'> 
            <StyledStack direction="row" gap={1} alignItems="center">
                {!hasFlag && <Icon className={data.iconClass}/>}
                {hasFlag &&
                    <StyledFlag src={data.src} width={20} height={20} alt={data.alt} loading="lazy" />
                }
                <Typography>{data.label}</Typography>
            </StyledStack>
        </Link>
    )
}

export default FooterContactLink


