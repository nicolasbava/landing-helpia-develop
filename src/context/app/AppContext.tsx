import { createContext } from "react"
import { Breakpoint } from "@mui/material"
import {AppMenuItem} from "@/types/menu";
import {ResponsiveStyleValue} from "@mui/system";
import {Property} from "csstype";



export type MenuState = {
  open: boolean
  items: Array<AppMenuItem>
}
export interface AppContextState {
  menu: MenuState
  breakPoint: Breakpoint
  px:  any
  toggleMenu: (value?: boolean) => void
}

export const INITIAL_STATE: AppContextState = {
  menu: {
     open: false,
      items: [  {id: "home", label: "Inicio", path: "/" },
        {id: "services", label: "Servicios", path: "/services" },
        {id: "about_us", label: "¿Quiénes Somos?", path: "/about" },
        {id: "contact", label: "Contacto", path: "/contact" },
        {id: "plans", label: "PLANES", path: "/plans" },
        {id: "sign_in", label: "Iniciar Sesión", path: "https://app.helpia.com/auth/signin", external: true  },]
  },
  px: {xs: 1, md:8, lg:32},
  breakPoint: "lg",

} as AppContextState

export const AppContext = createContext<AppContextState>(INITIAL_STATE)
