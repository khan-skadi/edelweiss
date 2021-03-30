import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import ScrollToTop from "../../utils/ScrollToTop";

// views
import LandingPage from "../landingPage/LandingPage";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Gallery from "../gallery/GalleryMain";
import RequestQuote from "../requestQuote/RequestQuote";
import Admin from "../admin/Admin";
import Login from "../auth/Login";
import NotFoundPage from "./NotFoundPage";

// redux
// import { CheckAuthentication } from "../../utils/auth/CheckAuthentication";
import GuestRoute from "../../utils/auth/GuestRoute";
import PrivateRoute from "../../utils/auth/PrivateRoute";

const App = () => {
  // useEffect(() => {
  //   CheckAuthentication();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick
        />
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/request-quote" component={RequestQuote} />
          <Route path="/gallery" component={Gallery} />
          <PrivateRoute path="/admin" component={Admin} />
          <GuestRoute path="/login" component={Login} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
