import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    
    return(
        <GlobalContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider