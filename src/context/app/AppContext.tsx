import { createContext } from "react"
import { Breakpoint } from "@mui/material"
import {AppMenuItem} from "@/types/menu";


export type MenuState = {
  open: boolean
  items: Array<AppMenuItem>
}

export type GeoData = {
  "ip": string,
  "version": string,
  "city": string,
  "country": string,
  "countryName": string,
  "countryCode": string,
}
export interface AppContextState {
  menu: MenuState
  breakPoint: Breakpoint
  px:  any
  toggleMenu: (value?: boolean) => void,
  geoData: GeoData | null
}

export const INITIAL_STATE: AppContextState = {
  menu: {
     open: false,
      items: [  {id: "home", label: "INICIO", path: "/" },
        {id: "about_us", label: "QUIÉNES SOMOS", path: "/about" },
        {id: "services", label: "CONÓCENOS", path: "/know_us" },
        {id: "plans", label: "PLANES", path: "#plans" },
        {id: "contact", label: "CONTACTO", path: "#contact" },
      //  {id: "sign_in", label: "Iniciar Sesión", path: "https://app.helpia.com/auth/signin", external: true  },
      //  {id: "sign_up", label: "registrarsen", path: "https://app.helpia.com/auth/signup", external: true  },

      ]
  },
  px: {xs: 1, md:6, lg:10},
  breakPoint: "lg",
  geoData: null

} as AppContextState

export const AppContext = createContext<AppContextState>(INITIAL_STATE)
