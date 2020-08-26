import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import { Link } from "react-scroll";

import logo from "../../assets/logo/logo400.png";

import ScrollToColor from "./ScrollToColor";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    navbar: {
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)",
      boxShadow: "none",
      width: "100%",
      lineHeight: "10vh"
    },
    logo: {
      maxWidth: "83px",
      maxHeight: "83px"
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        marginLeft: "5px",
        // fontSize: "2rem !important",
        fontFamily: "'Lato', sans-serif",
        textTransform: "uppercase",
        "& span": {
          fontWeight: "bold"
        }
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch"
      }
    },
    navList: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline"
      }
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
        fontSize: "20px",
        lineHeight: "100%",
        fontWeight: 400,
        fontFamily: "'Lato', sans-serif"
      }
    },
    navSocialIcon: {
      margin: theme.spacing(0.2),
      fontSize: "2rem",
      color: theme.palette.primary.main
    },
    socialLink: {
      margin: theme.spacing(0.2),
      marginTop: "10px",
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
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    }
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <ScrollToColor>
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
            <a href="/">
              <Avatar
                className={classes.logo}
                src={logo}
                alt="Edelweiss Stone logo"
              />
            </a>
            <a href="/" className={classes.logoLink}>
              <Typography className={classes.title}>
                <span>Edelweiss</span> Stone
              </Typography>
            </a>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
              >
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                >
                  <Typography variant="body1">Home</Typography>
                </Button>
              </Link>

              <Link to="/">
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                  disabled
                >
                  <Typography variant="body1">About Us</Typography>
                </Button>
              </Link>

              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
              >
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                >
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
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                >
                  <Typography variant="body1">Projects</Typography>
                </Button>
              </Link>

              <Link to="/">
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                  disabled
                >
                  <Typography variant="body1">Testimonials</Typography>
                </Button>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                >
                  <Typography variant="body1">Contact</Typography>
                </Button>
              </Link>

              <a
                className={classes.socialLink}
                href="https://www.instagram.com/edelweissstone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className={classes.navSocialIcon}
                  component={InstagramIcon}
                />
              </a>
              <a
                className={classes.socialLink}
                href="https://www.facebook.com/Edelweiss-stone-495239060955229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className={classes.navSocialIcon}
                  component={FacebookIcon}
                />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </ScrollToColor>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
