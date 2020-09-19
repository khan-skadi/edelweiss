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
  galleryWrap: {}
}));

export default useStyles;
