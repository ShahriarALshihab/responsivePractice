/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import NavBar from "./Component/NavBar";
import Banner from "./Banner";
import PricingOptons from "./Component/PricingOptons";

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <PricingOptons></PricingOptons>
    </>
  );
}

export default App;
