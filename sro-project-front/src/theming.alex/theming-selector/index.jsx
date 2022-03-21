import React, { useContext } from "react";
import HeaderTheming from "../header.theming";
import { ThemingContext } from "../theming.context";



function ThemingSelector() {
    const [theming, updateTheming] = useContext(ThemingContext);

    const changeTheme = e => {
        updateTheming(e.target.value);
    }

    return (
        <React.Fragment>
            <HeaderTheming></HeaderTheming>
            <div onChange={changeTheme}>
                <label htmlFor="light">Light</label>
                <input id="light" name="theme" type='radio' value='L' defaultChecked={theming === 'L'}></input>
                <input id="dark" name="theme" type='radio' value='D' defaultChecked={theming === 'D'}></input>
                <label htmlFor="dark">Dark</label>
            </div>
        </React.Fragment>
    )
}


export default ThemingSelector;