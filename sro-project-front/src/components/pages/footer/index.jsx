import Card from 'react-bootstrap/Card';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


function Footer() {

    const [t] = useTranslation('global')

    return (
        <footer className="footer">
            <Card className='footerCard p-2'>
                <Card.Body className='text-center'>
                    <Link to='privacyPolicy' className='decoration  text-white' >
                        Politica de Privacidad
                    </Link>


                    <section className='d-flex justify-content-center gap'>
                        <div><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></div>
                        <div><a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer">Twitter</a></div>
                        <div><a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">Instagram</a></div>
                    </section>
                    <Card.Text>
                        {t("footer.copyright")}
                    </Card.Text>
                </Card.Body>
            </Card>

        </footer >
    );
}

export default Footer;