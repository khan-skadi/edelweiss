import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as Jump } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ScrollToColor from '../../utils/ScrollToColor';

// Mui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Icons
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import logo from '../../assets/logo/logo400.png';

const location = window.location.pathname;

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
        location === '/admin'
          ? '#000000'
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)',
      boxShadow: 'none',
      width: '100%',
      lineHeight: '10vh',
      zIndex: 5555
    },
    logo: {
      maxWidth: '83px',
      maxHeight: '83px',
      [theme.breakpoints.up('sm')]: {
        minWidth: '84px',
        minHeight: '84px'
      }
    },
    title: {
      display: 'block',
      marginLeft: '5px !important',
      fontSize: '1.2rem',
      fontFamily: "'Lato', sans-serif",
      textTransform: 'uppercase',
      '& span': {
        fontWeight: 'bold'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '2rem !important'
      }
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
        fontSize: '20px',
        lineHeight: '100%',
        fontWeight: 400,
        fontFamily: "'Lato', sans-serif"
      }
    },
    navSocialIcon: {
      margin: theme.spacing(0.2),
      fontSize: '2rem',
      color: theme.palette.primary.main
    },
    socialLink: {
      margin: theme.spacing(0.2),
      marginTop: '10px',
      padding: 0,
      border: 0
    },
    logoLink: {
      textDecoration: 'none',
      flexGrow: 1,
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
      '& > p': {
        flexGrow: 1,
        marginLeft: '5px',
        fontFamily: "'Lato', sans-serif",
        textTransform: 'uppercase',
        color: '#fff'
      }
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        '& a': {
          color: '#fff',
          textDecoration: 'none'
        }
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    listRoot: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    mobileMenu: {
      '& > .MuiPaper-root': {
        position: 'relative',
        width: '100%',
        padding: '-20px',
        maxWidth: '100%',
        minWidth: 0,
        top: '0 !important',
        left: '0 !important',
        right: '0 !important',
        bottom: '0 !important',
        borderRadius: 0,
        backgroundColor: '#000',
        color: '#fff',
        boxShadow: `0px 21px 13px -8px ${theme.palette.primary.main}`,
        transition: 'top 0.3s cubic-bezier(0.17, 0.04, 0.03, 0.94)',
        transformOrigin: 'top !important',
        overflow: 'hidden'
      },
      '& > .MuiPaper-root > ul > li': {
        justifyContent: 'center !important',
        '& > p': {
          fontSize: '1rem',
          fontWeight: 500
        },
        '&:last-child': {
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#fff',
          borderTop: '1px solid #fff'
        }
      }
    },
    menuSocialLink: {
      color: '#fff'
    },
    menuNavSocialIcon: {
      margin: theme.spacing(0.2),
      fontSize: '2rem'
    }
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = useState<null | HTMLElement>(null);

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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      className={classes.mobileMenu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
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
        <IconButton color="inherit" onClick={handleMobileMenuClose}>
          <MenuIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>About Us</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>Services</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>Projects</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>Testimonials</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          onClick={handleMobileMenuClose}
        >
          <p>Contact</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <a
          className={classes.menuSocialLink}
          href="https://www.instagram.com/edelweissstone/"
        >
          <Icon
            className={classes.menuNavSocialIcon}
            component={InstagramIcon}
          />
        </a>
        <a
          className={classes.menuSocialLink}
          href="https://www.facebook.com/Edelweiss-stone-495239060955229/"
        >
          <Icon
            className={classes.menuNavSocialIcon}
            component={FacebookIcon}
          />
        </a>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position={location === '/admin' ? 'relative' : 'fixed'}
        className={classes.navbar}
      >
        <ScrollToColor>
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

              <Jump to="/gallery">
                <Button
                  className={classes.navLinks}
                  variant="text"
                  color="inherit"
                >
                  <Typography variant="body1">Gallery</Typography>
                </Button>
              </Jump>

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
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </ScrollToColor>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
