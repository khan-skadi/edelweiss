import React, { useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

// Typescript
import { ObjectLiteral } from '../../utils/interface/interface';
import { Credentials } from '../../redux/actions/userActions';
import { StoreState } from '../../redux/store';
import { History } from 'history';
import { UiReducerInterface } from '../../redux/reducers/uiReducer';
import { UserReducerInterface } from '../../redux/reducers/userReducer';

// Mui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      margin: '255px 0 150px 0'
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

interface LoginProps {
  user: UserReducerInterface;
  UI: UiReducerInterface;
  loginUser: (credentials: Credentials, history: History) => void;
  history: History;
}

function Login(props: LoginProps) {
  const [values, setValues] = useState<Credentials>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<ObjectLiteral>({});
  const [loading, setLoading] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    if (props.UI.errors) {
      setErrors(props.UI.errors);
    }
    setLoading(props.UI.loading);
  }, [props.UI]);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: values.email,
      password: values.password
    };
    props.loginUser(userData, props.history);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
