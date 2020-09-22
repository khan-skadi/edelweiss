<<<<<<< HEAD
import React from 'react';
import useStyles from './ProjectsDesktop.styles';

import { ObjectLiteral } from '../../utils/interface/interface';

import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@material-ui/core';

// Images
import caro1 from '../../assets/images/carousel/caro1.jpg';
import caro2 from '../../assets/images/carousel/caro2.jpg';
import caro3 from '../../assets/images/carousel/caro3.jpg';
import caro4 from '../../assets/images/carousel/caro4.jpg';
import caro5 from '../../assets/images/carousel/caro5.jpg';
import caro6 from '../../assets/images/carousel/caro6.jpg';
import caro7 from '../../assets/images/carousel/caro7.jpg';

import instagram from '../../assets/images/followUsOnInstagram.jpg';
=======
import React from "react";
import useStyles from "./ProjectsDesktop.styles";

import { ObjectLiteral } from "../../utils/interface/interface";

import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@material-ui/core";

// Images
import caro1 from "../../assets/images/carousel/caro1.jpg";
import caro2 from "../../assets/images/carousel/caro2.jpg";
import caro3 from "../../assets/images/carousel/caro3.jpg";
import caro4 from "../../assets/images/carousel/caro4.jpg";
import caro5 from "../../assets/images/carousel/caro5.jpg";
import caro6 from "../../assets/images/carousel/caro6.jpg";
import caro7 from "../../assets/images/carousel/caro7.jpg";

import instagram from "../../assets/images/followUsOnInstagram.jpg";
>>>>>>> develop

// Carousel function
function Caro(props: ObjectLiteral) {
  const {
    item: { description, image }
  } = props;

  return (
<<<<<<< HEAD
    <Paper style={{ boxShadow: 'none', backgroundColor: '#f1f5f6' }}>
      <div
        style={{
          borderBottom: '10px solid #158d43',
          marginBottom: '-10px',
          display: 'inline-block',
          position: 'relative'
=======
    <Paper style={{ boxShadow: "none", backgroundColor: "#f1f5f6" }}>
      <div
        style={{
          borderBottom: "10px solid #158d43",
          marginBottom: "-10px",
          display: "inline-block",
          position: "relative"
>>>>>>> develop
        }}
      >
        <img
          src={image}
          alt="benchtop"
          style={{
<<<<<<< HEAD
            display: 'block',
            verticalAlign: 'bottom',
            maxWidth: '100%'
=======
            display: "block",
            verticalAlign: "bottom",
            maxWidth: "100%"
>>>>>>> develop
          }}
        />
      </div>
      <div
        style={{
          fontWeight: 500,
<<<<<<< HEAD
          fontSize: '26px',
          lineHeight: '100%',
          color: '#060606',
          marginTop: '20px',
=======
          fontSize: "26px",
          lineHeight: "100%",
          color: "#060606",
          marginTop: "20px",
>>>>>>> develop
          fontFamily: "'Lato', sans-serif"
        }}
      >
        {description}
      </div>
    </Paper>
  );
}

const ProjectsDesktop = (props: ObjectLiteral) => {
  const {
    container,
    projectsTitle,
    caroHolder,
    projectsCarousel,
    projectRight,
    instagramBanner,
    projectLeft,
    instagramContainer
  } = useStyles();

  // Carousel items
  const items = [
    {
<<<<<<< HEAD
      description: 'Renovation',
      image: caro1
    },
    {
      description: 'Fireplace',
      image: caro2
    },
    {
      description: 'Kitchen Benchtop',
      image: caro3
    },
    {
      description: 'Bathroom',
      image: caro4
    },
    {
      description: 'Kitchen Benchtop',
      image: caro5
    },
    {
      description: 'Kitchen Benchtop',
      image: caro6
    },
    {
      description: 'Kitchen Benchtop',
=======
      description: "Renovation",
      image: caro1
    },
    {
      description: "Fireplace",
      image: caro2
    },
    {
      description: "Kitchen Benchtop",
      image: caro3
    },
    {
      description: "Bathroom",
      image: caro4
    },
    {
      description: "Kitchen Benchtop",
      image: caro5
    },
    {
      description: "Kitchen Benchtop",
      image: caro6
    },
    {
      description: "Kitchen Benchtop",
>>>>>>> develop
      image: caro7
    }
  ];

  return (
    <section>
      <Box className={container} component="div">
        <div id="projects" className={projectLeft}>
          <div className={projectsTitle}>
            <span>Our</span> Projects
          </div>
          <div className={caroHolder}>
            <Carousel className={projectsCarousel}>
              {items.map((item: ObjectLiteral) => (
                <Caro item={item} key={item.image.toString()} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className={projectRight}>
          <a
            href="https://www.instagram.com/edelweissstone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={instagramBanner}
              src={instagram}
              alt="instagram banner"
            />
          </a>
          <div className={instagramContainer}>
            <div
              id="instagram"
              className={instagram}
              style={{
<<<<<<< HEAD
                paddingBottom: '14px',
                width: '355px',
                margin: '0 auto',
                padding: 0,
                boxSizing: 'border-box',
                border: 0,
                verticalAlign: 'baseline'
=======
                paddingBottom: "14px",
                width: "355px",
                margin: "0 auto",
                padding: 0,
                boxSizing: "border-box",
                border: 0,
                verticalAlign: "baseline"
>>>>>>> develop
              }}
            ></div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ProjectsDesktop;
