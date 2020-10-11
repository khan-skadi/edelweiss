import { SET_AUTHENTICATED } from '../../redux/types';
import { logoutUser, getUserData } from '../../redux/actions/userActions';
import jwtDecode from 'jwt-decode';
import store from '../../redux/store';
import axios from 'axios';

export const CheckAuthentication = () => {
  const authToken = localStorage.token;
  if (authToken) {
    const decodedToken: any = jwtDecode(authToken);
    console.log(decodedToken.iss);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common['Authorization'] = authToken;
      store.dispatch(getUserData());
    }
  }
};
