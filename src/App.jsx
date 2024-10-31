/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import NavBar from "./Component/NavBar";
import Banner from "./Banner";
import PricingOptons from "./Component/PricingOptons";
import Footer from "./Footer";

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <PricingOptons></PricingOptons>
      <Footer></Footer>
    </>
  );
}

export default App;
