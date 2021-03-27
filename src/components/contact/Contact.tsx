import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { makeStyles } from "@material-ui/core/styles";
import { links } from "../../utils/constants";
import { Typography } from "@material-ui/core";
import { ObjectLiteral } from "../../utils/interface/interface";
import EmailForm from "./EmailForm";

// Mui
import Icon from "@material-ui/core/Icon";
import AddressIcon from "@material-ui/icons/Room";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FaxIcon from "@material-ui/icons/Print";

import benchtop from "../../assets/images/original/modified/1wide.jpg";

const useStyles = makeStyles((theme) => ({
  sectionContact: {
    paddingTop: "40px",
    position: "relative",
    display: "block",
    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      borderLeft: "1px solid #ebebeb",
      height: "100%",
      left: "41px",
      boxSizing: "border-box",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    },
    "&:after": {
      clear: "both",
      display: "table",
      content: "''",
    },
  },
  titleBorder: {
    borderTop: "1px solid #ebebeb",
    borderBottom: "1px solid #ebebeb",
  },
  contactBorderTitle: {
    lineHeight: "43px",
    textTransform: "capitalize",
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    fontSize: "60px",
    display: "block",
    "& > span": {
      fontWeight: 100,
    },
  },
  contactMain: {
    display: "inline-block",
    width: "100%",
  },
  contactLeft: {
    width: "51%",
    float: "left",
    display: "block",
    paddingRight: "60px",
    boxSizing: "border-box",
    "@media (max-width:1400px)": {
      paddingRight: "30px",
    },
  },
  contactInfo: {
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "50px",
    listStyle: "none",
    letterSpacing: "normal",
    "& > li": {
      width: "50%",
      float: "left",
      marginBottom: "50px",
      display: "list-item",
    },
  },
  contactListInfo: {
    overflow: "hidden",
    display: "block",
  },
  infoIcon: {
    background: "#333",
    height: "42px",
    width: "42px",
    position: "relative",
    overflow: "hidden",
    float: "left",
    color: "#fff",
    fontSize: "20px",
    lineHeight: "40px",
    textAlign: "center",
    display: "block",
  },
  icon: {
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#fff",
    "&:before": {
      content: "\f041",
      boxSizing: "border-box",
    },
  },
  infoText: {
    float: "left",
    width: "calc(100% - 42px)",
    paddingLeft: "18px",
    display: "block",
    "@media (max-width:1850px)": {
      paddingRight: "10px",
    },
    "& > p": {
      padding: 0,
      margin: 0,
      textTransform: "capitalize",
      fontSize: "18px",
      lineHeight: "14px",
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
      marginBottom: "8px",
    },
    "& > a": {
      display: "inline-block",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 400,
      textDecoration: "none",
      color: "inherit",
      WebkitTransition: "all .5s ease-in-out",
      cursor: "pointer",
    },
    "& > span": {
      display: "inline-block",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 400,
    },
  },
  contactImage: {
    position: "relative",
    overflow: "hidden",
    marginTop: "-90px",
  },
  contactPicture: {
    margin: "0 auto",
    display: "block",
    maxWidth: "100%",
    verticalAlign: "bottom",
  },
  mapContainer: {
    position: "relative",
    width: "100%",
    height: "450px",
  },
}));

const Contact = (props: ObjectLiteral) => {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.sectionContact}>
      <div className={classes.titleBorder}>
        <div className={classes.container}>
          <Typography variant="h1" className={classes.contactBorderTitle}>
            Contact <span>Us</span>
          </Typography>
        </div>
      </div>
      <div className={classes.contactMain}>
        <div className={classes.container}>
          <div className={classes.contactLeft}>
            <ul className={classes.contactInfo}>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={AddressIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Address</p>
                    <span>
                      <span>4/3 Dursley Rd, Yennora, NSW 2161</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={MailIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Email</p>
                    <a href={links.mailto}>info@edelweissstone.com.au</a>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={PhoneIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Phone</p>
                    <a href={links.tel}>(02) 0431 703 388</a>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={FaxIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Fax</p>
                    <span>(02) 9826 8008</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <EmailForm />
        </div>
      </div>
      <div className={classes.contactImage}>
        <img
          className={classes.contactPicture}
          alt="kitchen benchtop"
          src={benchtop}
        />
      </div>
      <div className={classes.mapContainer}>
        <Map
          google={props.google}
          style={mapStyle}
          initialCenter={{ lat: -33.858258, lng: 150.959442 }}
          zoom={18}
        >
          <Marker
            position={{ lat: -33.858258, lng: 150.959442 }}
            mapCenter={{ lat: -33.858258, lng: 150.959442 }}
            title={"Edelweiss Stone"}
          />
        </Map>
      </div>
    </section>
  );
};

const mapStyle = {
  width: "100%",
  height: "450px",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  borderBottom: "10px solid #158d43",
  position: "relative",
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`,
})(Contact);
