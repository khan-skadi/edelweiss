import { makeStyles, Theme } from "@material-ui/core/styles";
import footerBg from "../../assets/images/footer/stone-background-1.png";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    display: "block",
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: "border-box"
  },
  footerMain: {
    background: `url(${footerBg}) no-repeat`,
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
    width: "100%",
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box"
  },
  footerTop: {
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    padding: "48px 0"
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
      content: "''",
      boxSizing: "border-box"
    },
    "&:after": {
      clear: "both",
      display: "table",
      content: "''",
      boxSizing: "border-box"
    }
  },
  footerLeft: {
    float: "left",
    width: "15%",
    display: "block",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box"
  },
  leftTitle: {
    fontSize: "22px",
    lineHeight: "100%",
    color: "#158d43",
    textTransform: "capitalize",
    marginBottom: "20px",
    fontWeight: 500,
    display: "block",
    boxSizing: "border-box"
  },
  leftUl: {
    listStyle: "none",
    letterSpacing: "normal",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    "& > li": {
      marginBottom: "25px",
      lineHeight: "100%",
      display: "list-item",
      textAlign: "match-parent",
      "& > a": {
        paddingLeft: "13px",
        fontSize: "16px",
        lineHeight: "100%",
        display: "inline-block",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 350,
        color: "#fff",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        "&:before": {
          position: "absolute",
          content: "''",
          left: 0,
          background: "#158d43",
          top: "6px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          boxSizing: "border-box"
        }
      }
    }
  },
  footerMiddle: {
    width: "70%",
    float: "left",
    textAlign: "center",
    padding: "0 70px",
    margin: 0,
    border: 0,
    display: "block",
    boxSizing: "border-box",
    verticalAlign: "baseline",
    "@media (max-width:1400px)": {
      width: "67%",
      padding: "0 40px"
    },
    "@media (max-width:1500px)": {
      width: "68%",
      padding: "0 60px"
    }
  },
  middleLogo: {
    maxWidth: "330px",
    margin: "0 auto 40px",
    textAlign: "center",
    border: 0,
    padding: 0,
    display: "block",
    boxSizing: "border-box",
    verticalAlign: "baseline",
    "& > a": {
      color: "inherit",
      cursor: "pointer",
      textDecoration: "none",
      WebkitTransition: "all .5s ease-in-out",
      margin: 0,
      padding: 0,
      border: 0,
      verticalAlign: "baseline",
      "& > img": {
        border: "none",
        verticalAlign: "bottom",
        maxWidth: "100%",
        margin: 0,
        padding: 0
      }
    }
  },
  middleUl: {
    overflow: "hidden",
    listStyle: "none",
    letterSpacing: "normal",
    textAlign: "center",
    fontFamily: "'Lato', sans-serif",
    "& > li": {
      width: "33.3%",
      float: "left",
      borderRight: "1px solid rgba(255, 255, 255, .2)",
      marginBottom: "50px",
      display: "list-item",
      textAlign: "-webkit-match-parent",
      "&:nth-child(1)": {
        width: "100%",
        border: 0
      },
      "&:nth-child(4)": {
        border: 0
      },
      "& > p": {
        lineHeight: "100%",
        color: "#158d43",
        fontSize: "20px",
        marginBottom: "10px",
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px"
      },
      "& > span": {
        display: "inline-block",
        color: "#fff",
        fontSize: "18px",
        "@media (max-width:1400px)": {
          fontSize: "18px"
        }
      },
      "& > a": {
        display: "inline-block",
        color: "#fff",
        fontSize: "18px",
        textDecoration: "none",
        WebkitTransition: "all .5s ease-in-out",
        cursor: "pointer",
        "@media (max-width:1400px)": {
          fontSize: "16px"
        }
      }
    }
  },
  middleSocial: {
    background: "#fff",
    display: "inline-block",
    verticalAlign: "top",
    padding: "17px 40px",
    marginLeft: "40px",
    border: 0,
    textAlign: "center",
    boxSizing: "border-box",
    fontFamily: "'Lato', sans-serif",
    "& > p": {
      fontSize: "20px",
      color: "#0d0d0e",
      lineHeight: "100%",
      letterSpacing: "2.5px",
      marginBottom: "16px",
      margin: 0,
      padding: 0,
      border: 0,
      verticalAlign: "baseline"
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
      cursor: "pointer",
      "&:before": {
        background: "#158d43",
        position: "absolute",
        content: "''",
        opacity: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1,
        WebkitTransition: "all .5s ease-in-out",
        boxSizing: "border-box"
      }
    }
  },
  socialFb: {
    background: "#28295d"
  },
  socialInsta: {
    background:
      "linear-gradient(23deg, rgb(85, 63, 207) 0%, rgb(174, 41, 172) 28%, rgb(235, 33, 74) 54%, rgb(245, 113, 79) 76%, rgb(254, 192, 83) 100%)"
  },
  icon: {
    display: "inline-block",
    color: "#fff",
    textAlign: "center",
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "middle",
    "&:before": {
      content: "\f09a",
      boxSizing: "border-box"
    }
  },
  footerRight: {
    width: "15%",
    float: "left",
    paddingLeft: "50px",
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box",
    fontFamily: "'Lato', sans-serif",
    "@media (max-width:1500px)": {
      width: "17%"
    }
  },
  rightTitle: {
    fontSize: "22px",
    lineHeight: "100%",
    color: "#158d43",
    textTransform: "capitalize",
    marginBottom: "20px",
    fontWeight: 500,
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box"
  },
  rightUl: {
    listStyle: "none",
    letterSpacing: "normal",
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box",
    "& > li": {
      marginBottom: "25px",
      lineHeight: "100%",
      display: "list-item",
      "& > a": {
        paddingLeft: "13px",
        fontSize: "16px",
        lineHeight: "100%",
        display: "inline-block",
        color: "#fff",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 350,
        "&:before": {
          position: "absolute",
          content: "''",
          left: 0,
          background: "#158d43",
          top: "6px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          boxSizing: "border-box"
        }
      }
    }
  },
  footerBottom: {
    textAlign: "center",
    padding: "34px 0",
    margin: 0,
    border: 0,
    verticalAlign: "baseline",
    display: "block",
    boxSizing: "border-box"
  },
  hours: {
    display: "inline-block",
    verticalAlign: "middle",
    color: "#158d43",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "26px",
    position: "relative",
    textAlign: "left",
    paddingRight: "60px",
    paddingLeft: "60px",
    margin: 0,
    padding: 0,
    border: 0,
    fontFamily: "'Lato', sans-serif",
    "& > svg": {
      position: "absolute",
      left: 0,
      top: "8px",
      verticalAlign: "bottom",
      width: "36px",
      height: "36px"
    }
  },
  days: {
    display: "inline-block",
    verticalAlign: "middle",
    listStyle: "none",
    letterSpacing: "normal",
    textAlign: "center",
    margin: 0,
    padding: 0,
    border: 0,
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    "& li": {
      color: "#158d43",
      fontSize: "18px",
      lineHeight: "100%",
      display: "inline-block",
      verticalAlign: "top",
      textAlign: "left",
      fontWeight: 500,
      padding: "0 60px"
    },
    "& span": {
      display: "block",
      color: "#fff",
      marginTop: "8px",
      fontWeight: 300,
      fontSize: "16px"
    }
  }
}));

export default useStyles;
