// import React, { useContext } from "react";
// import HeaderTheming from "../header.theming";
// import { ThemingContext } from "../theming.context";
// import { THEME } from '../theming.provider';



// function ThemingSelector() {
//     const [theming, changeTheming] = useContext(ThemingContext);


//     const changeTheme = e => {
//         changeTheming(e.target.value);
//     }

//     return (
//         <React.Fragment>
//             <HeaderTheming></HeaderTheming>
//             <div onChange={changeTheme}>
//                 <label htmlFor="light">Light</label>
//                 <input id="light" name="theme" type='radio' value='L' defaultChecked={theming === 'L'}></input>
//                 <input id="dark" name="theme" type='radio' value='D' defaultChecked={theming === 'D'}></input>
//                 <label htmlFor="dark">Dark</label>
//             </div>
//         </React.Fragment>
//     )
// }


// export default ThemingSelector;

// const ActiveMode = theming === theming.light ? IconNight : IconDay; este esta copiado sin sentido


// function ThemingSelector() {
//     const [theming, changeTheming] = useContext(ThemingContext);
//     const ActiveMode = theming === theming.light ? IconNight : IconDay;

//     // const changeTheme = e => {
//     //     changeTheming(e.target.value);
//     // }

//     return (
//         <button className="theme-selector" onClick={changeTheme}>
//             <ActiveMode></ActiveMode>
//         </button>
//     );
// }


// export default ThemingSelector;