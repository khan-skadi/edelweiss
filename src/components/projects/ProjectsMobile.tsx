import React from "react";
import useStyles from "./ProjectsMobile.styles";
import clsx from "clsx";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

import { ObjectLiteral } from "../../utils/interface/interface";

// Images
import caro1 from "../../assets/images/carousel/caro1.jpg";
import caro2 from "../../assets/images/carousel/caro2.jpg";
import caro3 from "../../assets/images/carousel/caro3.jpg";
import caro4 from "../../assets/images/carousel/caro4.jpg";
import caro5 from "../../assets/images/carousel/caro5.jpg";
import caro6 from "../../assets/images/carousel/caro6.jpg";
import caro7 from "../../assets/images/carousel/caro7.jpg";

import instagram from "../../assets/images/followUsOnInstagram.jpg";

// Carousel function
function Caro(props: ObjectLiteral) {
  const {
    item: { description, image }
  } = props;

  return (
    <Paper style={{ boxShadow: "none", backgroundColor: "#f1f5f6" }}>
      <div
        style={{
          borderBottom: "10px solid #158d43",
          marginBottom: "-10px",
          display: "inline-block",
          position: "relative"
        }}
      >
        <img
          src={image}
          alt="benchtop"
          style={{
            display: "block",
            verticalAlign: "bottom",
            maxWidth: "100%"
          }}
        />
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: "26px",
          lineHeight: "100%",
          color: "#060606",
          marginTop: "20px",
          fontFamily: "'Lato', sans-serif"
        }}
      >
        {description}
      </div>
    </Paper>
  );
}

const ProjectsMobile = (props: ObjectLiteral) => {
  const {
    projectsMobile,
    container,
    projectsTitle,
    caroHolder,
    projectsCarousel,
    projectsRight,
    instagramBanner,
    instagramContainer
  } = useStyles();

  // Carousel items
  const items = [
    {
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
      image: caro7
    }
  ];

  return (
    <section className={projectsMobile}>
      <div className={container}>
        {/* Left */}
        <div id="projects">
          <div className={projectsTitle}>
            <span>Our</span> Projects
          </div>
          <div className={caroHolder}>
            <Carousel className={projectsCarousel}>
              {items.map((item) => (
                <Caro item={item} key={item.image} />
              ))}
            </Carousel>
          </div>
        </div>
        {/* Right */}
        <div className={projectsRight}>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsMobile;
