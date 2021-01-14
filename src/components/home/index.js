import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import About from "./About";
import Blogs from "./Blogs";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Varieties from "./Varieties";

function Home(props) {
  return (
    <Router>
      <Sidebar isOpen={props.isOpen} toggle={props.toggle} />
      <Navbar toggle={props.toggle} />
      <Hero />
      <Features />
      <About />
      <Varieties />
      <Products />
      <Testimonial />
      <Blogs />
      <Footer />
    </Router>
  );
}

export default Home;
