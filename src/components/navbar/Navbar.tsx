import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Avatar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import eyeOfSkadi from '../../assets/images/eyeOfSkadi.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: '110px'
  },
  logo: {
    minWidth: '64px',
    minHeight: '64px'
  },
  title: {
    flexGrow: 1,
    marginLeft: '5px',
    fontSize: '2.3rem',
    fontFamily: 'Barlow',
    textTransform: 'uppercase'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <Menu />
          </IconButton> */}
          <Avatar className={classes.logo} src={eyeOfSkadi} alt="avatar" />
          <Typography className={classes.title}>
            <span style={{ fontWeight: 'bold' }}>Edelweiss</span> Stone
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
