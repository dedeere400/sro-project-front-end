import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

const typeColors = {
    bug: "bug-bg",
    electric: "electric-bg",
    fire: "fire-bg",
    flying: "flying-bg",
    grass: "grass-bg",
    ground: "ground-bg",
    normal: "normal-bg",
    poison: "poison-bg",
    water: "water-bg",
};

function Pokemon({ name, url, image, updateCart }) {
    const [types, setTypes] = useState([]);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then((data) => data.json())
            .then((response) => setTypes(response.types));
    }, [name]);

    return (
        <Card key={url} className="pokemon">
            <Card.Title className="pokemon-name">{name}</Card.Title>
            <Card.Img src={image} />
            <Card.Text className="pokemon-types">
                <span className="m-1">€22.00</span>
                <Row xs={1} md={2} className="g-2">
                    {types.map((type, index) => (
                        <Badge
                            className={
                                index === 0
                                    ? `first-type ${typeColors[type.type.name]}`
                                    : typeColors[type.type.name]
                            }
                        >
                            {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                        </Badge>
                    ))}
                    {types.length === 1 && <Badge className="none-bg"> </Badge>}
                </Row>
                <Row style={{ marginTop: "5px" }}>
                    <Col xs={4}>
                        <Form.Control
                            type="number"
                            min={1}
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                        />
                    </Col>
                    <Col xs={8}>
                        <Button
                            type="submit"
                            variant="success"
                            className="add-cart-button"
                            onClick={() => {
                                if (localStorage.getItem("cart")) {
                                    let cart = JSON.parse(localStorage.getItem("cart"));
                                    let pokemons = cart.pokemons;
                                    const pokemonIndex = pokemons.findIndex(
                                        (pokemon) => pokemon.name === name
                                    );
                                    //Si el pokemon ya existe en el carrito de compras
                                    if (pokemonIndex !== -1) {
                                        pokemons[pokemonIndex].total =
                                            parseFloat(pokemons[pokemonIndex].total) +
                                            parseFloat(total);
                                        pokemons[pokemonIndex].totalPrice =
                                            parseFloat(pokemons[pokemonIndex].totalPrice) +
                                            22 * parseFloat(total);
                                    } else {
                                        //si el pokemon no existe en el carrito
                                        pokemons.push({ name, total, totalPrice: 22 * total });
                                    }
                                    //Actualizamos los pokemons del carrito
                                    cart.pokemons = pokemons;
                                    //Actualizamos el precio total de todo el carrito
                                    cart.totalPrice =
                                        parseFloat(cart.totalPrice) + 22 * parseFloat(total);
                                    //Actualizamos el cart del local storage y el el estado cart
                                    localStorage.setItem("cart", JSON.stringify(cart));
                                    updateCart(cart);
                                } else {
                                    const cart = JSON.stringify({
                                        pokemons: [{ name, total, totalPrice: 22 * total }],
                                        totalPrice: 22 * total,
                                    });
                                    //Actualizamos el cart del local storage y el el estado cart
                                    localStorage.setItem("cart", cart);
                                    updateCart(cart);
                                }
                            }}
                        >
                            Agregar
                        </Button>
                    </Col>
                </Row>
            </Card.Text>
        </Card>
    );
}

export default Pokemon;
