import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landing-page";
import Footer from "./components/pages/footer";
import TrabajaNosotros from "./components/pages/work-with-us";
import AboutUs from "./components/pages/about";
import Help from "./components/pages/help";
import Pokemons from "./components/pages/pokemons";
import Login from "./components/pages/login";
import MyAccount from "./components/pages/my-account";
import CostumerService from "./components/pages/costumer.service";
import PrivacyPolicy from "./components/pages/privacy-policy";

// import { ThemingContext } from './shared/theming/theming.context';

function App() {
  // const [theming] = useContext(ThemingContext);
  // const themeModeClass = 'app--mode-' + theming;
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartStore, setCartStore] = useState({ pokemons: [] });

  const checkAuth = () => {
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Successs:", response);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Errors:", error);
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    setCartStore(JSON.parse(localStorage.getItem("cart")));
    checkAuth();
    const interval = setInterval(() => {
      checkAuth();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header
          onPokemonSearch={setPokemonSearch}
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            localStorage.removeItem("access_token");
            setIsLoggedIn(false);
          }}
          cartStore={cartStore}
          updateCart={setCartStore}
        ></Header>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="privacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path="shop"></Route>
          <Route
            path="pokemons"
            element={
              <Pokemons
                pokemonSearch={pokemonSearch}
                isLoggedIn={isLoggedIn}
                cartStore={cartStore}
                updateCart={setCartStore}
              ></Pokemons>
            }
          ></Route>

          <Route
            path="login"
            element={<Login onLoggedIn={setIsLoggedIn}></Login>}
          ></Route>
          <Route
            path="myAccount"
            element={<MyAccount updateLoggedIn={setIsLoggedIn}></MyAccount>}
          ></Route>
          <Route
            path="workWithUs"
            element={<TrabajaNosotros></TrabajaNosotros>}
          ></Route>
          <Route path="about" element={<AboutUs></AboutUs>}></Route>
          <Route path="help" element={<Help></Help>}></Route>
          <Route
            path="costumerService"
            element={<CostumerService></CostumerService>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;

