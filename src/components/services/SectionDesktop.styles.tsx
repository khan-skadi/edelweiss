import { makeStyles, Theme } from '@material-ui/core/styles';
import rightArrowSvg from '../../assets/images/svg/send.svg';

const useStyles = makeStyles((theme: Theme) => ({
  sectionProjects: {
    display: 'block',
    backgroundColor: '#f1f5f6',
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
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  container: {
    height: '100%',
    maxWidth: '1850px',
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
    cursor: 'default',
    marginBottom: '30px',
    '& > p': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '26p',
      cursor: 'default'
    }
  },
  ourServices: {
    marginBottom: '15px',
    fontSize: '60px',
    lineHeight: '100%',
    position: 'relative',
    cursor: 'default !important',
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
  },
  serviceIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '68px',
    position: 'relative',
    overflow: 'hidden',
    height: '66px'
  },
  firstIcon: {
    webkitTransition: 'all .5s ease-in-out',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    cursor: 'default !important',
    margin: 'auto',
    right: 0,
    filter:
      'invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)',
    '&:hover': {
      filter:
        'invert(59%) sepia(13%) saturate(2144%) hue-rotate(125deg) brightness(90%) contrast(88%)'
    }
  },
  serviceDisc: {
    color: '#fff',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
    position: 'relative',
    paddingLeft: '50px',
    margin: '20px 0 0 10px',
    cursor: 'default !important',
    transition: 'box-shadow .3s',
    '& > a': {
      color: '#fff',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '28px',
      position: 'relative',
      margin: '20px 0 0 0',
      cursor: 'pointer',
      transition: 'box-shadow .3s',
      textDecoration: 'none',
      '&:hover': {
        color: '#26a69a',
        fontWeight: 600
      }
    },
    '&:before': {
      position: 'absolute',
      content: "''",
      background: `url(${rightArrowSvg}) no-repeat`,
      filter:
        'invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)',
      width: '47px',
      height: '27px',
      left: 0
    },
    '&:hover': {
      color: '#26a69a',
      fontWeight: 600
    }
  },
  servicesSeventhLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesEightLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesSecondLinkBox: {
    display: 'block',
    position: 'relative'
  },
  servicesThirdLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesFourthLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesFifthLinkBox: {
    display: 'block',
    position: 'relative'
  },
  servicesSixthLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesNinthLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  }
}));

export default useStyles;
