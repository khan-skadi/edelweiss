import React from 'react';

import Header from '../header/Header';
// import Gallery from '../gallery/Gallery';
import Services from '../services/Services';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const LandingPage = () => {
  return (
    <section className="section_landing-page">
      <Header />
      {/* <Gallery /> */}
      <Services />
      <Projects />
      <Contact />
    </section>
  );
};

export default LandingPage;
