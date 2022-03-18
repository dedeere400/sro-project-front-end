import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function LandingPage() {
    return (
        <Form>
            <Form.Text className="text-muted">
                Si no estas identificado, por favor registrate rellenando el formulario a continuacion
            </Form.Text>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escriba tu Nombre</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escriba tus Apellidos</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Escriba tu email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escriba tu contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escriba tu cuenta PayPal</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LandingPage;