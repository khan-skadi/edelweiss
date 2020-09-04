import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
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
  },
  projectsMobile: {
    background: "#f1f5f6",
    borderTop: "1px solid #eaeaea",
    position: "relative",
    marginBottom: "10px",
    padding: "40px 0",
    display: "flex"
  },
  projectsTitle: {
    fontSize: "40px",
    marginBottom: "30px",
    lineHeight: "100%",
    display: "block",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    margin: 0,
    padding: 0,
    border: 0,
    "& > span": {
      display: "inline-block",
      fontWeight: 700
    }
  },
  projectsCarousel: {
    position: "relative",
    display: "block",
    boxSizing: "border-box",
    userSelect: "none",
    touchAction: "pan-y",
    webkitTapHighlightColor: "transparent",
    letterSpacing: "normal",
    overflow: "hidden"
  },
  caroHolder: {
    position: "relative",
    width: "100%",
    height: "330px",
    paddingBottom: "20px"
  },
  projectsRight: {
    position: "relative",
    width: "100%",
    float: "none",
    textAlign: "center",
    background: "#fff",
    border: "1px solid #e1e1e1",
    marginTop: "60px",
    padding: "30px"
  },
  instagramContainer: {
    width: "100%"
  },
  instagramBanner: {
    verticalAlign: "bottom",
    maxWidth: "100%"
  },
  instagram: {
    paddingBottom: "14px",
    width: "355px",
    margin: "0 auto",
    padding: 0,
    boxSizing: "border-box",
    border: 0,
    verticalAlign: "baseline",
    "&:before": {
      boxSizing: "border-box"
    },
    "&:after": {
      boxSizing: "border-box",
      content: "''",
      display: "table",
      clear: "both"
    }
  }
}));

export default useStyles;
