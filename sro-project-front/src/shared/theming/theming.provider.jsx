import { ThemingContext } from "./theming.context"
import { useState } from "react"


const light = {
    primary: "primary",
    secondary: "secondary"
}

const dark = {
    primary: "success",
    secondary: "info"
}



function ThemingProvider({ children }) {
    const [theming, updateTheming] = useState(light)

    const changeTheme = () => {

        updateTheming((v) => {

            return v === light ? dark : light
        })
    }

    return (
        <ThemingContext.Provider value={[theming, changeTheme]}>
            {children}
        </ThemingContext.Provider>
    )

}


export default ThemingProvider
