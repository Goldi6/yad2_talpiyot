import { createContext } from "react"
import useBreakPoint from "../hooks/useBreakPoint"





export const ScreenContext = createContext(window.innerWidth < 880)

type Props = { children: React.ReactNode }

export default function ScreenContextProvider({ children }: Props) {


    const smallScreen = useBreakPoint()


    return (
        <ScreenContext.Provider value={smallScreen}>
            {children}
        </ScreenContext.Provider>
    )
}