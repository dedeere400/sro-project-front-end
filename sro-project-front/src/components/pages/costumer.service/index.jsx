import './style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import React from 'react';

function CostumerService() {
    return (
        <React.Fragment>
            <h1 className='text-center mt-5'>Hola. En qué podemos ayudarte?</h1>
            <Container className='d-flex justify-content-center flex-wrap'>
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
            </Container>

            <section className="workContainerCenter p-2">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                    </Card>
                </Col>
            </section>

        </React.Fragment>
    );
}

export default CostumerService;