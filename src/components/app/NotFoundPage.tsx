import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  hero: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroText: {
    position: 'relative',
    fontSize: '64px',
    fontWeight: 700
  }
}));

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <h1 className={classes.heroText}>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
