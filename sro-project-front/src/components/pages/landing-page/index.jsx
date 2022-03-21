import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';



function LandingPage() {
    return (
        <main className='mainRegister'>
            <h1 className='encabezadoPoke text-center mb-4 text-light'>Venta de Cromos de Pokemons</h1>
            <Form className='registerForm d-flex flex-column p-2 mb-5 bg-white'>
                <Form.Text className="text-muted">
                    <h3 className='center text-danger'>Identificate o registrate</h3>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>Nombre</Form.Label>
                    <Form.Control className='input' type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>Apellidos</Form.Label>
                    <Form.Control className='input' type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label m-0'>Email</Form.Label>
                    <Form.Control className='input' type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>Contraseña</Form.Label>
                    <Form.Control className='input' type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label m-0'>Email de PayPal</Form.Label>
                    <Form.Control className='input' type="email" />
                </Form.Group>

                <Button className='btnRegister m-auto' variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </main >
    );
}

export default LandingPage;