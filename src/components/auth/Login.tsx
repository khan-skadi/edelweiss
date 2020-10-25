import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { ObjectLiteral } from '../../utils/interface/interface';
import { Credentials } from '../../redux/actions/userActions';
import { StoreState } from '../../redux/store';

// Mui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Box,
  Checkbox,
  Button,
  CircularProgress,
  Grid,
  Typography,
  FormControlLabel,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '150px 0'
    },
    paper: {
      maxWidth: '520px',
      padding: '15px',
      margin: '0 auto',
      background: 'rgba(0, 0, 0, 0.01)',
      '& .MuiTypography-h6': {
        textAlign: 'center',
        margin: '-5px 0 5px 0'
      }
    },
    box: {},
    loader: {
      margin: 0
    }
  })
);

function Login(props: any) {
  const [values, setValues] = useState<Credentials>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({} as ObjectLiteral);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (props.UI.errors) {
      setErrors(props.UI.errors);
    }
    setLoading(props.UI.loading);
  }, [props.UI]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: values.email,
      password: values.password
    };
    props.loginUser(userData, props.history);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Login to your account</Typography>
            <Box className={classes.box}>
              <TextField
                variant="outlined"
                margin="none"
                value={values.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                helperText={errors.email}
                error={errors.email ? true : false}
              />
              <TextField
                variant="outlined"
                margin="normal"
                value={values.password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                helperText={errors.password}
                error={errors.password ? true : false}
              />
              {errors.message && (
                <Typography variant="body2">{errors.message}</Typography>
              )}
              <Grid container>
                <Grid item sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                Login
                {loading && (
                  <CircularProgress
                    className={classes.loader}
                    size={30}
                    color="secondary"
                  />
                )}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
