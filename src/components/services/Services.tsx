import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { ObjectLiteral } from '../../utils/interface/interface';

// Images
// import benchtop3 from '../../assets/images/kitchen/benchtop3.jpg';
import benchtop from '../../assets/images/kitchen/benchtop2.jpg';
import bathroom from '../../assets/images/bathroom/bathroom.jpg';
import renovations from '../../assets/images/renovations/renovations.jpg';
import stoneSplashbacks from '../../assets/images/stoneSplashbacks/stoneSplashbacks.jpg';
import fireplace from '../../assets/images/fireplace/fireplace.jpg';
import stoneTable from '../../assets/images/stoneTable/stoneTable.jpg';

// SVG Icons
import kitchenSvg from '../../assets/images/svg/kitchen.svg';
import rightArrowSvg from '../../assets/images/svg/send.svg';
import laundrySvg from '../../assets/images/svg/laundry.svg';
import renovationsSvg from '../../assets/images/svg/renovations.svg';
import refrigeratorSvg from '../../assets/images/svg/refrigerator.svg';
import fireplaceSvg from '../../assets/images/svg/fireplace.svg';
import stoneTableSvg from '../../assets/images/svg/stoneTable.svg';

import './Services.css';

const styles = (theme: ObjectLiteral) => ({
  ...theme.spreadThis,
  serviceIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '68px',
    position: 'relative',
    overflow: 'hidden',
    height: '66px'
  },
  firstIcon: {
    webkitTransition: 'all .5s ease-in-out',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    cursor: 'default !important',
    margin: 'auto',
    right: 0,
    filter:
      'invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)',
    '&:hover': {
      filter:
        'invert(59%) sepia(13%) saturate(2144%) hue-rotate(125deg) brightness(90%) contrast(88%)'
    }
  },
  serviceDisc: {
    color: '#fff',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
    position: 'relative',
    paddingLeft: '50px',
    margin: '20px 0 0 10px',
    cursor: 'default !important',
    transition: 'box-shadow .3s',
    '&:before': {
      position: 'absolute',
      content: "''",
      background: `url(${rightArrowSvg}) no-repeat`,
      filter:
        'invert(99%) sepia(4%) saturate(1101%) hue-rotate(201deg) brightness(119%) contrast(100%)',
      width: '47px',
      height: '27px',
      left: 0
    },
    '&:hover': {
      color: '#26a69a',
      fontWeight: 600
    }
  },
  servicesSecondLinkBox: {
    display: 'block',
    position: 'relative'
  },
  servicesThirdLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesFourthLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  },
  servicesFifthLinkBox: {
    display: 'block',
    position: 'relative'
  },
  servicesSixthLinkBox: {
    display: 'block',
    position: 'relative',
    marginTop: '30px'
  }
});

const Services = (props: ObjectLiteral) => {
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
        <img src={stoneSplashbacks} alt="Stone Splashbacks" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg5">
        <img src={fireplace} alt="Fireplaces" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg6">
        <img src={stoneTable} alt="Stone Tables" />
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

            <a href="#!" className={classes.servicesFirstLinkBox}>
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
          </li>
          <li>
            {/* Bathroom. 2nd Column, 1st Row */}
            <a href="#!" className={classes.servicesSecondLinkBox}>
              {/* <div className={classes.serviceImage}>
                <img src={bathroom} alt="Bathroom / Laundry vanities" />
              </div> */}
              <div className="service-image">
                <a href="#servImg2" className="lightbox">
                  <img src={bathroom} alt="Bathrooms / Laundry Vanities" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={laundrySvg}
                    alt="Laundry, washing machine"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>
                  Bathroom / Laundry Vanities
                </div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Renovations. 2nd Column, 2nd Row */}
            <a href="#!" className={classes.servicesThirdLinkBox}>
              {/* <div className={classes.serviceImage}>
                <img src={renovations} alt="Renovations" />
              </div> */}
              <div className="service-image">
                <a href="#servImg3" className="lightbox">
                  <img src={renovations} alt="Renovations" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={renovationsSvg}
                    alt="Renovations"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Renovations</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
            {/* Stone Splashbacks. 2nd Column, 3rd Row */}
            <a href="#!" className={classes.servicesFourthLinkBox}>
              {/* <div className={classes.serviceImage}>
                <img src={stoneSplashbacks} alt="Stone Splashbacks" />
              </div> */}
              <div className="service-image">
                <a href="#servImg4" className="lightbox">
                  <img src={stoneSplashbacks} alt="Stone Splashbacks" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={refrigeratorSvg}
                    alt="Stone Splashbacks"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Stone Splashbacks</div>
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
            {/* Stone Tables. 3rd Column, 2nd Row */}
            <a href="#!" className={classes.servicesSixthLinkBox}>
              {/* <div className={classes.serviceImage}>
                <img src={stoneTable} alt="Stone Tables" />
              </div> */}
              <div className="service-image">
                <a href="#servImg6" className="lightbox">
                  <img src={stoneTable} alt="Stone Tables" />
                </a>
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={stoneTableSvg}
                    alt="Stone Tables"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Stone Tables</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default withStyles(styles)(Services);
