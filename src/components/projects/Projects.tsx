import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Box } from '@material-ui/core';

import { ObjectLiteral } from '../../utils/interface/interface';

import benchtop from '../../assets/images/kitchen/benchtop3.jpg';
import fireplace from '../../assets/images/fireplace/fireplace.jpg';

import instagram from '../../assets/images/followUsOnInstagram.jpg';

// Mui styles HOC
const styles = (theme: ObjectLiteral) => ({
  ...theme.spreadThis,
  sectionProjects: {
    display: 'block',
    backgroundColor: '#f1f5f6',
    padding: '70px 0',
    position: 'relative',
    borderTop: '1px solid #eaeaea',
    marginBottom: '10px',
    '&:before': {
      position: 'absolute',
      content: "''",
      right: '50px',
      top: 0,
      width: '1px',
      height: '100%',
      background: '#cbcecf',
      boxSizing: 'border-box'
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  projectLeft: {
    paddingRight: '100px',
    width: 'calc(100% - 425px)',
    float: 'left'
  },
  projectsTitle: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: '62px',
    fontSize: '60px',
    fontWeight: 100,
    zIndex: 1,
    fontFamily: 'Lato',
    '& > span': {
      display: 'block',
      fontWeight: 700
    },
    '&:before': {
      boxSizing: 'border-box'
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  projectsCarousel: {
    paddingLeft: '120px',
    marginTop: '-20px',
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    userSelect: 'none',
    touchAction: 'pan-y',
    webkitTapHighlightColor: 'transparent',
    letterSpacing: 'normal',
    overflow: 'hidden'
  },
  projectRight: {
    float: 'right',
    background: '#fff',
    padding: '30px',
    width: '425px',
    border: '1px solid #e1e1e1',
    marginTop: '60px'
  },
  instagramBanner: {
    verticalAlign: 'bottom',
    maxWidth: '100%'
  },
  instagram: {
    '&:before': {
      boxSizing: 'border-box'
    },
    '&:after': {
      boxSizing: 'border-box',
      content: "''",
      display: 'table',
      clear: 'both'
    }
  }
});

// Carousel function
function Caro(props: ObjectLiteral) {
  const {
    item: { description, image }
  } = props;

  return (
    <Paper style={{ boxShadow: 'none', backgroundColor: '#f1f5f6' }}>
      <div
        style={{
          borderBottom: '10px solid #26a69a',
          marginBottom: '-10px',
          display: 'inline-block',
          position: 'relative'
        }}
      >
        <img
          src={image}
          alt="benchtop"
          style={{
            display: 'block',
            verticalAlign: 'bottom',
            maxWidth: '100%'
          }}
        />
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: '26px',
          lineHeight: '100%',
          color: '#060606',
          marginTop: '20px',
          fontFamily: 'Lato'
        }}
      >
        {description}
      </div>
    </Paper>
  );
}

// Instagram API
const appId = '637025016892275';
const redirectUri = 'https://edelweissstone.com.au'; // /auth

const fetchIg = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

// Projects Component
const Projects = (props: ObjectLiteral) => {
  const { classes } = props;

  const items = [
    {
      description: 'Commercial',
      image: benchtop
    },
    {
      description: 'Renovation',
      image: fireplace
    }
  ];

  return (
    <section className={classes.sectionProjects}>
      <Box className={classes.container} component="div">
        <div className={classes.projectLeft}>
          <div className={classes.projectsTitle}>
            <span>Our</span> Projects
          </div>
          <Carousel
            className={classes.projectsCarousel}
            next={(next: ObjectLiteral, active: ObjectLiteral) =>
              console.log(`we left ${active}, and are now at ${next}`)
            }
            prev={(prev: ObjectLiteral, active: ObjectLiteral) =>
              console.log(`we left ${active}, and are now at ${prev}`)
            }
            autoPlay={false}
          >
            {items.map((item) => (
              <Caro item={item} />
            ))}
          </Carousel>
        </div>
        <div className={classes.projectRight}>
          <a href="#!" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.instagramBanner}
              src={instagram}
              alt="instagram banner"
            />
          </a>
          <div className={classes.instagramContainer}>
            <div
              id="instagram"
              className={classes.instagram}
              style={{
                paddingBottom: '14px',
                width: '355px',
                margin: '0 auto',
                padding: 0,
                boxSizing: 'border-box',
                border: 0,
                verticalAlign: 'baseline'
              }}
            ></div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default withStyles(styles)(Projects);