import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useTranslation } from 'react-i18next';



function LandingPage() {

    const [t] = useTranslation('global')

    return (
        <main className='mainRegister'>
            <h1 className='encabezadoPoke text-center mb-4 text-light'>{t("landing.land-venta")}</h1>
            <Form className='registerForm d-flex flex-column p-2 mb-5 bg-white'>
                <Form.Text className="text-muted">
                    <h3 className='center text-danger'>{t("landing.land-id")}</h3>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>{t("landing.land-name")}</Form.Label>
                    <Form.Control className='input' type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>{t("landing.land-surnames")}</Form.Label>
                    <Form.Control className='input' type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label m-0'>{t("landing.land-email")}</Form.Label>
                    <Form.Control className='input' type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>{t("landing.land-pass")}</Form.Label>
                    <Form.Control className='input' type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>{t("landing.land-paypal")}</Form.Label>
                    <Form.Control className='input' type="email" />
                </Form.Group>

                <Button className='btnRegister m-auto' variant="primary" type="submit">
                    {t("landing.land-submit")}
                </Button>
            </Form>
        </main >
    );
}

export default LandingPage;