import './style.css';
import BackgroundA from '../../../shared/background';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function TrabajaNosotros() {
    return (
        <section className="work">
            <BackgroundA></BackgroundA>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://imgur.com/Ig5g1Fp.png" />
                </Card>
            </Col>
        </section>
    );
}

export default TrabajaNosotros;