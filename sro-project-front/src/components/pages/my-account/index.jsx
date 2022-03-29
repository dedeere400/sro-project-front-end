import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

function MyAccount({ updateLoggedIn }) {
    const [t] = useTranslation("global");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [paypalEmail, setPaypalEmail] = useState("");
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = () => {
        fetch("http://localhost:4000/users", {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Successs:", response);
                localStorage.removeItem("access_token");
                updateLoggedIn(false);
                setRedirectToHome(true);
            })
            .catch((error) => {
                console.error("Errors:", error);
            });
    };

    useEffect(() => {
        fetch("http://localhost:4000/users", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        })
            .then((res) => res.json())
            .then((response) => {
                setFirstName(response.firstName);
                setLastName(response.lastName);
                setEmail(response.email);
                setPaypalEmail(response.email);
                console.log("Successs:", response);
            })
            .catch((error) => {
                console.error("Errors:", error);
            });
    }, []);

    return (
        <main className="mainRegister">
            {redirectToHome && <Navigate to={{ pathname: "/" }} />}
            <h1 className="encabezadoPoke text-center mb-4 text-light">
                {t("header.my-account")}
            </h1>
            <Form
                className="registerForm d-flex flex-column p-2 mb-5 bg-white"
                onSubmit={(e) => {
                    e.preventDefault();

                    fetch("http://localhost:4000/users", {
                        method: "PATCH",
                        body: JSON.stringify({
                            firstName,
                            lastName,
                            email,
                            paypalEmail,
                        }),
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("access_token"),
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((response) => {
                            console.log("Success:", response);
                        })
                        .catch((error) => console.error("Error:", error));
                }}
            >
                <Form.Text className="text-muted">
                    <h3 className="center text-danger">
                        {t("myAccount.update-my-account")}
                    </h3>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label m-0">
                        {t("landing.land-name")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label m-0">
                        {t("landing.land-surnames")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="text"
                        value={lastName}
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
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label m-0">
                        {t("landing.land-paypal")}
                    </Form.Label>
                    <Form.Control
                        className="input"
                        type="email"
                        value={paypalEmail}
                        onChange={(e) => {
                            setPaypalEmail(e.target.value);
                        }}
                    />
                </Form.Group>
                <Row>
                    <Button className="btnUpdate m-auto" variant="primary" type="submit">
                        {t("myAccount.update")}
                    </Button>
                    <Button
                        className="btnDelete m-auto"
                        variant="danger"
                        onClick={deleteUser}
                    >
                        {t("myAccount.delete")}
                    </Button>
                </Row>
            </Form>
        </main>
    );
}

export default MyAccount;
