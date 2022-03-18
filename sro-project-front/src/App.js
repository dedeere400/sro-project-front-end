import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landing-page';
// import { ThemingContext } from './shared/theming/theming.context';

function App() {

  // const [theming] = useContext(ThemingContext);


  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='shop'></Route>
          <Route path='workWithUs'></Route>
          <Route path='about'></Route>
          <Route path='help'></Route>
          <Route path='costumerService'></Route>
        </Routes>

      </BrowserRouter>


    </React.Fragment>

    // <Header2></Header2>
  );
}

export default App;
