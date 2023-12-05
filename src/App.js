import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import AboutUs from "./routes/about-us/about-us.component";
import Contact from "./routes/contact/contact.component";
import OurProducts from "./routes/our-products/our-products.component";
import Mission from "./routes/mission/mission.component";
import Vision from "./routes/vision/vision.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Connections from "./components/connections/connections.component";

const App = () => {

  const [scrollPosition, setScrollPosition] = useState(false);

  (function addEventListeners() {
    window.addEventListener("scroll", windowScroll);
  })();

  function windowScroll() {
    let scrollValue__Y = window.scrollY;
    if (scrollValue__Y > 50) {
      setScrollPosition(true)
    } else {
      setScrollPosition(false)
    }
  }

  return (
    <>
      <Connections scrollPosition={scrollPosition} />
      <Header scrollPosition={scrollPosition} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;