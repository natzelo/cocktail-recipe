import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Hero from "./Hero";

function Home(props) {
  return (
    <Router>
      <Sidebar isOpen={props.isOpen} toggle={props.toggle} />
      <Navbar toggle={props.toggle} />
      <Hero />
    </Router>
  );
}

export default Home;
