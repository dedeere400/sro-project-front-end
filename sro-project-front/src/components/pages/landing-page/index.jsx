import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

function LandingPage() {
    const [t] = useTranslation("global");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [paypalEmail, setPaypalEmail] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState(false);

    return (
        <main className="mainRegister">
            {registerSuccess && <Navigate to={{ pathname: "/login" }} />}
            <h1 className="encabezadoPoke text-center mb-4 text-light">
                {t("landing.land-venta")}
            </h1>
            <Form
                className="registerForm d-flex flex-column p-2 mb-5 bg-white"
                onSubmit={(e) => {
                    e.preventDefault();

                    fetch("http://localhost:4000/auth/register", {
                        method: "POST",
                        body: JSON.stringify({
                            firstName,
                            lastName,
                            email,
                            password,
                            paypalEmail,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .catch((error) => console.error("Error:", error))
                        .then((response) => {
                            console.log("Success:", response);
                            setRegisterSuccess(true);
                        });
                }}
            >
                <Form.Text className="text-muted">
                    <h3 className="center text-danger">{t("landing.land-id")}</h3>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label className="label m-0">
                        {t("landing.land-name")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="text"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label className="label m-0">
                        {t("landing.land-surnames")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="text"
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label m-0">
                        {t("landing.land-email")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword3">
                    <Form.Label className="label m-0">
                        {t("landing.land-pass")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword4">
                    <Form.Label className="label m-0">
                        {t("landing.land-paypal")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="email"
                        onChange={(e) => {
                            setPaypalEmail(e.target.value);
                        }}
                    />
                </Form.Group>

                <Button className="btnRegister m-auto" variant="primary" type="submit">
                    {t("landing.land-submit")}
                </Button>
            </Form>
        </main>
    );
}

export default LandingPage;
