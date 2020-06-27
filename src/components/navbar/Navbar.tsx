import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import logo from '../../assets/logo/logo400.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // position: 'absolute',
    // background: 'transparent',
    background: '#000',
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
      'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)',
    '& > .active': {
      borderBottom: '2px solid #26a69a'
    }
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
    },
    '&:disabled': {
      color: '#9c9c9c'
    },
    '& > span > p': {
      fontSize: '18px',
      lineHeight: '100%',
      fontWeight: 400,
      fontFamily: "'Lato', sans-serif"
    }
  },
  navSocial: {
    margin: theme.spacing(0.2),
    marginTop: '4px',
    fontSize: '1.8rem',
    color: theme.palette.primary.main
  },
  socialLink: {
    margin: theme.spacing(0.2),
    marginTop: '4px',
    padding: 0,
    border: 0
  }
}));

const Navbar = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Avatar
          className={classes.logo}
          src={logo}
          alt="Edelweiss Stone logo"
        />
        <Typography className={classes.title}>
          <span style={{ fontWeight: 'bold' }}>Edelweiss</span> Stone
        </Typography>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          <Button className={classes.navLinks} variant="text" color="inherit">
            <Typography variant="body1">Home</Typography>
          </Button>
        </Link>
        <Button
          className={classes.navLinks}
          variant="text"
          color="inherit"
          disabled
        >
          <Typography variant="body1">About Us</Typography>
        </Button>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          <Button className={classes.navLinks} variant="text" color="inherit">
            <Typography variant="body1">Services</Typography>
          </Button>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          <Button className={classes.navLinks} variant="text" color="inherit">
            <Typography variant="body1">Projects</Typography>
          </Button>
        </Link>
        <Button
          className={classes.navLinks}
          variant="text"
          color="inherit"
          disabled
        >
          <Typography variant="body1">Testimonials</Typography>
        </Button>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          <Button className={classes.navLinks} variant="text" color="inherit">
            <Typography variant="body1">Contact</Typography>
          </Button>
        </Link>
        <a
          className={classes.socialLink}
          href="https://www.instagram.com/edelweissstone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={classes.navSocial} component={InstagramIcon} />
        </a>
        <a
          className={classes.socialLink}
          href="https://www.facebook.com/Edelweiss-stone-495239060955229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={classes.navSocial} component={FacebookIcon} />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
