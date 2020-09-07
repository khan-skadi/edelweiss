import React from "react";

import Header from "../header/Header";
// import Gallery from "../gallery/Gallery";
import Services from "../services/Services";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import MobileMap from "../footer/MobileMap";

const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;
console.log("apiKey: ", apiKey);
console.log("Google key: ", process.env.REACT_APP_GOOGLE_MAP_API);

const LandingPage = () => {
  return (
    <section className="section_landing-page">
      <Header />
      {/* <Gallery /> */}
      <Services />
      <Projects />
      <Contact />
      <MobileMap />
    </section>
  );
};

export default LandingPage;
