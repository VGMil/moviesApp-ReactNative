
import { createContext, PropsWithChildren, useState } from 'react';
import { darkTheme, lightTheme, Theme } from "../../Core/Utils/constants/theme.constants";
//Crear tipado
interface ThemeContextType{
    theme:Theme
    toggleTheme:()=>void
}
//Crear contexto por defecto
export const ThemeContext = createContext<ThemeContextType>({
    theme:lightTheme,
    toggleTheme:()=>{}
})
//Implementar provider del contexto del tema
export const ThemeProvider:React.FC<PropsWithChildren> = ({children}:PropsWithChildren)=>{
    const [darkmode, setDarkMode] = useState<boolean>(false)
    //Funcion  que cambia el valor de darkmode
    const toggleTheme = () => {
      setDarkMode(!darkmode);
    };

    return(
        <ThemeContext.Provider value = {{
            //Si darkmode es true, entonces el tema es darkTheme, sino es lightTheme
            theme:darkmode ? darkTheme : lightTheme,
            toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}