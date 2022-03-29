import { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useTranslation } from "react-i18next";

function Login({ onLoggedIn }) {
    const [t] = useTranslation("global");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    return (
        <main className="mainRegister">
            {loginSuccess && <Navigate to={{ pathname: "/pokemons" }} />}
            <h1 className="encabezadoPoke text-center mb-4 text-light">
                {t("landing.land-venta")}
            </h1>
            <Form
                className="loginForm d-flex flex-column p-2 mb-5 bg-white"
                onSubmit={(e) => {
                    e.preventDefault();

                    fetch("http://localhost:4000/auth/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((response) => {
                            setLoginSuccess(true);
                            onLoggedIn(true);
                            localStorage.setItem("access_token", response.access_token);
                            console.log("Success:", response);
                        })
                        .catch((error) => {
                            setLoginSuccess(false);
                            onLoggedIn(false);
                            console.error("Error:", error);
                        });
                }}
            >
                <Form.Text className="text-muted">
                    <h3 className="center text-danger">{t("landing.login")}</h3>
                </Form.Text>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
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

                <Button className="btnRegister m-auto" variant="primary" type="submit">
                    {t("landing.land-submit")}
                </Button>
            </Form>
        </main>
    );
}

export default Login;
