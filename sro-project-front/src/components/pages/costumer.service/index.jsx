import './style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

function CostumerService() {

    const [t] = useTranslation('global')

    return (
        <React.Fragment>
            <h1 className='text-center mt-5 bg-dark p-3 text-white'>{t("costService.costumer-headre")}</h1>
            <Container className='containerCServise d-flex flex-column'>
                <Card className="costumerServiceCard">
                    <Card.Body>
                        <Card.Title>{t("costService.costumer-title")}</Card.Title>
                        <Card.Text className='pedidosText m-0'>
                            {t("costService.costumer-text")}
                        </Card.Text>
                        <Card.Text>
                            {t("costService.costumer-email")}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 
                <Card className="costumerServiceCard" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Tus pedidos</Card.Title>
                        <Card.Text className='pedidosText m-0'>
                            Rastrear pedidos
                        </Card.Text>
                        <Card.Text>
                            Editar o cancelar pedidos
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="costumerServiceCard" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Tus pedidos</Card.Title>
                        <Card.Text className='pedidosText m-0'>
                            Rastrear pedidos
                        </Card.Text>
                        <Card.Text>
                            Editar o cancelar pedidos
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="costumerServiceCard" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Tus pedidos</Card.Title>
                        <Card.Text className='pedidosText m-0'>
                            Rastrear pedidos
                        </Card.Text>
                        <Card.Text>
                            Editar o cancelar pedidos
                        </Card.Text>
                    </Card.Body>
                </Card> */}

                <section className="workContainerCenter p-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                        </Card>
                    </Col>
                </section>
            </Container>

        </React.Fragment>
    );
}

export default CostumerService;