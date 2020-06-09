import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Navbar from '../navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  test: {
    backgroundColor: theme.palette.primary.main
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <h4>Edelweiss</h4>
      <Button className={classes.test} variant="contained" color="primary">
        Click me
      </Button>
    </BrowserRouter>
  );
};

export default App;
