import React, {useContext, useReducer} from "react"

import {AppContext, INITIAL_STATE, AppContextState} from "./AppContext"
import {AppReducer} from "./AppReducer"
import {Breakpoint, useMediaQuery, useTheme} from "@mui/material"

type AppProviderProps = {
    children: React.ReactNode | React.ReactNode[]
}

const AppProvider = ({children}: AppProviderProps) => {
    const [{breakPoint, menu, px}, dispatch] = useReducer(AppReducer, INITIAL_STATE)

    const toggleMenu = (payload?: boolean) => {
        dispatch({type: "setMenuOpened", payload})
    }
    const useWidth = (): Breakpoint => {
        const theme = useTheme();
        const keys = [...theme.breakpoints.keys].reverse();
        return (
            keys.reduce<Breakpoint | null>((output, key) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const matches = useMediaQuery(theme.breakpoints.up(key));
                return !output && matches ? key : output;
            }, null) || "xs"
        );
    }

    const width = useWidth()
    React.useEffect(() => {
        dispatch({type: "setBreakPoint", payload: width})
    }, [width])

    return (
        <AppContext.Provider
            value={{
                px,
                breakPoint,
                menu,
                toggleMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): AppContextState => useContext(AppContext)

export default AppProvider

