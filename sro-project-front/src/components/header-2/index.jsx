// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import React, { useContext } from 'react';
// import ThemingSelector from '../../shared/theming/theming.context';
// import { useTranslation } from 'react-i18next';
// import { ThemingContext } from '../../shared/theming/theming.context';



// import './style.css';



// function Header() {

//     const [t, i18n] = useTranslation('global')
//     const [theming, changeTheme] = useContext(ThemingContext)

//     return (
//         <React.Fragment>
//             <header className="header">

//                 <div className='header__user-menu'>
//                     <Button variant="link" onClick={() => { i18n.changeLanguage('es') }}>ES</Button>
//                     <Button variant="link" onClick={() => { i18n.changeLanguage('es') }}>EN</Button>
//                     <ThemingSelector />
//                     <Button variant={theming.primary}>Success</Button>
//                     <Button variant={`outline-${theming.primary}`}>Warning</Button>
//                 </div>
//             </header>
//             <main className="headerMain">
//                 <Form>
//                     <Form.Text className="text-muted">
//                         Si no estas identificado, por favor registrate rellenando el formulario a continuacion
//                     </Form.Text>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Escriba tu Nombre</Form.Label>
//                         <Form.Control type="text" />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Escriba tus Apellidos</Form.Label>
//                         <Form.Control type="text" />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Escriba tu email</Form.Label>
//                         <Form.Control type="email" />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Escriba tu contraseña</Form.Label>
//                         <Form.Control type="password" />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Escriba tu cuenta PayPal</Form.Label>
//                         <Form.Control type="email" />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </main>
//         </React.Fragment>
//     );
// }

// export default Header;