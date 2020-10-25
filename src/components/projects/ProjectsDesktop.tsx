import React from 'react';
import { ObjectLiteral } from '../../utils/interface/interface';
import { links, caroItems } from '../../utils/constants';
import Carousel from 'react-material-ui-carousel';
import useStyles from './ProjectsDesktop.styles';

// Mui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import instagram from '../../assets/images/followUsOnInstagram.jpg';

interface CaroItem {
  description: string;
  image: typeof import('*.jpg');
}

// Carousel function
function Caro(props: ObjectLiteral) {
  const {
    item: { description, image }
  } = props;

  return (
    <Paper style={{ boxShadow: 'none', backgroundColor: '#f1f5f6' }}>
      <div
        style={{
          borderBottom: '10px solid #158d43',
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
          fontFamily: "'Lato', sans-serif"
        }}
      >
        {description}
      </div>
    </Paper>
  );
}

const ProjectsDesktop = () => {
  const {
    projectsTitle,
    caroHolder,
    projectsCarousel,
    projectRight,
    instagramBanner,
    projectLeft,
    instagramContainer
  } = useStyles();

  return (
    <>
      <div id="projects" className={projectLeft}>
        <div className={projectsTitle}>
          <span>Our</span> Projects
        </div>
        <div className={caroHolder}>
          <Carousel className={projectsCarousel}>
            {caroItems.map((item: CaroItem) => (
              <Caro item={item} key={item.image.toString()} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={projectRight}>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <img
            className={instagramBanner}
            src={instagram}
            alt="instagram banner"
          />
        </a>
        <div className={instagramContainer}>
          <div id="instagram" className={instagram}>
            <Typography
              variant="h4"
              color="secondary"
              style={{ textAlign: 'center', marginTop: '50px' }}
            >
              Coming soon !
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDesktop;
