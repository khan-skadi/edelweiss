import { makeStyles, Theme } from '@material-ui/core/styles';
import logo from '../../assets/logo/logo400.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    maxWidth: '100%',
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
  adminTitle: {
    textAlign: 'center'
  },
  root: {
    display: 'flex',
    height: '100%',
    maxWidth: '100%',
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
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'absolute',
    fontFamily: '"Lato", sans-serif'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  drawerLogo: {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerTitle: {
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: '"Lato", sans-serif'
  },
  drawerList: {
    '& span': {
      fontFamily: '"Lato", sans-serif'
    }
  },
  sectionGallery: {
    padding: '40px 0',
    position: 'relative',
    display: 'block',
    margin: 0,
    border: 0,
    verticalAlign: 'baseline',
    '&:before': {
      position: 'absolute',
      content: "''",
      top: 0,
      borderLeft: '1px solid #ebebeb',
      height: '100%',
      left: '41px'
    }
  },
  addImageBtn: {
    border: 'none',
    background: '#666',
    color: '#fff',
    padding: '15px 20px',
    fontSize: '17px',
    fontWeight: 600,
    fontFamily: '"Barlow", sans-serif',
    boxSizing: 'border-box',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    textShadow: 'none',
    whiteSpace: 'nowrap',
    letterSpacing: '.3px',
    textTransform: 'uppercase',
    borderRadius: 0,
    margin: '0 10px !important',
    display: 'inline-block',
    verticalAlign: 'baseline',
    '&:active': {
      background: theme.palette.primary.main
    },
    '&:hover': {
      background: theme.palette.primary.main
    }
  },
  titleMain: {
    borderTop: '1px solid #ebebeb',
    borderBottom: '1px solid #ebebeb'
  },
  title: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    lineHeight: '43px',
    textTransform: 'capitalize',
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    color: '#333',
    fontSize: '60px'
  },
  galleryWrap: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline'
  },
  galleryInner: {
    position: 'relative',
    display: 'block',
    width: '100%',
    maxWidth: '1810px',
    margin: '0 auto',
    marginTop: '50px !important',
    padding: 0,
    border: 0
  },
  gridList: {
    position: 'relative',
    // display: 'flex',
    // flexWrap: 'wrap',
    display: 'block',
    width: '91.5%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: 0,
    border: 0,
    verticalALign: 'baseline'
  },
  loadMore: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '40px',
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    '& > button': {
      outline: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      WebkitFontSmoothing: 'antialiased',
      borderRadius: '2px',
      border: '1px solid #dcdcdc',
      lineHeight: '100%',
      fontSize: '20px',
      color: '#fff',
      display: 'block',
      width: '160px',
      margin: '0 auto 40px',
      background: theme.palette.primary.main,
      fontWeight: 500,
      padding: '11px 21px',
      height: '48px',
      textAlign: 'center',
      textShadow: 'none',
      fontFamily: '"Barlow", sans-serif',
      '&:hover': {
        background: '#333333'
      }
    }
  }
}));

export default useStyles;
