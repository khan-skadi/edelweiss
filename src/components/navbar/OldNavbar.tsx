import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  IconButton,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Icon from "@material-ui/core/Icon";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import logo from "../../assets/logo/logo400.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  navbar: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)",
    boxShadow: "none",
    width: "100%",
    lineHeight: "10vh"
  },
  desktop: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobile: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: {
    minHeight: "60px"
  },
  logo: {
    maxWidth: "83px",
    maxHeight: "83px"
  },
  title: {
    marginLeft: "5px",
    // fontSize: "2rem !important",
    fontFamily: "'Lato', sans-serif",
    textTransform: "uppercase"
  },
  navLinks: {
    margin: theme.spacing(1),
    textTransform: "capitalize",
    "&:active": {
      color: theme.palette.primary.main
    },
    "&:hover": {
      color: theme.palette.primary.main
    },
    "&:disabled": {
      color: "#9c9c9c"
    },
    "& > span > p": {
      // fontSize: "20px",
      // lineHeight: "100%",
      // fontWeight: 400,
      fontFamily: "'Lato', sans-serif"
    }
  },
  navSocial: {
    margin: theme.spacing(0.2),
    marginTop: "4px",
    // fontSize: "2rem",
    color: theme.palette.primary.main
  },
  socialLink: {
    margin: theme.spacing(0.2),
    marginTop: "4px",
    padding: 0,
    border: 0
  },
  logoLink: {
    textDecoration: "none",
    flexGrow: 1,
    margin: 0,
    padding: 0,
    verticalAlign: "baseline",
    "& > p": {
      flexGrow: 1,
      marginLeft: "5px",
      // fontSize: "2.3rem",
      fontFamily: "'Lato', sans-serif",
      textTransform: "uppercase",
      color: "#fff"
    }
  }
}));

const OldNavbar = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const desktop = (
    <>
      <a href="/">
        <Avatar
          className={classes.logo}
          src={logo}
          alt="Edelweiss Stone logo"
        />
      </a>
      <a href="/" className={classes.logoLink}>
        <Typography className={classes.title}>
          <span style={{ fontWeight: "bold" }}>Edelweiss</span> Stone
        </Typography>
      </a>
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
    </>
  );

  const mobile = (
    <>
      <IconButton
        className={classes.mobile}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <Box component="nav">
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.mobile}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {desktop}
        {mobile}
      </AppBar>
    </Box>
  );
};

export default OldNavbar;
