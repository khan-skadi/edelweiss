import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';

// import OldNavbar from "../navbar/OldNavbar";
import LandingPage from "../landingPage/LandingPage";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import RequestQuote from "../requestQuote/RequestQuote";

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
      {/* <OldNavbar /> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/request-quote" component={RequestQuote} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
