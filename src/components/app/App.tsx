import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Services from '../services/Services';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

// const useStyles = makeStyles((theme) => ({
//   test: {
//     backgroundColor: theme.palette.primary.main
//   }
// }));

const App = () => {
  // const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
