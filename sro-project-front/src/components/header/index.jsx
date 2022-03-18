import React from 'react';
import './style.css';


function Header() {
    return (
        <React.Fragment>
            <div className="body">
                <div class="containerHeader">
                    <div class="flex-header">
                        <div class="logo">
                            <div class="container-o">
                                <h2>O</h2>
                                <div class="container-s">
                                    <h3>S</h3>
                                </div>
                                <div class="container-r">
                                    <h3>R</h3>
                                </div>
                            </div>
                        </div>
                        <div class="container__middle flex-header">
                            <div class="search">
                                <label class="search-label" htmlFor="search">Buscar Producto</label>
                                <input class="input-search" type="search" />
                                <p>🔎</p>
                            </div>

                            <div class="containerLang">
                                <select class="selecto" name="lang" id="none">
                                    <option value="En">Es</option>
                                    <option value="Es">En</option>
                                </select>
                            </div>

                            <div class="themming">
                                <label for="temming">Cambiar tema</label>
                                <input type="checkbox" />
                            </div>
                        </div>

                        <div class="container-login flex-header">
                            <div class="login">
                                <a href="#">Identificate</a>
                            </div>
                            <div class="basket">
                                <a href="#">🛒</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="barra__about">
                    <a href="#" class="barra-a">trabaja con nosotros</a>
                    <a href="#" class="barra-a">sobre nosotros</a>
                    <a href="#" class="barra-a">ayuda</a>
                    <a href="#" class="barra-a">atencion al cliente</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;