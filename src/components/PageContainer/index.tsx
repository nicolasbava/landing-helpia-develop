import React from "react";
import Box from "@mui/material/Box"
import Head from "next/head";
import {useAppContext} from "@/context/app";


type PageContainerProps = {
    children: React.ReactNode | Array<React.ReactNode>
    title: string
}

type PageSectionProps = Pick<PageContainerProps, "children">


export const PageSection: React.FC<PageSectionProps> = ({children}) => {

    const {toggleMenu, px} = useAppContext()

    React.useEffect(()=>{
        toggleMenu(false)
    }, [])

    return (
        <Box sx={{px}}>
            {children}
        </Box>
    )

}


const PageContainer: React.FC<PageContainerProps> = ({children, title}) => {

    const {toggleMenu} = useAppContext()

    React.useEffect(()=>{
        toggleMenu(false)
    }, [])

    return (<>
        <Head>
            <title>{`Helpia - ${title}`}</title>
        </Head>
        <Box sx={{minHeight: "450px"}}>
            {children}
        </Box>
    </>)

}

export default PageContainer