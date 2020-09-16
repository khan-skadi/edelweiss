import { makeStyles, Theme } from "@material-ui/core/styles";
import footerBg from "../../assets/images/footer/stone-background-1.png";

const useStyles = makeStyles((theme: Theme) => ({
  footerMain: {
    background: `url(${footerBg}) no-repeat`,
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box",
    "&:selection": {
      background: theme.palette.primary.main
    }
  },
  footerTop: {
    padding: "48px 0",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    margin: 0,
    border: 0,
    [theme.breakpoints.down("md")]: {
      padding: "30px 0 20px"
    }
  },
  container: {
    maxWidth: "1550px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    margin: 0,
    padding: 0,
    border: 0,
    "&:before": {
      display: "table",
      content: "''"
    },
    "&:after": {
      clear: "both",
      display: "table",
      content: "''"
    }
  },
  footerService: {
    margin: 0,
    border: 0,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
      padding: 0,
      overflow: "hidden"
    }
  },
  serviceTitle: {
    fontSize: "22px",
    lineHeight: "100%",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    marginBottom: "20px",
    fontWeight: 500
  },
  serviceList: {
    listStyle: "none",
    letterSpacing: "normal",
    margin: 0,
    padding: 0,
    border: 0,
    "& li": {
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginBottom: "15px",
        float: "left",
        lineHeight: "100%"
      }
    }
  },
  footerMiddle: {
    [theme.breakpoints.down("md")]: {
      borderBottom: "1px solid rgba(255, 255, 255, .1)",
      borderTop: "1px solid rgba(255, 255, 255, .1)",
      padding: "25px 0",
      margin: "20px 0",
      width: "100%",
      float: "none",
      overflow: "hidden",
      textAlign: "center",
      border: 0
    }
  },
  footerLogo: {
    margin: "0 auto 20px",
    maxWidth: "280px",
    padding: 0,
    border: 0,
    "& > a > img": {
      verticalAlign: "bottom",
      maxWidth: "100%"
    }
  },
  middleList: {
    fontSize: 0,
    overflow: "hidden",
    listStyle: "none",
    letterSpacing: "normal",
    margin: 0,
    padding: 0,
    border: 0,
    textAlign: "center",
    "& li": {
      marginBottom: "20px",
      float: "left",
      width: "50%",
      borderRight: "1px solid rgba(255, 255, 255, .2)"
    },
    "& > li:first-child": {
      width: "100%",
      border: 0
    },
    "& > li:last-child": {
      width: "100%",
      border: 0
    },
    "& > li > p": {
      lineHeight: "100%",
      color: theme.palette.primary.main,
      fontSize: "20px",
      marginBottom: "10px"
    },
    "& > li > a": {
      fontSize: "18px",
      display: "inline-block",
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer"
    }
  },
  footerSocial: {
    display: "block",
    marginBottom: "20px",
    padding: "15px 20px",
    background: "#fff",
    verticalAlign: "top",
    margin: 0,
    "& > p": {
      fontSize: "20px",
      color: "#0d0d0e",
      lineHeight: "100%",
      fontWeight: 400,
      letterSpacing: "2.5px",
      margin: 0,
      padding: 0,
      border: 0,
      marginBottom: "16px"
    },
    "& > a": {
      color: "#fff",
      display: "inline-block",
      height: "40px",
      width: "40px",
      position: "relative",
      zIndex: 0,
      lineHeight: "40px",
      verticalAlign: "middle",
      textAlign: "center",
      fontSize: "16px",
      margin: "0 10px",
      textDecoration: "none",
      cursor: "pointer"
    }
  },
  socialFb: {
    background: "#28295d"
  },
  icon: {
    display: "inline-block",
    font: "normal normal normal 14px/1 FontAwesome",
    fontSize: "inherit",
    textRendering: "auto"
  },
  socialInsta: {
    background:
      "linear-gradient(23deg,rgb(85,63,207) 0%,rgb(174,41,172) 28%,rgb(235,33,74) 54%,rgb(245,113,79) 76%,rgb(254,192,83) 100%)"
  },
  footerProjects: {
    width: "100%",
    float: "none",
    padding: 0,
    overflow: "hidden",
    margin: 0,
    border: 0
  },
  projectsTitle: {
    fontSize: "22px",
    lineHeight: "100%",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    marginBottom: "20px",
    fontWeight: 500
  },
  projectsList: {
    listStyle: "none",
    letterSpacing: "normal",
    margin: 0,
    padding: 0,
    border: 0,
    "& > li": {
      width: "100%",
      marginBottom: "15px",
      float: "left",
      lineHeight: "100%",
      margin: 0,
      padding: 0,
      border: 0,
      "& > a": {
        paddingLeft: "13px",
        fontSize: "16px",
        lineHeight: "100%",
        display: "inline-block",
        color: "#fff",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        WebkitTransition: "all .5s ease-in-out",
        margin: 0,
        padding: 0,
        border: 0
      }
    }
  },
  footerBottom: {
    textAlign: "center",
    padding: "34px 0",
    margin: 0,
    border: 0
  },
  footerHours: {
    display: "block",
    margin: "0 auto 15px",
    maxWidth: "150px",
    fontSize: "18px",
    lineHeight: "22px",
    paddingRight: "20px",
    paddingLeft: "45px",
    verticalAlign: "middle",
    color: theme.palette.primary.main,
    fontWeight: 500,
    position: "relative",
    textAlign: "left",
    padding: 0,
    border: 0,
    "& > img": {
      position: "absolute",
      left: 0,
      top: "8px",
      verticalAlign: "bottom",
      maxWidth: "100%",
      margin: 0,
      padding: 0,
      border: 0
    }
  },
  hoursList: {
    fontSize: 0,
    display: "inline-block",
    verticalAlign: "middle",
    listStyle: "none",
    letterSpacing: "normal",
    margin: 0,
    padding: 0,
    border: 0,
    "& > li": {
      width: "50%",
      textAlign: "center",
      padding: "10px",
      fontSize: "16px",
      color: theme.palette.primary.main,
      lineHeight: "100%",
      display: "inline-block",
      verticalAlign: "top",
      fontWeight: 500,
      margin: 0,
      border: 0,
      "& > span": {
        display: "block",
        color: "#fff",
        marginTop: "8px",
        fontWeight: 300,
        fontSize: "16px",
        margin: 0,
        padding: 0,
        border: 0
      }
    }
  }
}));

export default useStyles;
