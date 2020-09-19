import { makeStyles, Theme } from "@material-ui/core/styles";
import stoneKitchen from "../../assets/images/stoneKitchenDarkened120.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  sectionMiniHeader: {
    background: `url(${stoneKitchen}) no-repeat center`,
    backgroundSize: "cover",
    position: "relative",
    minHeight: "340px",
    padding: "245px 0 55px",
    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      borderLeft: "1px solid rgba(255, 255, 255, .1)",
      height: "100%",
      left: "41px",
      boxSizing: "border-box"
    },
    "&:after": {
      position: "absolute",
      content: "''",
      top: 0,
      height: "100%",
      right: "260px",
      boxSizing: "border-box"
    }
  },
  innerHeader: {
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    "& > div > nav": {
      color: "#fff",
      lineHeight: "100%",
      fontSize: "16px",
      "& > ol": {
        paddingBottom: "13px",
        listStyle: "none",
        letterSpacing: "normal",
        "& > li": {
          position: "relative",
          fontSize: "16px",
          lineHeight: "100%",
          textTransform: "capitalize",
          verticalAlign: "top",
          "& > a": {
            color: "#fff",
            lineHeight: "100%",
            display: "block",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: theme.palette.primary.main
            }
          }
        }
      }
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
      content: "''",
      boxSizing: "border-box"
    },
    "&:after": {
      clear: "both",
      display: "table",
      content: "''"
    }
  }
}));

export default useStyles;
