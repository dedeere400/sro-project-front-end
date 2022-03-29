import React, { useState, useEffect } from "react";
import Cart from "../cart";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header({
    onPokemonSearch,
    isLoggedIn,
    onLogout,
    cartStore,
    updateCart,
}) {
    const [t, i18n] = useTranslation("global");
    const [search, setSearch] = useState("");
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            onPokemonSearch(search);
        }, 1000);

        return () => clearTimeout(delay);
    }, [search]);

    return (
        <React.Fragment>
            <div className="body">
                <div className="containerHeader">
                    <div className="flexHeader">
                        <Link className="linkLogo" to="/">
                            <div className="logo">
                                <div className="containerO">
                                    <h2 className="encabezadoO mb-0">O</h2>
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
                            {isLoggedIn && (
                                <div className="search">
                                    <label className="searchLabel" htmlFor="search">
                                        {t("header.cromo")}
                                    </label>
                                    <input
                                        className="inputSearch"
                                        type="search"
                                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                    />
                                    {/* <p className='lupa'>🔎</p> */}
                                </div>
                            )}

                            <div className="containerLang d-flex jusctify-between">
                                <button
                                    className="btnHeader"
                                    onClick={() => i18n.changeLanguage("es")}
                                >
                                    ES
                                </button>
                                <button
                                    className="btnHeader"
                                    onClick={() => i18n.changeLanguage("en")}
                                >
                                    EN
                                </button>
                            </div>

                            <div className="themming">
                                <label htmlFor="temming">{t("header.theme")}</label>
                                <input type="checkbox" />
                            </div>
                        </div>

                        <div className="containerLogin flexHeader">
                            <div className="login">
                                {!isLoggedIn && (
                                    <Link className="logsUser" to="/">
                                        {t("header.create-account")}
                                    </Link>
                                )}
                                {!isLoggedIn && (
                                    <Link className="logsUser" to="/login">
                                        {t("header.auth")}
                                    </Link>
                                )}
                                {isLoggedIn && (
                                    <Link className="logsUser" to="/myAccount">
                                        {t("header.my-account")}
                                    </Link>
                                )}
                                {isLoggedIn && (
                                    <Link className="logsUser" to="#" onClick={() => onLogout()}>
                                        {t("header.auth-disconnect")}
                                    </Link>
                                )}
                            </div>
                            {isLoggedIn && (
                                <div className="basket">
                                    <Link to="#" onClick={() => setShowCart(true)}>
                                        🛒
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="barraAbout">
                    {isLoggedIn && (
                        <Link to="pokemons" className="barraA">
                            {t("header.pokemons")}
                        </Link>
                    )}
                    <Link to="workWithUs" className="barraA">
                        {t("header.work-with-us")}
                    </Link>
                    <Link to="about" className="barraA">
                        {t("header.about")}
                    </Link>
                    <Link to="help" className="barraA">
                        {t("header.ayuda")}
                    </Link>
                    <Link to="costumerService" className="barraA">
                        {t("header.costumer-service")}
                    </Link>
                </div>
                <Cart
                    show={showCart}
                    showCart={setShowCart}
                    cartStore={cartStore}
                    updateCart={updateCart}
                ></Cart>
            </div>
        </React.Fragment>
    );
}

export default Header;

