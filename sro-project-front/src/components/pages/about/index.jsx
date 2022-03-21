import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next';
import './style.css';

function AboutUs() {

    const [t] = useTranslation('global')

    return (
        <Container fluid>
            <Row className="m-5 cardShadow">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nuestra Historia</Card.Title>
                            <Card.Text>
                                {t("about.our-story")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="m-5 cardShadow">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nuestra Trayectoria</Card.Title>
                            <Card.Text>
                                {t("about.our-trayectory")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="m-5 cardShadow">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;