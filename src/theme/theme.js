import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const createTheme = createMuiTheme({
  palette: {
    primary: {
      // main: '#26a69a' // teal
      main: '#158d43'
    },
    secondary: {
      main: '#e0e0e0' // light grey
    },
    error: {
      main: '#ff1744' // red
    },
    success: {
      main: '#9c9c9c' // darker grey
    },
    info: {
      main: '#4a4a4a' // dark grey
    },
    background: {
      default: '#fff' // white
    },
    textPrimary: {
      color: '#fff'
    }
  },
  spreadThis: {
    sectionServices: {
      padding: '80px 0',
      margin: 0,
      border: 0
    },
    container: {
      height: '100%',
      maxWidth: '1650px',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
      '&:before': {
        display: 'table',
        content: "''"
      },
      '&:after': {
        clear: 'both',
        display: 'table',
        content: "''"
      }
    },
    servicesUl: {
      margin: '0 -15px',
      listStyle: 'none',
      letterSpacing: 'normal',
      padding: '0 15px',
      display: 'block',
      '&:before': {
        display: 'table',
        content: "''"
      },
      '&:after': {
        display: 'table',
        content: "''",
        clear: 'both'
      },
      '& > li': {
        padding: '0 10px',
        width: '33.3%',
        float: 'left',
        '& *': {
          cursor: 'zoom-in'
        }
      }
    },
    servicesFirstDiv: {
      display: 'block',
      position: 'relative',
      marginBottom: '30px',
      '& > p': {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '26p'
      }
    },
    ourServices: {
      marginBottom: '15px',
      fontSize: '60px',
      lineHeight: '100%',
      position: 'relative',
      '& > span': {
        fontWeight: '700'
      }
    },
    servicesFirstLinkBox: {
      display: 'block',
      position: 'relative',
      textDecoration: 'none',
      transition: 'all .5s ease-in-out',
      '& > img': {
        border: 'none'
      }
    },
    serviceImage: {
      position: 'relative',
      transition: 'box-shadow .3s',
      '&:hover': {
        boxShadow: '0 0 11px rgba(33, 33, 33, 1)'
      },
      '&:before': {
        position: 'absolute',
        content: "''",
        left: 0,
        width: '100%',
        top: 0,
        height: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        webkitTransition: 'all .5s ease-in-out'
      },
      '&:after': {
        position: 'absolute',
        content: "''",
        opacity: 0,
        height: '100%',
        left: 0,
        width: '100%',
        top: 0,
        WebkitTransition: 'all .5s ease-in-out',
        background:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 0) 100%)'
      },
      '& img': {
        verticalAlign: 'bottom',
        maxWidth: '100%'
      }
    },
    serviceText: {
      padding: '30px',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      fontSize: 0
    },
    serviceTitle: {
      transition: 'box-shadow .3s',
      color: '#fff',
      cursor: 'default !important',
      textTransform: 'capitalize',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28px',
      display: 'inline-block',
      verticalAlign: 'middle',
      paddingLeft: '15px',
      width: 'calc(100% - 68px)',
      webkitTransition: 'all .5s ease-in-out',
      '&:hover': {
        color: '#26a69a'
      }
    }
  },
  sectionProjects: {
    display: 'block',
    margin: 0,
    background: '#f1f5f6',
    padding: '70px 0',
    position: 'relative',
    borderTop: '1px solid #eaeaea',
    marginBottom: '10px',
    '&:before': {
      position: 'absolute',
      content: "''",
      right: '50px',
      top: 0,
      width: '1px',
      height: '100%',
      background: '#cbcecf',
      boxSizing: 'border-box'
    }
  }
});

const theme = responsiveFontSizes(createTheme);

export default theme;
