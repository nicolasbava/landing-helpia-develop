import React, {forwardRef} from "react";
import Image, {ImageProps} from "next/image";


const Logo = forwardRef<any, Omit<ImageProps, "src">>((props, ref)=>
        <Image ref={ref} src={"https://statics.helpia.com/landing/helpia-logo.svg"} {...props} alt="Logotipo de empresa que dice Helpia" />
    )
Logo.displayName = "Logo";
export default Logo
