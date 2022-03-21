import Card from 'react-bootstrap/Card';
import './style.css';


function Footer() {
    return (
        <footer className="footer">
            <Card className='footerCard p-2'>
                <Card.Body>
                    <Card.Text className='text-center'>
                        Todos los derechos reservados
                    </Card.Text>
                </Card.Body>
            </Card>
        </footer>
    );
}

export default Footer;