import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { Navigate } from "react-router-dom";
import Pokemon from "../pokemon";
import "./style.css";

function Pokemons({ pokemonSearch, isLoggedIn, cartStore, updateCart }) {
    const [pokemons, setPokemons] = useState([]);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [currentPage, setCurrentPage] = useState(1);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        //Creamos un interval para esperar que se actualice la sesión
        const interval = setTimeout(() => {
            setRedirectToLogin(!isLoggedIn);
            //limpiamos inmediatamente el interval para que no se quede corriendo
            clearTimeout(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [isLoggedIn]);



    useEffect(() => {
        if (!pokemonSearch) loadPokemons();
        else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
                .then((data) => data.json())
                .then((response) => {
                    let results = [];
                    results.push({
                        name: response.name,
                        url: `https://pokeapi.co/api/v2/pokemon/${response.id}/`,
                    });

                    const pokemonResults = results.map((pokemon) => {
                        let pokemonId = "000";
                        const pokemonNumber = parseInt(
                            pokemon.url
                                .replace("https://pokeapi.co/api/v2/pokemon", "")
                                .split("/")
                                .join("")
                        );

                        if (pokemonNumber < 10) pokemonId = `00${pokemonNumber}`;
                        else if (pokemonNumber < 100) pokemonId = `0${pokemonNumber}`;
                        else pokemonId = `${pokemonNumber}`;

                        pokemon[
                            "image"
                        ] = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemonId}.png`;

                        pokemon.name =
                            pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

                        return pokemon;
                    });

                    setPokemons(pokemonResults);
                });
        }
    }, [pokemonSearch]);

    function loadPokemons() {
        fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 10
            }&limit=10`
        )
            .then((data) => data.json())
            .then((response) => {
                const pokemonResults = response.results.map((pokemon) => {
                    let pokemonId = "000";
                    const pokemonNumber = parseInt(
                        pokemon.url
                            .replace("https://pokeapi.co/api/v2/pokemon", "")
                            .split("/")
                            .join("")
                    );

                    if (pokemonNumber < 10) pokemonId = `00${pokemonNumber}`;
                    else if (pokemonNumber < 100) pokemonId = `0${pokemonNumber}`;
                    else pokemonId = `${pokemonNumber}`;

                    pokemon[
                        "image"
                    ] = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemonId}.png`;

                    pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

                    return pokemon;
                });

                setPokemons(pokemonResults);
            });
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        loadPokemons();
    }, [currentPage]);

    return (
        <Container className="pokemons-container">
            {redirectToLogin && <Navigate to={{ pathname: "/login" }} />}
            <div className="pokemons-content">
                <Row>
                    {pokemons.map((pokemon) => (
                        <Pokemon
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                            image={pokemon.image}
                            cartStore={cartStore}
                            updateCart={updateCart}
                        />
                    ))}
                </Row>
            </div>

            <div className="paginator">
                <Pagination className="pagination">
                    <Pagination.First
                        disabled={currentPage === 1}
                        onClick={() => {
                            let firstPages = [];

                            for (let i = 1; i <= pages.length; i++) {
                                firstPages.push(i);
                            }

                            setPages(firstPages);
                            setCurrentPage(1);
                        }}
                    />
                    <Pagination.Prev
                        onClick={() => {
                            const firstPage = pages[0];

                            if (currentPage === firstPage) {
                                let nextPages = [];
                                for (let i = 5; i > 0; i--) {
                                    nextPages.push(firstPage - i);
                                }

                                setPages(nextPages);
                                setCurrentPage(nextPages.slice(-1)[0]);
                            } else {
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                        disabled={currentPage === 1}
                    />
                    {pages.map((page) => (
                        <Pagination.Item
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            active={page === currentPage}
                        >
                            {page}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        disabled={currentPage === 115}
                        onClick={() => {
                            const lastPage = pages.slice(-1)[0];

                            if (currentPage === lastPage) {
                                let nextPages = [];
                                for (let i = 1; i <= pages.length; i++) {
                                    nextPages.push(lastPage + i);
                                }

                                setPages(nextPages);
                                setCurrentPage(nextPages[0]);
                            } else {
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                    />
                    <Pagination.Last
                        disabled={currentPage === 115}
                        onClick={() => {
                            let lastPages = [];

                            for (let i = 111; i <= 115; i++) {
                                lastPages.push(i);
                            }

                            setPages(lastPages);
                            setCurrentPage(111);
                        }}
                    />
                </Pagination>
            </div>
        </Container>
    );
}

export default Pokemons;

