import React from "react";
import useStyles from "./LandingPage.styles";
import clsx from "clsx";

import Header from "../header/Header";
// import Gallery from "../gallery/Gallery";
import Services from "../services/Services";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import MobileMap from "../footer/MobileMap";

const LandingPage = () => {
  const { sectionLandingPage, sectionDesktop, sectionMobile } = useStyles();

  return (
    <section className={sectionLandingPage}>
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
