import React from "react";
import "./styles.scss";
import About from "./subSections/About";
import Jumbotron from "./subSections/Jumbotron";
import ProductScrollList from "./subSections/ProductScrollList";
const Body = () => {
  return (
    <main className="cfBody">
      <ProductScrollList />
      <Jumbotron />
      <About />
    </main>
  );
};

export default Body;
