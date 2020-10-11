import React, { useEffect } from 'react';
import dotenv from 'dotenv';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// views
import LandingPage from '../landingPage/LandingPage';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Gallery from '../gallery/GalleryMain';
import RequestQuote from '../requestQuote/RequestQuote';
import Admin from '../admin/Admin';
import Login from '../auth/Login';
import NotFoundPage from './NotFoundPage';
import Test from '../test_react-admin/Test';

// redux
import { Provider } from 'react-redux';
import { CheckAuthentication } from '../../utils/auth/CheckAuthentication';
import store from '../../redux/store';
import GuestRoute from '../../utils/auth/GuestRoute';
import PrivateRoute from '../../utils/auth/PrivateRoute';

dotenv.config();

const App = () => {
  useEffect(() => {
    CheckAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/request-quote" component={RequestQuote} />
          <Route path="/gallery" component={Gallery} />
          <PrivateRoute path="/admin" component={Admin} />
          <GuestRoute path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
