import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  sectionProjects: {
    paddingTop: '40px'
  },
  projectsDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      backgroundColor: '#f1f5f6',
      paddingBottom: '110px',
      borderTop: '1px solid #eaeaea',
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: '""',
        right: '50px',
        top: 0,
        width: '1px',
        height: '100%',
        background: '#cbcecf'
      }
    }
  },
  projectsMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
