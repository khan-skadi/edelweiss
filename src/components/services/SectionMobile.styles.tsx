import { makeStyles, Theme } from "@material-ui/core/styles";
import rightArrowSvg from "../../assets/images/svg/send.svg";

const useStyles = makeStyles((theme: Theme) => {
  return {
    sectionServicesMobile: {
      margin: 0,
      border: 0
    },
    container: {
      maxWidth: "1685px",
      paddingLeft: "15px",
      paddingRight: "15px",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      "&:before": {
        display: "table",
        content: "''"
      },
      "&:after": {
        display: "table",
        content: "''",
        clear: "both"
      }
    },
    serviceList: {
      listStyle: "none",
      letterSpacing: "normal",
      padding: 0,
      border: 0,
      margin: "0 -10px",
      "& > li": {
        float: "left",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center"
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
          marginBottom: "30px",
          overflow: "hidden"
        },
        [theme.breakpoints.down("lg")]: {
          padding: "0 10px"
        },
        [theme.breakpoints.down("xl")]: {
          padding: "0 15px"
        }
      }
    },
    firstDiv: {
      visibility: "visible",
      textAlign: "center",
      marginBottom: "30px"
    },
    title: {
      fontSize: "40px",
      marginBottom: "15px",
      lineHeight: "100%",
      position: "relative",
      "& > span": {
        fontWeight: 700
      }
    },
    para: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "26px",
      textAlign: "center"
    },
    firstImage: {
      float: "none",
      margin: "0 auto",
      width: "auto",
      display: "inline-block",
      overflow: "hidden",
      position: "relative"
    },
    imageContainer: {
      position: "relative",
      margin: 0,
      padding: 0,
      border: 0,
      verticalAlign: "baseline",
      "&:before": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        boxSizing: "border-box"
      },
      "&:after": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 0) 100%)",
        boxSizing: "border-box"
      },
      "& > img": {
        border: "none",
        verticalAlign: "bottom",
        maxWidth: "100%",
        margin: 0,
        padding: 0
      }
    },
    imageText: {
      visibility: "visible",
      textAlign: "left",
      padding: "24px",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      fontSize: 0
    },
    imageCount: {
      fontSize: "45px",
      right: "24px",
      bottom: "24px",
      lineHeight: "100%",
      color: "#fff",
      fontWeight: 600,
      position: "absolute",
      opacity: 0
    },
    firstIcon: {
      webkitTransition: "all .5s ease-in-out",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      cursor: "default !important",
      margin: "auto",
      right: 0,
      filter:
        "invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)",
      "&:hover": {
        filter:
          "invert(59%) sepia(13%) saturate(2144%) hue-rotate(125deg) brightness(90%) contrast(88%)"
      }
    },
    serviceDisc: {
      color: "#fff",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      position: "relative",
      paddingLeft: "50px",
      margin: "20px 0 0 10px",
      cursor: "default !important",
      transition: "box-shadow .3s",
      "&:before": {
        position: "absolute",
        content: "''",
        background: `url(${rightArrowSvg}) no-repeat`,
        filter:
          "invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)",
        width: "47px",
        height: "27px",
        left: 0
      },
      "&:hover": {
        color: "#26a69a",
        fontWeight: 600
      }
    },
    imageIcon: {
      width: "48px",
      height: "50px",
      display: "inline-block",
      verticalAlign: "middle",
      position: "relative",
      overflow: "hidden",
      margin: 0,
      padding: 0,
      border: 0,
      textAlign: "left",
      "& > img": {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        right: 0,
        border: "none",
        verticalAlign: "bottom",
        maxWidth: "100%"
      }
    },
    imageTitle: {
      width: "calc(100% - 48px)",
      color: "#fff",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28px",
      display: "inline-block",
      verticalAlign: "middle",
      paddingLeft: "15px",
      margin: 0,
      padding: 0,
      border: 0
    }
  };
});

export default useStyles;
