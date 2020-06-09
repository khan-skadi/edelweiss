import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
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
    margin: '2px',
    fontSize: '1.8rem',
    color: theme.palette.primary.main
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar className={classes.toolbar}>
          <Avatar className={classes.logo} src={eyeOfSkadi} alt="avatar" />
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
          <Icon className={classes.navSocial} component={InstagramIcon} />
          <Icon className={classes.navSocial} component={FacebookIcon} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
