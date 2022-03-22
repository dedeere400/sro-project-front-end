import Card from 'react-bootstrap/Card';
import './style.css';
import { useTranslation } from 'react-i18next';


function Footer() {

    const [t] = useTranslation('global')

    return (
        <footer className="footer">
            <Card className='footerCard p-2'>
                <Card.Body>
                    <Card.Text className='text-center'>
                        {t("footer.copyright")}
                    </Card.Text>
                </Card.Body>
            </Card>
        </footer>
    );
}

export default Footer;