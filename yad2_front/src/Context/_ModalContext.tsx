import { createContext } from "react";
import { ChildrenType } from "../types/general";



type Props = {
    showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | null;
}


const ModalContext = createContext({ showState: null } as Props);


export default function ModalContextProvider({ showState, children }: ChildrenType & Props) {



    return (
        <>
            <ModalContext.Provider value={{ showState }}>
                {children}
            </ModalContext.Provider>

        </>
    );
};
