import { createContext, useContext, useState } from "react";

//1. create context object
const DarkModeContext = createContext();

//2. create the context provider (quasi-component)
function DarkModeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
} 

const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}
//3. finally, export the context the provider

export { useDarkMode, DarkModeProvider }

