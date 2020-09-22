import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionGallery: {
    padding: "70px 0",
    position: "relative",
    display: "block",
    margin: 0,
    border: 0,
    verticalAlign: "baseline",
    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      borderLeft: "1px solid #ebebeb",
      height: "100%",
      left: "41px"
    }
  },
  titleMain: {
    borderTop: "1px solid #ebebeb",
    borderBottom: "1px solid #ebebeb"
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
      content: "''"
    }
  },
  title: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    lineHeight: "43px",
    textTransform: "capitalize",
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    color: "#333",
    fontSize: "60px"
  },
  galleryWrap: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline"
  },
  galleryInner: {
    display: "block",
    position: "relative",
    margin: "0px auto",
    width: "100%",
    maxWidth: "1810px",
    marginTop: "50px !important",
    padding: 0,
    border: 0
  },
  tags: {
    width: "96.5%",
    textAlign: "center",
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    padding: 0,
    margin: "0 auto",
    border: 0
  },
  tagsList: {
    listStyle: "none",
    letterSpacing: "normal",
    "& > li": {
      display: "inline"
    }
  },
  catButton: {
    border: "none",
    background: "#666",
    color: "#fff",
    padding: "15px 20px",
    fontSize: "17px",
    fontWeight: 600,
    fontFamily: '"Barlow", sans-serif',
    boxSizing: "border-box",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    textShadow: "none",
    whiteSpace: "nowrap",
    letterSpacing: ".3px",
    textTransform: "uppercase",
    borderRadius: 0,
    margin: "50px 6px 30px 0",
    display: "inline-block",
    verticalAlign: "baseline",
    "&:active": {
      background: theme.palette.primary.main
    },
    "&:hover": {
      background: theme.palette.primary.main
    },
    "&:focus": {
      background: "#999"
    }
  },
  gridList: {
    display: "block",
    position: "relative",
    maxWidth: "100%",
    margin: "0 auto",
    width: "96.5%",
    // height: '' ?,
    padding: 0,
    border: 0,
    verticalALign: "baseline"
  },
  loadMore: {
    display: "block",
    textAlign: "center",
    marginTop: "40px",
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
    "& > button": {
      outline: 0,
      boxSizing: "border-box",
      cursor: "pointer",
      textDecoration: "none",
      textTransform: "none",
      whiteSpace: "nowrap",
      WebkitFontSmoothing: "antialiased",
      borderRadius: "2px",
      border: "1px solid #dcdcdc",
      lineHeight: "100%",
      fontSize: "20px",
      color: "#fff",
      display: "block",
      width: "160px",
      margin: "0 auto 40px",
      background: theme.palette.primary.main,
      fontWeight: 500,
      padding: "11px 21px",
      height: "48px",
      textAlign: "center",
      textShadow: "none",
      fontFamily: '"Barlow", sans-serif',
      "&:hover": {
        background: "#333333"
      }
    }
  }
}));

export default useStyles;
