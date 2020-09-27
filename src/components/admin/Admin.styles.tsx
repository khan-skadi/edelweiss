import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
  adminTitle: {
    textAlign: 'center'
  }
}));

export default useStyles;
