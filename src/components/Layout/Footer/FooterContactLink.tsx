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


type FooterContactLinkProps = {
    type: "whatsapp" | "mail" | "phone"
}
const FooterContactLink: React.FC<FooterContactLinkProps> = ({type}) => {



    const data: { iconClass: string, href: string, label: string } = React.useMemo(() => {
        switch (type) {
            case "whatsapp":
                return {
                    iconClass: "fa-brands fa-whatsapp",
                    label: "+549 11 310 04593",
                    href: "https://wa.me/5491131004593"
                }

            case "mail":
                return {
                    iconClass: "fa-regular fa-envelope",
                    label: "info@helpia.com",
                    href: "mailto:info@helpia.com"
                }

            case "phone":
                return {
                    iconClass: "fa-solid fa-phone",
                    label: "+598 94 602 736",
                    href: "tel:+59894602736"
                }

        }
    }, [type])

    return (
        <Link href={data.href} target='_blank'>
            <StyledStack direction="row" gap={1} alignItems="center">
                <Icon className={data.iconClass}/>
                <Typography>{data.label}</Typography>
            </StyledStack>
        </Link>
    )
}

export default FooterContactLink


