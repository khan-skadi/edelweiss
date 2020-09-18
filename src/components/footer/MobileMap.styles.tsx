import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mobileMap: {
    width: "100%",
    height: "450px",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default useStyles;
