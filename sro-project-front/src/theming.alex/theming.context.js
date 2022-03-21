import { createContext } from "react";

/*
* 1. Crear el contexto para el theming (ThemingContext)
* 2. Crear el componente provider (ThemingProvider)
* 3. Utilizar el theming provider, en este caso, en el index.js envolviendo al App.js
     Esto lo hago cuando quiero que el App.js utilice el useContext

  4. Crear las variables JS que tengan los valores CSS del theming (lo que va a cambiar cuando el theming cambie)
     (estos son en este caso lightTheme y darkTheme)

  5. Crear la función de generación y actualización de las variables CSS en el body, 
     en función del theming actual (updateThemingCssVariables y updateCurrentTheming del archivo theming.provider.jsx)
  
  6. Crear el componente de actualización del Theming (ThemingSelector)
  7. En los componentes de la página, utilizar en sus CSS las CSS Variables del theming en lugar 
     de valores fijos
*  0f9b88
*/


// Creo un objeto con los valores para cada tipo de tema
export const lightTheme = {
    primary: {
        color: '#000000',
    },
    secondary: {
        color: '#273446'
    },
    typography: {
        color: '#0f9b88'
    }
}

export const darkTheme = {
    primary: {
        color: 'black',
    },
    secondary: {
        color: 'orange'
    },
    typography: {
        color: 'white'
    }
}


export const ThemingContext = createContext();
