import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Icon } from "@material-ui/core";

import stoneKitchen from "../../assets/images/stoneKitchen.jpg";

import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    height: "90vh",
    backgroundImage: `url(${stoneKitchen})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    filter: "brightness(25%)"
  },
  heroCaption: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    verticalAlign: "baseline"
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
  heroText: {
    display: "table",
    width: "100%",
    height: "100%",
    fontFamily: "'Lato', sans-serif"
  },
  heroTextCell: {
    display: "table-cell",
    verticalAlign: "middle"
  },
  heroHead: {
    fontSize: "60px",
    lineHeight: "60px",
    color: "#fff",
    paddingBottom: "5px",
    "& > span": {
      fontWeight: "bolder"
    },
    "& > span:nth-of-type(2)": {
      fontWeight: 400,
      fontSize: "50px"
    }
  },
  heroTextCell_p: {
    fontSize: "25px",
    lineHeight: "36px",
    fontWeight: 400,
    color: "#fff"
  },
  p_grTxt: {
    fontSize: "22px",
    lineHeight: "36px",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  strokedText: {
    fontSize: "60px",
    lineHeight: "60px",
    textTransform: "capitalize",
    color: theme.palette.primary.main
  },
  callToAction: {
    marginTop: "20px",
    margin: 0,
    backgroundColor: "#525252",
    color: "#fff",
    borderRadius: 0,
    border: 0,
    height: "48px",
    lineHeight: "100%",
    verticalAlign: "baseline",
    width: "100%",
    maxWidth: "300px",
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "'Lato', sans-serif",
    textTransform: "none",
    "& > span > svg": {
      marginLeft: "-15px",
      marginRight: "15px"
    }
  },
  actionLink: {
    textDecoration: "none",
    cursor: "pointer"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div id="home" className={classes.heroContainer}></div>
      <div className={classes.heroCaption}>
        <div className={classes.container}>
          <div className={classes.heroText}>
            <div className={classes.heroTextCell}>
              <div className={classes.heroHead}>
                <span className={classes.strokedText}>We Install</span>
                <br />
                <span>All Kinds of Stone</span>
              </div>
              <Typography variant="body1" className={classes.heroTextCell_p}>
                Granite - Marble - Sandstone - Limestone - Quartz Surfaces
              </Typography>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className={classes.actionLink}
              >
                <Button
                  className={classes.callToAction}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  <Icon component={DescriptionIcon} />
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
