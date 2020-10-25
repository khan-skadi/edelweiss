import React from 'react';
import useStyles from './LandingPage.styles';

import Header from '../header/Header';
import Services from '../services/Services';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import MobileMap from '../footer/MobileMap';

const LandingPage = () => {
  const { sectionLandingPage } = useStyles();

  return (
    <section className={sectionLandingPage}>
      <Header />
      <Services />
      <Projects />
      <Contact />
      <MobileMap />
    </section>
  );
};

export default LandingPage;
