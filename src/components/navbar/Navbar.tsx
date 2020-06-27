import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import logo from '../../assets/logo/logo400.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
    WebkitTransition: 'all 0.5s ease-in-out 0s',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  },
  toolbar: {
    minHeight: '110px',
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)'
  },
  logo: {
    minWidth: '83px',
    minHeight: '83px'
  },
  title: {
    flexGrow: 1,
    marginLeft: '5px',
    fontSize: '2.3rem',
    fontFamily: 'Barlow',
    textTransform: 'uppercase'
  },
  navLinks: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
    '&:active': {
      color: theme.palette.primary.main
    },
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  navSocial: {
    margin: theme.spacing(0.3),
    marginTop: '4px',
    fontSize: '1.8rem',
    color: theme.palette.primary.main
  },
  socialLink: {
    margin: theme.spacing(0.3),
    marginTop: '4px',
    padding: 0,
    border: 0
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Avatar
            className={classes.logo}
            src={logo}
            alt="Edelweiss Stone logo"
          />
          <Typography className={classes.title}>
            <span style={{ fontWeight: 'bold' }}>Edelweiss</span> Stone
          </Typography>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">About us</Typography>
          </Button>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">Services</Typography>
          </Button>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">Stones</Typography>
          </Button>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">Testimonials</Typography>
          </Button>
          <Button variant="text" color="inherit" className={classes.navLinks}>
            <Typography variant="h6">Contact</Typography>
          </Button>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <Icon className={classes.navSocial} component={InstagramIcon} />
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <Icon className={classes.navSocial} component={FacebookIcon} />
          </a>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
