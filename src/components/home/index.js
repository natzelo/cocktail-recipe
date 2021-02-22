import React from "react";
import About from "./About";
import Blogs from "./Blogs";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Varieties from "./Varieties";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Varieties />
      <Products />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
