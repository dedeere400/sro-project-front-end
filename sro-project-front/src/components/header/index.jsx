import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Header() {

    const [t, i18n] = useTranslation('global')

    return (
        <React.Fragment>
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

                                <label className="searchLabel" htmlFor="search">{t("header.cromo")}</label>
                                <input className="inputSearch" type="search" />
                                {/* <p className='lupa'>🔎</p> */}
                            </div>

                            <div className="containerLang d-flex jusctify-between">
                                <button className='btnHeader' onClick={() => i18n.changeLanguage('es')}>ES</button>
                                <button className='btnHeader' onClick={() => i18n.changeLanguage('en')}>EN</button>
                            </div>

                            <div className="themming">
                                <label htmlFor="temming">{t("header.theme")}</label>
                                <input type="checkbox" />
                                {/* <button className='toogleTheme' onClick={toggleTheme}>
                                    Modos {isDark ? 'dark' : 'light'}
                                </button> style={{ backgroundColor: theme.backgroundColor, color: theme.color }}*/}
                            </div>
                        </div>

                        <div className="containerLogin flexHeader">
                            <div className="login">
                                <Link to="#">{t("header.auth")}</Link>
                            </div>
                            <div className="basket">
                                <Link to="#">🛒</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="barraAbout">
                    <Link to="workWithUs" className="barraA">{t("header.work-with-us")}</Link>
                    <Link to="about" className="barraA">{t("header.about")}</Link>
                    <Link to="help" className="barraA">{t("header.ayuda")}</Link>
                    <Link to="costumerService" className="barraA">{t("header.costumer-service")}</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;