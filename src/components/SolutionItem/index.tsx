import  {FC} from "react"
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import {styled, Typography} from "@mui/material";




const StyledImage = styled("img")(() => ({
    width: "auto",
    height: "150px",
}))

type SolutionItemProps = {
    title: string
    text: string

    src: string
}
const SolutionItem:FC<SolutionItemProps> = ({src, title, text})=> {


    return (<Stack alignItems={"center"}>
        <StyledImage
            src={src}
            alt={title}
            loading="lazy"

        />

        <Typography variant="h5" sx={{fontWeight: "bold", color: "primary.light", my:2}}>{title}</Typography>
        <Box sx={{width: {xs:"100%", sm: "80%", lg: "75%"}, textAlign: "center"}}>
            <Typography >{text}</Typography>
        </Box>
    </Stack>)
}

export default SolutionItem