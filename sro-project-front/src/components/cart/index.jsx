import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import "./style.css";

function Cart({ show, showCart, cartStore, updateCart }) {
    const [t, i18n] = useTranslation("global");

    return (
        <Offcanvas show={show} onHide={() => showCart(false)} placement="end">
            <Offcanvas.Header closeButton={() => showCart(false)}>
                <Offcanvas.Title>{t("cart.name")}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartStore?.pokemons?.map((pokemon) => (
                    <Card className="cart-item" key={pokemon.name}>
                        <Card.Body>
                            <p
                                className="remove-item"
                                onClick={() => {
                                    console.log("click");
                                    let cart = JSON.parse(localStorage.getItem("cart"));
                                    let pokemons = cart?.pokemons;
                                    const pokemonIndex = pokemons.findIndex(
                                        (poke) => poke.name === pokemon.name
                                    );
                                    const pokemonTotalPrice = pokemons[pokemonIndex].totalPrice;

                                    pokemons.splice(pokemonIndex, 1);
                                    cart.pokemons = pokemons;
                                    cart.totalPrice =
                                        parseFloat(cart.totalPrice) - pokemonTotalPrice;
                                    localStorage.setItem("cart", JSON.stringify(cart));
                                    updateCart(cart);
                                }}
                            >
                                x
                            </p>
                            <Row>
                                <Col>{`${pokemon.name} x${pokemon.total}`}</Col>
                                <Col className="cart-item-price">
                                    {`€${pokemon.totalPrice.toFixed(2)}`}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
                <div className="payment-section">
                    <hr />
                    <Row>
                        <Col xs={9}>
                            <p>
                                TOTAL:{" "}
                                {`€${JSON.parse(
                                    localStorage.getItem("cart")
                                )?.totalPrice.toFixed(2)}`}
                            </p>
                        </Col>
                        <Col xs={3}>
                            <Button>Pagar</Button>
                        </Col>
                    </Row>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;
