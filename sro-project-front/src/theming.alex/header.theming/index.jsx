import './style.css';


function HeaderTheming() {
    return (
        <div className="body">
            <div className="containerHeader">
                <div className="flex-header">
                    <div className="logo">
                        <div className="container-o">
                            <h2>O</h2>
                            <div className="container-s">
                                <h3>S</h3>
                            </div>
                            <div className="container-r">
                                <h3>R</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container__middle flex-header">
                        <div className="search">
                            <label className="search-label" htmlFor="search">Buscar Producto</label>
                            <input className="input-search" type="search" />
                            <p>🔎</p>
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
                        </div>
                    </div>

                    <div className="container-login flex-header">
                        <div className="login">
                            <a href="#">Identificate</a>
                        </div>
                        <div className="basket">
                            <a href="#">🛒</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="barra__about">
                <a href="#" className="barra-a">trabaja con nosotros</a>
                <a href="#" className="barra-a">sobre nosotros</a>
                <a href="#" className="barra-a">ayuda</a>
                <a href="#" className="barra-a">atencion al cliente</a>
            </div>
        </div>
    );
}

export default HeaderTheming;