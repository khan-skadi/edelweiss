import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import stoneKitchen from '../../assets/images/stoneKitchen.jpg';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    height: '97vh',
    backgroundImage: `url(${stoneKitchen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    filter: 'brightness(25%)'
  },
  heroCaption: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    verticalAlign: 'baseline'
  },
  container: {
    height: '100%',
    maxWidth: '1850px',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',
    '&:before': {
      display: 'table',
      content: "''",
      boxSizing: 'border-box'
    },
    '&:after': {
      clear: 'both',
      display: 'table',
      content: "''"
    }
  },
  heroText: {
    display: 'table',
    width: '100%',
    height: '100%'
  },
  heroTextCell: {
    paddingLeft: '30px',
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  heroHead: {
    fontSize: '60px',
    lineHeight: '60px',
    color: '#fff',
    paddingBottom: '5px',
    '& > p': {
      color: theme.palette.primary.main,
      fontWeight: 'bolder'
    }
  },
  heroTextCell_p: {
    fontSize: '27px',
    lineHeight: '36px',
    color: '#fff'
  },
  p_grTxt: {
    fontSize: '22px',
    lineHeight: '36px',
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  strokedText: {
    fontSize: '60px',
    lineHeight: '60px',
    textTransform: 'uppercase',
    WebkitTextStroke: '2px #26a69a',
    color: 'transparent',
    fontWeight: 'bold'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div id="home" className={classes.heroContainer}></div>
      <div className={classes.heroCaption}>
        <div className={classes.container}>
          <div className={classes.heroText}>
            <div className={classes.heroTextCell}>
              <div className={classes.heroHead}>
                <span className={classes.strokedText}>We</span>{' '}
                <span className={classes.heroHead}>Specialize in</span>
              </div>
              <Typography variant="body1" className={classes.heroTextCell_p}>
                Marble, Granite & Reconstituted stone
              </Typography>
              <Typography variant="body1" className={classes.p_grTxt}>
                Talk to us about the 24 months interest-free options!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
