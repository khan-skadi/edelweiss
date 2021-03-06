import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  projectLeft: {
    paddingRight: "100px",
    width: "calc(100% - 425px)",
    float: "left"
  },
  projectsTitle: {
    position: "relative",
    display: "inline-block",
    lineHeight: "62px",
    fontSize: "60px",
    fontWeight: 100,
    zIndex: 1,
    fontFamily: "'Lato', sans-serif",
    "& > span": {
      display: "block",
      fontWeight: 700
    },
    "&:before": {
      boxSizing: "border-box"
    },
    "&:after": {
      boxSizing: "border-box"
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
    height: "502px",
    paddingLeft: "120px",
    marginTop: "-20px"
  },
  projectRight: {
    float: "right",
    background: "#fff",
    padding: "30px",
    width: "425px",
    border: "1px solid #e1e1e1",
    marginTop: "60px"
  },
  instagramContainer: {
    width: "100%"
  },
  instagramBanner: {
    verticalAlign: "bottom",
    maxWidth: "100%"
  },
  instagram: {
    paddingBottom: '14px',
    width: '355px',
    margin: '0 auto',
    padding: 0,
    boxSizing: 'border-box',
    border: 0,
    verticalAlign: 'baseline',
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
