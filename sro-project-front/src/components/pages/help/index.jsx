import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

function Help() {

    const [t] = useTranslation('global')

    return (
        <React.Fragment>
            <h3 className='text-center mt-5 bg-dark p-3 text-white'>{t("help.help-how-to")}</h3>
            <Row className="cardShadow">
                <Col className='p-0'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{t("help.help-rules")}</Card.Title>
                            {/* <Card.Text> */}
                            <ul className='ulHelp'>
                                <li className='liHelp'>{t("help.help-li1")}</li>
                                <li className='liHelp'>{t("help.help-li2")}</li>
                                <li className='liHelp'>{t("help.help-li3")}</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            < Row className="cardShadow none" >
                <Col className="p-0">
                    <Card>
                        <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                    </Card>
                </Col>
            </Row >
        </React.Fragment >
    );
}

export default Help;