// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbas";
import MainCard from "./components/MainCard";
import Card from "./components/product";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainCard />
      <Card />
    </div>
  );
};

export default App;
