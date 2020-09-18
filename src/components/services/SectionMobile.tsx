import React from "react";
import useStyles from "./SectionMobile.styles";

import { ObjectLiteral } from "../../utils/interface/interface";

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

const SectionMobile = (props: ObjectLiteral) => {
  const {
    sectionServicesMobile,
    container,
    serviceList,
    firstDiv,
    title,
    para,
    firstImage,
    imageContainer,
    imageText,
    firstIcon,
    serviceDisc,
    imageCount,
    imageIcon,
    imageTitle
  } = useStyles();

  return (
    <section className={sectionServicesMobile}>
      <div className={container}>
        <ul className={serviceList}>
          {/* Kitchen Benchtops */}
          <li>
            <div className={firstDiv}>
              <div className={title}>
                <span>Our</span> Services
              </div>
              <p className={para}>
                For more information and contact details visit our Contact Page
              </p>
            </div>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={benchtop} alt="Kitchen Benchtops" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img className={firstIcon} src={kitchenSvg} alt="Kitchen" />
                </div>
                <div className={imageTitle}>Kitchen Benchtops</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>01</div>
            </a>
          </li>
          {/* Monuments */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={monument} alt="Monuments" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img
                    className={firstIcon}
                    src={monumentSvg}
                    alt="Monuments"
                  />
                </div>
                <div className={imageTitle}>Monuments</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>02</div>
            </a>
          </li>
          {/* Staircases */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={stoneStaircases} alt="Staircases" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img
                    className={firstIcon}
                    src={stoneTableSvg}
                    alt="Staircases"
                  />
                </div>
                <div className={imageTitle}>Staircasess</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>03</div>
            </a>
          </li>
          {/* Bathrooms */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={bathroom} alt="Bathrooms" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img className={firstIcon} src={laundrySvg} alt="Bathrooms" />
                </div>
                <div className={imageTitle}>Bathrooms</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>04</div>
            </a>
          </li>
          {/* Vanities */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={renovations} alt="Vanities" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img
                    className={firstIcon}
                    src={renovationsSvg}
                    alt="Vanities"
                  />
                </div>
                <div className={imageTitle}>Vanities</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>05</div>
            </a>
          </li>
          {/* Shop Fronts */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={stoneShopFronts} alt="Shop Fronts" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img
                    className={firstIcon}
                    src={refrigeratorSvg}
                    alt="Shop Fronts"
                  />
                </div>
                <div className={imageTitle}>Shop Fronts</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>06</div>
            </a>
          </li>
          {/* Walls */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={stoneWall} alt="Walls" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img className={firstIcon} src={stoneWallSvg} alt="Walls" />
                </div>
                <div className={imageTitle}>Walls</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>07</div>
            </a>
          </li>
          {/* Fireplaces */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={fireplace} alt="Fireplaces" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img
                    className={firstIcon}
                    src={fireplaceSvg}
                    alt="Fireplaces"
                  />
                </div>
                <div className={imageTitle}>Fireplaces</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>08</div>
            </a>
          </li>
          {/* Floors */}
          <li>
            <a href="#!" className={firstImage}>
              <div className={imageContainer}>
                <img src={stoneFloor} alt="Floors" />
              </div>
              <div className={imageText}>
                <div className={imageIcon}>
                  <img className={firstIcon} src={stoneFloorSvg} alt="Floors" />
                </div>
                <div className={imageTitle}>Floors</div>
                <div className={serviceDisc}>Gallery</div>
              </div>
              <div className={imageCount}>09</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionMobile;
