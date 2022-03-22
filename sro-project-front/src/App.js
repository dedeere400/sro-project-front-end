import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landing-page';
import Footer from './components/pages/footer';
import TrabajaNosotros from './components/pages/work-with-us';
import AboutUs from './components/pages/about';
import Help from './components/pages/help';
import CostumerService from './components/pages/costumer.service';


// import { ThemingContext } from './shared/theming/theming.context';



function App() {

  // const [theming] = useContext(ThemingContext);
  // const themeModeClass = 'app--mode-' + theming;


  return (
    <React.Fragment>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='home'></Route>
          <Route path='shop'></Route>
          <Route path='workWithUs' element={<TrabajaNosotros></TrabajaNosotros>}></Route>
          <Route path='about' element={<AboutUs></AboutUs>}></Route>
          <Route path='help' element={<Help></Help>}></Route>
          <Route path='costumerService' element={<CostumerService></CostumerService>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </React.Fragment>

    // <Header2></Header2>
  );
}

export default App;
