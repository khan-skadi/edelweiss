import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const createTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a' // teal
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
    container: {
      height: '100%',
      maxWidth: '1685px',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
      '&:before': {
        display: 'table',
        content: "''",
        boxSizing: 'border-box'
      },
      '&:after': {
        clear: 'both',
        display: 'table',
        content: "''"
      }
    },
    section_services: {
      padding: '80px 0',
      display: 'block',
      border: 0,
      margin: 0
    },
    servicesUl: {
      '&:before': {
        display: 'table',
        content: "''"
      },
      margin: '0 -15px',
      listStyle: 'none',
      letterSpacing: 'normal',
      padding: 0,
      border: 0,
      verticalAlign: 'baseline',
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      paddingInlineStart: '40px',
      '&:after': {
        display: 'table',
        content: "''",
        clear: 'both'
      },
      '& > li': {
        padding: '0 15px',
        width: '33.3%',
        float: 'left'
      }
    },
    servicesFirstDiv: {
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
      color: 'inherit',
      WebkitTransition: 'all .5s ease-in-out',
      cursor: 'pointer',
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
        WebkitTransition: 'all .5s ease-in-out'
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
      '& > img': {
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
      textTransform: 'capitalize',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28px',
      display: 'inline-block',
      verticalAlign: 'middle',
      paddingLeft: '15px',
      width: 'calc(100% - 68px)',
      WebkitTransition: 'all .5s ease-in-out',
      '&:hover': {
        color: '#26a69a'
      }
    }
  }
});

const theme = responsiveFontSizes(createTheme);

export default theme;
