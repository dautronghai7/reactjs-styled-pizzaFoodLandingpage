import React from "react";
import {GlobalStyle} from './globalStyles'
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from './data/data'
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>      
      <Hero />
      <Products data={ productData } heading="Choose your favorite"/>
      <Feature />
      <Products data={ productDataTwo } heading="Sweet Treats for you"/>
      <Footer />
    </Router> 
  );
}

export default App;
