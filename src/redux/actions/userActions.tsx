import axios from 'axios';
import {
  SET_USER,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from '../types';

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/api/v1/auth/login', userData)
    .then((res) => {
      const token = `Bearer ${res.data.token}`;
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      axios.defaults.headers.common['Authorization'] = token;
      console.log(getCookie('Token'));
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      console.log('success');
      history.push('/admin');
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

function getCookie(cookieName: string) {
  const allCookies = document.cookie;
  const arrayb = allCookies.split(';');
  for (const item in arrayb) {
    if (item.startsWith('Token=')) {
      const c = item.substr(5);
      return c;
    }
  }
}

// for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/api/v1/auth/me')
    .then((res) => {
      console.log('user data', res.data);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({
    type: SET_UNAUTHENTICATED
  });
  window.location.href = '/login';
};
