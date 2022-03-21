import BackgroundA from '../../../shared/background';
import './style.css';


function TrabajaNosotros() {
    return (


        <section className="work p-5">
            <BackgroundA></BackgroundA>
            <div className="workContainerCenter">
                <h1 className='workEncabezado mb-5'>Trabaje con nosotros</h1>
                <p className="textoPlano">Quieres formar parte de nuestra empresa?</p>
                <p className="textoPlano">Se ofrece</p>
                <ul className="workList">
                    <li className="workListLi">Jornada completa</li>
                    <li className="workListLi">Contrato indefinido superado el periodo de pruebas</li>
                    <li className="workListLi">Nivel alto/bilingüe de español y frances/ingles</li>
                    <li className="workListLi">Conocimientos a nivel usuario de informática</li>
                </ul>
                <p className="textoPlano">Envianos tu curriculum a <span className='workContactEmail text-info'>sro@gmail.com</span></p>
            </div>
        </section>

    );
}

export default TrabajaNosotros;