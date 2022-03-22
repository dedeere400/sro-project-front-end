// import BackgroundA from '../../../shared/background';
import './style.css';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TrabajaNosotros() {

    const [t] = useTranslation('global')

    return (
        <section className="work d-flex flex-column">
            <div className="workContainerCenter p-2 mt-2 d-flex flex-column">
                <h1 className='workEncabezado mb-5 text-center'>{t("banner.banner-work")}</h1>
                <h5 className="textoPlano bold text-center">{t("banner.banner-p1")}</h5>
                <p className="textoPlano bold">{t("banner.banner-p2")}</p>
                <ul className="workList">
                    <li className="workListLi">{t("banner.banner-work-list1")}</li>
                    <li className="workListLi">{t("banner.banner-work-list2")}</li>
                </ul>
                <p className='requiere bold'>{t("banner.banner-require")}</p>
                <ul className="requiereList">
                    <li className="workListLi">{t("banner.banner-requiere-list1")}</li>
                    <li className="workListLi">{t("banner.banner-requiere-list2")}</li>
                </ul>
                <p className="textoPlano">{t("banner.banner-mail")} <span className='workContactEmail text-info'>sro@gmail.com</span></p>
            </div>
            <Row className="m-5 cardShadow">
                <Col className='none'>
                    <Card>
                        <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                    </Card>
                </Col>
            </Row>
        </section>

    );
}

export default TrabajaNosotros;