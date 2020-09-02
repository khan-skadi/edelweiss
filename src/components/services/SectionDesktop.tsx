import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { ObjectLiteral } from "../../utils/interface/interface";

// Images
// import benchtop3 from '../../assets/images/kitchen/benchtop3.jpg';
import benchtop from "../../assets/images/kitchen/benchtop2.jpg";
import bathroom from "../../assets/images/bathroom/bathroom.jpg";
import renovations from "../../assets/images/renovations/renovations.jpg";
import fireplace from "../../assets/images/fireplace/fireplace.jpg";
import stoneStaircases from "../../assets/images/staircases/stoneStaircases.png";
import monument from "../../assets/images/monuments/stoneMonument.png";
import stoneFloor from "../../assets/images/floors/stoneFloor.png";
import stoneWall from "../../assets/images/walls/stoneWall.png";
import stoneShopFronts from "../../assets/images/shopFronts/shopFronts.png";

// SVG Icons
import kitchenSvg from "../../assets/images/svg/kitchen.svg";
import rightArrowSvg from "../../assets/images/svg/send.svg";
import laundrySvg from "../../assets/images/svg/laundry.svg";
import renovationsSvg from "../../assets/images/svg/renovations.svg";
import refrigeratorSvg from "../../assets/images/svg/refrigerator.svg";
import fireplaceSvg from "../../assets/images/svg/fireplace.svg";
import stoneTableSvg from "../../assets/images/svg/stoneTable.svg";

import "./Services.css";

const styles = (theme: ObjectLiteral) => ({
  ...theme.spreadThis,
  serviceIcon: {
    display: "inline-block",
    verticalAlign: "middle",
    width: "68px",
    position: "relative",
    overflow: "hidden",
    height: "66px"
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
  servicesSeventhLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  },
  servicesEightLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  },
  servicesSecondLinkBox: {
    display: "block",
    position: "relative"
  },
  servicesThirdLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  },
  servicesFourthLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  },
  servicesFifthLinkBox: {
    display: "block",
    position: "relative"
  },
  servicesSixthLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  },
  servicesNinthLinkBox: {
    display: "block",
    position: "relative",
    marginTop: "30px"
  }
});

const SectionDesktop = (props: ObjectLiteral) => {
  const { classes } = props;

  return (
    <section className={classes.sectionServices}>
      <div className="lightbox-target" id="servImg1">
        <img src={benchtop} alt="Kitchen Benchtops" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg2">
        <img src={bathroom} alt="Bathrooms / Laundry Vanities" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg3">
        <img src={renovations} alt="Renovations" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg4">
        <img src={stoneShopFronts} alt="Stone Splashbacks" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg5">
        <img src={fireplace} alt="Fireplaces" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg6">
        <img src={stoneStaircases} alt="Stone Staircases" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg7">
        <img src={monument} alt="Stone Monuments" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg8">
        <img src={stoneFloor} alt="Stone Floors" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg9">
        <img src={stoneWall} alt="Stone Walls" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className={classes.container}>
        <ul id="services" className={classes.servicesUl}>
          <li>
            {/* Kitchen. First Column, 1st Row */}
            <div className={classes.servicesFirstDiv}>
              <div className={classes.ourServices}>
                <span>Our</span> Services
              </div>
              <p>
                For more information and contact details visit our Contact Page
              </p>
            </div>

            <a className={classes.servicesFirstLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={benchtop} alt="Kitchen Benchtop" />
                    </div> */}
              <div className="service-image">
                <a href="#servImg1" className="lightbox">
                  <img src={benchtop} alt="Kitchen Benchtop" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={kitchenSvg}
                    alt="Kitchen"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Kitchen Benchtops</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Monuments. First Column, 2nd Row */}
            <a href="#!" className={classes.servicesSeventhLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={benchtop} alt="Monuments" />
                    </div> */}
              <div className="service-image">
                <a href="#servImg7" className="lightbox">
                  <img src={monument} alt="Monuments" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={kitchenSvg}
                    alt="Monuments"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Monuments</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Staircases. 1st Column, 3rd Row */}
            <a href="#!" className={classes.servicesSixthLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={stoneTable} alt="Stone Tables" />
                  </div> */}
              <div className="service-image">
                <a href="#servImg6" className="lightbox">
                  <img src={stoneStaircases} alt="Staircases" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={stoneTableSvg}
                    alt="Staircases"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Staircases</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
          </li>
          <li>
            {/* Bathrooms. 2nd Column, 1st Row */}
            <a href="#!" className={classes.servicesSecondLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={bathroom} alt="Bathroom / Laundry vanities" />
                  </div> */}
              <div className="service-image">
                <a href="#servImg2" className="lightbox">
                  <img src={bathroom} alt="Bathrooms" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={laundrySvg}
                    alt="Bathroom"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Bathrooms</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Vanities. 2nd Column, 2nd Row */}
            <a href="#!" className={classes.servicesThirdLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={renovations} alt="Renovations" />
                  </div> */}
              <div className="service-image">
                <a href="#servImg3" className="lightbox">
                  <img src={renovations} alt="Vanities" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={renovationsSvg}
                    alt="Vanities"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Vanities</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Shop Fronts. 2nd Column, 3rd Row */}
            <a href="#!" className={classes.servicesFourthLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={stoneShopFronts} alt="Stone Splashbacks" />
                  </div> */}
              <div className="service-image">
                <a href="#servImg4" className="lightbox">
                  <img src={stoneShopFronts} alt="Shop Fronts" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={refrigeratorSvg}
                    alt="Shop Fronts"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Shop Fronts</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Walls. Second Column, 4th Row */}
            <a href="#!" className={classes.servicesNinthLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={stoneWall} alt="Walls" />
                    </div> */}
              <div className="service-image">
                <a href="#servImg9" className="lightbox">
                  <img src={stoneWall} alt="Walls" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={kitchenSvg}
                    alt="Walls"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Walls</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
          </li>
          <li>
            {/* Fireplaces. 3rd Column, 1st Row */}
            <a href="#!" className={classes.servicesFifthLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={fireplace} alt="Fireplaces" />
                  </div> */}
              <div className="service-image">
                <a href="#servImg5" className="lightbox">
                  <img src={fireplace} alt="Fireplaces" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={fireplaceSvg}
                    alt="Fireplaces"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Fireplaces</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Floors. Third Column, 2nd Row */}
            <a href="#!" className={classes.servicesEightLinkBox}>
              {/* <div className={classes.serviceImage}>
                    <img src={stoneFloor} alt="Floors" />
                    </div> */}
              <div className="service-image">
                <a href="#servImg8" className="lightbox">
                  <img src={stoneFloor} alt="Floors" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={kitchenSvg}
                    alt="Floors"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Floors</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default withStyles(styles)(SectionDesktop);
