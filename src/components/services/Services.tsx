import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import benchtop3 from '../../assets/images/kitchen/benchtop3.jpg';
import kitchenSvg from '../../assets/images/svg/kitchen.svg';
import rightArrowSvg from '../../assets/images/svg/send.svg';
import './services.module.css';

interface ObjectLiteral {
  [key: string]: any;
}

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
    WebkitTransition: 'all .5s ease-in-out',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
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
  }
});

const Services = (props: ObjectLiteral) => {
  const { classes } = props;

  return (
    <section className={classes.section_services}>
      <div className={classes.container}>
        <ul className={classes.servicesUl}>
          <li>
            <div className={classes.servicesFirstDiv}>
              <div className={classes.ourServices}>
                <span>Our</span> Services
              </div>
              <p>
                For more information and contact details visit our Contact Page
              </p>
            </div>
            <a href="#!" className={classes.servicesFirstLinkBox}>
              <div className={classes.serviceImage}>
                <img src={benchtop3} alt="Kitchen Benchtop" />
              </div>
              <div className={classes.serviceText}>
                <div className={classes.serviceIcon}>
                  <img
                    className={classes.firstIcon}
                    src={kitchenSvg}
                    alt="kitchen svg"
                    width="57"
                    height="57"
                  />
                </div>
                <div className={classes.serviceTitle}>Kitchen Benchtops</div>
                <div className={classes.serviceDisc}>Gallery</div>
              </div>
            </a>
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </section>
  );
};

export default withStyles(styles)(Services);
