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
    }
  }
});

const theme = responsiveFontSizes(createTheme);

export default theme;
