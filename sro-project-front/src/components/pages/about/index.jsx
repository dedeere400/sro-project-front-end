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
        <Container className="bgMacho" fluid>
            <Row className="cardShadow">
                <Col className="p-0">
                    <Card>
                        <Card.Body>
                            <Card.Title>{t("about.our-history-header")}</Card.Title>
                            <Card.Text>
                                {t("about.our-story")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="cardShadow">
                <Col className="p-0">
                    <Card>
                        <Card.Body>
                            <Card.Title>{t("about.our-trayectory-header")}</Card.Title>
                            <Card.Text>
                                {t("about.our-trayectory")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="m-5 cardShadow none">
                <Col className="p-0">
                    <Card>
                        <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;