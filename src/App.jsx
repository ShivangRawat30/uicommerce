// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbas";
import MainCard from "./components/MainCard";
import Card from "./components/product";
import Footer from "./components/Footer";
import Another from "./components/Another";
const App = () => {
  return (
    <div>
      <Navbar />
      <MainCard />
      <Card />
      <Another />
      <Footer />
    </div>
  );
};

export default App;
