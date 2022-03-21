import { useState } from "react";
import { createContext } from "react";

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState[false];
    const theme = isDark ? themes.dark : themes.light;
    const toogleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <ThemeContext.ThemeProvider value={[{ theme, isDark }, toogleTheme]}>
            {children}
        </ThemeContext.ThemeProvider>
    );
};