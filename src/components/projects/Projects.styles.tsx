import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionProjects: {
    marginTop: "40px",
    paddingTop: "40px",
    width: "100%",
    backgroundColor: "#f1f5f6",
    paddingBottom: "110px",
    borderTop: "1px solid #eaeaea",
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '""',
      right: "50px",
      top: 0,
      width: "1px",
      height: "100%",
      background: "#cbcecf"
    }
  },
  projectsDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  projectsMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  container: {
    height: "100%",
    maxWidth: "1850px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    "&:before": {
      display: "table",
      content: "''"
    },
    "&:after": {
      clear: "both",
      display: "table",
      content: "''"
    }
  }
}));

export default useStyles;
