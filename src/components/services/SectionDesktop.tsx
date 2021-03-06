import React from "react";
import { Link } from "react-scroll";
import { Link as MuiLink } from "@material-ui/core";
import { IGallery } from "../../redux/actions/galleryActions";
import useStyles from "./SectionDesktop.styles";
import ServicesLightbox from "./ServicesLightbox";

// Images
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
import laundrySvg from "../../assets/images/svg/laundry.svg";
import renovationsSvg from "../../assets/images/svg/renovations.svg";
import refrigeratorSvg from "../../assets/images/svg/refrigerator.svg";
import fireplaceSvg from "../../assets/images/svg/fireplace.svg";
import stoneTableSvg from "../../assets/images/svg/stoneTable.svg";
import monumentSvg from "../../assets/images/svg/monument.svg";
import stoneFloorSvg from "../../assets/images/svg/stoneFloor.svg";
import stoneWallSvg from "../../assets/images/svg/stoneWall.svg";

import "./Services.css";

interface SectionDesktopProps {
  data: IGallery[];
}

const SectionDesktop = (props: SectionDesktopProps) => {
  const {
    container,
    servicesUl,
    servicesFirstDiv,
    ourServices,
    servicesFirstLinkBox,
    serviceText,
    serviceIcon,
    firstIcon,
    serviceTitle,
    serviceDisc,
    servicesSixthLinkBox,
    servicesThirdLinkBox,
    servicesFourthLinkBox,
    servicesNinthLinkBox,
    servicesFifthLinkBox,
    servicesEightLinkBox,
    servicesSeventhLinkBox,
    servicesSecondLinkBox,
  } = useStyles();
  // const { data } = props;

  return (
    <>
      <ServicesLightbox />
      <div className={container}>
        <ul id="services" className={servicesUl}>
          <li>
            {/* Kitchen. First Column, 1st Row */}
            <div className={servicesFirstDiv}>
              <div className={ourServices}>
                <span>Our</span> Services
              </div>
              <p>
                For more information and contact details visit our{" "}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    color: "#158d43",
                    fontWeight: "bold",
                  }}
                >
                  Contact Page
                </Link>
              </p>
            </div>

            <MuiLink href="#!" className={servicesFirstLinkBox}>
              <div className="service-image">
                <a href="#servImg1" className="lightbox">
                  <img src={benchtop} alt="Kitchen Benchtop" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={kitchenSvg}
                    alt="Kitchen"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Kitchen Benchtops</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </MuiLink>
            {/* Monuments. First Column, 2nd Row */}
            <a href="#!" className={servicesSeventhLinkBox}>
              <div className="service-image">
                <a href="#servImg7" className="lightbox">
                  <img src={monument} alt="Monuments" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={monumentSvg}
                    alt="Monuments"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Monuments</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
            {/* Staircases. 1st Column, 3rd Row */}
            <a href="#!" className={servicesSixthLinkBox}>
              <div className="service-image">
                <a href="#servImg6" className="lightbox">
                  <img src={stoneStaircases} alt="Staircases" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={stoneTableSvg}
                    alt="Staircases"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Staircases</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
          </li>
          <li>
            {/* Bathrooms. 2nd Column, 1st Row */}
            <a href="#!" className={servicesSecondLinkBox}>
              <div className="service-image">
                <a href="#servImg2" className="lightbox">
                  <img src={bathroom} alt="Bathrooms" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={laundrySvg}
                    alt="Bathroom"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Bathrooms</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
            {/* Vanities. 2nd Column, 2nd Row */}
            <a href="#!" className={servicesThirdLinkBox}>
              <div className="service-image">
                <a href="#servImg3" className="lightbox">
                  <img src={renovations} alt="Vanities" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={renovationsSvg}
                    alt="Vanities"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Vanities</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
            {/* Shop Fronts. 2nd Column, 3rd Row */}
            <a href="#!" className={servicesFourthLinkBox}>
              <div className="service-image">
                <a href="#servImg4" className="lightbox">
                  <img src={stoneShopFronts} alt="Shop Fronts" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={refrigeratorSvg}
                    alt="Shop Fronts"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Shop Fronts</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
            {/* Walls. Second Column, 4th Row */}
            <a href="#!" className={servicesNinthLinkBox}>
              <div className="service-image">
                <a href="#servImg9" className="lightbox">
                  <img src={stoneWall} alt="Walls" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={stoneWallSvg}
                    alt="Walls"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Walls</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
          </li>
          <li>
            {/* Fireplaces. 3rd Column, 1st Row */}
            <a href="#!" className={servicesFifthLinkBox}>
              <div className="service-image">
                <a href="#servImg5" className="lightbox">
                  <img src={fireplace} alt="Fireplaces" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={fireplaceSvg}
                    alt="Fireplaces"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Fireplaces</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
            {/* Floors. Third Column, 2nd Row */}
            <a href="#!" className={servicesEightLinkBox}>
              <div className="service-image">
                <a href="#servImg8" className="lightbox">
                  <img src={stoneFloor} alt="Floors" />
                </a>
              </div>
              <div className={serviceText}>
                <div className={serviceIcon}>
                  <img
                    className={firstIcon}
                    src={stoneFloorSvg}
                    alt="Floors"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={serviceTitle}>Floors</div>
                <div className={serviceDisc}>
                  <a href="/gallery">Gallery</a>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionDesktop;
