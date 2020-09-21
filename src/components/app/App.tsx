import React, { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

import LandingPage from '../landingPage/LandingPage';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

import RequestQuote from '../requestQuote/RequestQuote';

// const useStyles = makeStyles((theme) => ({
//   test: {
//     backgroundColor: theme.palette.primary.main
//   }
// }));

dotenv.config();

const App = () => {
  // const classes = useStyles();
  useEffect(() => {
    axios.get('/api/v1/gallery').then((res) => console.log(res.data.data));
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/request-quote" component={RequestQuote} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
