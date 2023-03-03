import React from "react";

import {Stack, StackProps, styled, Typography} from "@mui/material";
import Icon from "@mui/material/Icon";
import Link from "next/link";

const StyledStack = styled(Stack)<StackProps>(() => ({
    minWidth: "54px",
    color: "#fff",
    fontSize: "14px",
    transition: "0.5s",
    "&:hover": {
        color: "#ac9fad"
    },
    ".MuiIcon-root": {
        fontSize: "18px",
    }

}))

const StyledFlag = styled('img')(() => ({

}))


type FooterContactLinkProps = {
    type: "whatsapp" | "mail" | "phone"
}
const FooterContactLink: React.FC<FooterContactLinkProps> = ({type}) => {



    const data: {
        img: string | undefined; 
        iconClass: string, 
        href: string, label: 
        string, 
        alt: string | undefined; 
        title: string;
} = React.useMemo(() => {
        switch (type) {
            case "whatsapp":
                return {
                    iconClass: "fa-brands fa-whatsapp",
                    label: "+549 11 310 04593",
                    href: "https://wa.me/5491131004593",
                    img: "https://statics.helpia.com/landing/flag-arg.png",
                    alt: "Bandera de Argentina redonda",
                    title: "Whatsapp"
                }

            case "mail":
                return {
                    iconClass: "fa-regular fa-envelope",
                    label: "info@helpia.com",
                    href: "mailto:info@helpia.com",
                    img: "",
                    alt: "",
                    title: "E-mail"

                }

            case "phone":
                return {
                    iconClass: "fa-solid fa-phone",
                    label: "+598 94 602 736",
                    href: "tel:+59894602736",
                    img: "https://statics.helpia.com/landing/flag-uru.png",
                    alt: "Bandera de Uruguay redonda",
                    title: "Teléfono"

                }

        }
    }, [type])



    return (
        <Link href={data.href} target='_blank'>
            <Typography pb={1} variant='body1' style={{color: 'white'}}>{ data.title }:</Typography>
            <StyledStack direction="row" gap={1} alignItems="center">
                {/* <Icon className={data.iconClass}/> */}
                {data.img && data.alt !== '' && 
                    <StyledFlag src={data.img} width={20} height={20} alt={data.alt} />
                }
                <Typography>{data.label}</Typography>
            </StyledStack>
        </Link>
    )
}

export default FooterContactLink


