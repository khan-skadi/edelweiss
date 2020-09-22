import React from "react";
import dotenv from "dotenv";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';

import LandingPage from "../landingPage/LandingPage";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Gallery from "../gallery/GalleryMain";
import RequestQuote from "../requestQuote/RequestQuote";

// const useStyles = makeStyles((theme) => ({
//   test: {
//     backgroundColor: theme.palette.primary.main
//   }
// }));

dotenv.config();

const App = () => {
  // const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/request-quote" component={RequestQuote} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
