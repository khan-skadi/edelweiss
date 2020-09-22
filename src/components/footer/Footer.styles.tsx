<<<<<<< HEAD
import { makeStyles, Theme } from '@material-ui/core/styles';
=======
import { makeStyles, Theme } from "@material-ui/core/styles";
>>>>>>> develop

const useStyles = makeStyles((theme: Theme) => ({
  footer: {},
  footerDesktop: {
<<<<<<< HEAD
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  footerMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
=======
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  footerMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
>>>>>>> develop
    }
  }
}));

export default useStyles;
