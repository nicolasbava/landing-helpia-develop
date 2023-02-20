import { createTheme, responsiveFontSizes } from "@mui/material"


const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
        fontFamily: "Poppins"
    },
    palette: {
        mode: "light",

        primary: { // greens - verdes
            main: "#42FF14",
            light: "#94FF7A",
            dark: "#22AD00",
        },
        secondary: { // blue - azul
            main: "#303287",
            dark: "#15163B",
            light: "#5A5CC4",
        },
        error: { // rojo
            main: "#E9132D",
            light: "#E9132D40",
            dark: "#A91123",
        },
        text: { // oscuro a mas claro
            primary: "#333333",
            secondary: "#4D4D4D",
            disabled: "#999999",
        },

        background: {
            default: "#fff",
        },
    },


    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

})
export default responsiveFontSizes(theme)
