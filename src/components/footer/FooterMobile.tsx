import React from "react";
import useStyles from "./FooterMobile.styles";

import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ClockIcon from "@material-ui/icons/Schedule";

import logo from "../../assets/logo/logo395x89-1.png";

const FooterMobile = () => {
  const {
    footerMain,
    footerTop,
    container,
    footerService,
    serviceTitle,
    serviceList,
    footerMiddle,
    footerLogo,
    middleList,
    footerSocial,
    socialFb,
    icon,
    socialInsta,
    footerProjects,
    projectsTitle,
    projectsList,
    footerBottom,
    footerHours,
    hoursList
  } = useStyles();

  return (
    <div className={footerMain}>
      <div className={footerTop}>
        <div className={container}>
          <div className={footerService}>
            <div className={serviceTitle}>Services</div>
            <ul className={serviceList}>
              <li>
                <a href="#!">Kitchen Benchtops</a>
              </li>
              <li>
                <a href="#!">Fireplaces</a>
              </li>
              <li>
                <a href="#!">Bathroom / Laundry Vanities</a>
              </li>
              <li>
                <a href="#!">Renovations</a>
              </li>
            </ul>
          </div>
          <div className={footerMiddle}>
            <div className={footerLogo}>
              <a href="#!">
                <img src={logo} alt="Edelweiss Stone Logo" />
              </a>
            </div>
            <ul className={middleList}>
              <li>
                <p>Our Address</p>
                <span>4/3 Dursley Rd, Yennora, NSW 2161</span>
              </li>
              <li>
                <p>Phone</p>
                <a href="tel:0431 703 388">0431 703 388</a>
              </li>
              <li>
                <p>Fax</p>
                <span>(02) 9826 8008</span>
              </li>
              <li>
                <p>Email</p>
                <a href="mailto:info@edelweissstone.com.au">
                  info@edelweissstone.com.au
                </a>
              </li>
            </ul>
            <div className={footerSocial}>
              <p>Follow Us On</p>
              <a
                className={socialFb}
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={icon} component={FacebookIcon} />
              </a>
              <a
                className={socialInsta}
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={icon} component={InstagramIcon} />
              </a>
            </div>
          </div>
          <div className={footerProjects}>
            <div className={projectsTitle}>Projects</div>
            <ul className={projectsList}>
              <li>
                <a href="#!">Kitchens</a>
              </li>
              <li>
                <a href="#!">Fireplaces</a>
              </li>
              <li>
                <a href="#!">Bathroom / Laundry Vanities</a>
              </li>
              <li>
                <a href="#!">Renovations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footerBottom}>
        <div className={container}>
          <div className={footerHours}>
            <Icon component={ClockIcon} /> Work
            <br /> Hours
          </div>
          <ul className={hoursList}>
            <li>
              Mon - Fri
              <span>7:30 am to 4:30 pm</span>
            </li>
            <li>
              Saturdays
              <span>9:00 am to 1:00 pm</span>
            </li>
            <li>
              Sundays
              <span>by Appointment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
