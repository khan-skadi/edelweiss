import React from 'react';

import Header from '../header/Header';
import Services from '../services/Services';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const LandingPage = () => {
  return (
    <section className="section_landing-page">
      <Header />
      <Services />
      <Projects />
      <Contact />
    </section>
  );
};

export default LandingPage;
