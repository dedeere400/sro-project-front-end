import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



// import { ThemeContext } from '../../theme.toogle/theme';



function Header() {

    const [t, i18n] = useTranslation('global')

    // const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    // console.log('theme', theme)


    return (
        <React.Fragment>
            <h1>{t("header.hello-world")}</h1>
            <button onClick={() => i18n.changeLanguage('es')}>es</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <div className="body">
                <div className="containerHeader">
                    <div className="flexHeader">
                        <Link className='linkLogo' to="/">
                            <div className="logo">

                                <div className="containerO">
                                    <h2 className='encabezadoO mb-0'>O</h2>
                                    <div className="containerS">
                                        <h6>S</h6>
                                    </div>
                                    <div className="containerR">
                                        <h6>R</h6>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="containerMiddle flexHeader">
                            <div className="search">

                                <label className="searchLabel" htmlFor="search">Buscar Cromo</label>
                                <input className="inputSearch" type="search" />
                                {/* <p className='lupa'>🔎</p> */}
                            </div>

                            <div className="containerLang">
                                <select className="selecto" name="lang" id="none">
                                    <option value="En">Es</option>
                                    <option value="Es">En</option>
                                </select>
                            </div>

                            <div className="themming">
                                <label htmlFor="temming">Cambiar tema</label>
                                <input type="checkbox" />
                                {/* <button className='toogleTheme' onClick={toggleTheme}>
                                    Modos {isDark ? 'dark' : 'light'}
                                </button> style={{ backgroundColor: theme.backgroundColor, color: theme.color }}*/}
                            </div>
                        </div>

                        <div className="containerLogin flexHeader">
                            <div className="login">
                                <Link to="#">Identificate</Link>
                            </div>
                            <div className="basket">
                                <Link to="#">🛒</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="barraAbout">
                    <Link to="workWithUs" className="barraA">trabaja con nosotros</Link>
                    <Link to="#" className="barraA">sobre nosotros</Link>
                    <Link to="#" className="barraA">ayuda</Link>
                    <Link to="#" className="barraA">atencion al cliente</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;