import { logoutUser, getUserData } from '../../redux/actions/userActions';
import { bindActionCreators } from 'redux';
import { ActionTypes } from '../../redux/types';
import jwtDecode from 'jwt-decode';
import store from '../../redux/store';
import axios from 'axios';

const boundActions = bindActionCreators(
  { logoutUser, getUserData },
  store.dispatch
);

export const CheckAuthentication = () => {
  const authToken = localStorage.token;
  if (authToken) {
    const decodedToken: any = jwtDecode(authToken);
    console.log(decodedToken.iss);
    if (decodedToken.exp * 1000 < Date.now()) {
      boundActions.logoutUser();
    } else {
      store.dispatch({
        type: ActionTypes.setAuthenticated
      });
      axios.defaults.headers.common['Authorization'] = authToken;
      boundActions.getUserData();
    }
  }
};
