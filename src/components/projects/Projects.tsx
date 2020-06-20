import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';

import { ObjectLiteral } from '../../utils/interface/interface';

import benchtop from '../../assets/images/kitchen/benchtop3.jpg';
import fireplace from '../../assets/images/fireplace/fireplace.jpg';

// Mui styles HOC
const styles = (theme: ObjectLiteral) => ({
  ...theme.spreadThis,
  sectionProjects: {
    backgroundColor: '#f1f5f6',
    padding: '70px 0',
    position: 'relative',
    borderTop: '1px solid #eaeaea',
    marginBottom: '10px'
  },
  projectLeft: {
    paddingRight: '100px',
    width: 'calc(100% - 425px)',
    float: 'left'
  },
  projectRight: {
    float: 'right',
    background: '#fff',
    padding: '30px',
    width: '425px',
    border: '1px solid #e1e1e1',
    marginTop: '60px'
  },
  projectsTitle: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: '62px',
    fontSize: '60px',
    fontWeight: 100,
    zIndex: 1,
    '& > span': {
      fontWeight: 700
    }
  },
  projectsCarousel: {
    paddingLeft: '40px'
  }
});

// Carousel function
function Caro(props: ObjectLiteral) {
  const {
    item: { description, image }
  } = props;

  return (
    <Paper style={{ boxShadow: 'none' }}>
      <img src={image} alt="benchtop" />
      <p>{description}</p>
    </Paper>
  );
}

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
        <div className={classes.projectsTitle}>
          <span>Our</span> Projects
        </div>
        <div className={classes.projectLeft}>
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
          <h4>Instagram section</h4>
        </div>
      </Box>
    </section>
  );
};

export default withStyles(styles)(Projects);
