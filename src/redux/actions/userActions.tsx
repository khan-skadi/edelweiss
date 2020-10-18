import store from '../store';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import {
  LoadingUiAction,
  ClearErrorsAction,
  SetErrorsAction
} from './uiActions';
import { ActionTypes } from '../types';
import { toastr } from 'react-redux-toastr';

export interface UserData {
  createdAt: string;
  email: string;
  name: string;
  role: string;
  __v: number;
  _id: string;
}

interface ResponseData {
  data: UserData;
  success: boolean;
}

export interface LoadingUserAction {
  type: ActionTypes.loadingUser;
}

export interface SetUserAction {
  type: ActionTypes.setUser;
  payload: UserData;
}

export interface SetAuthenticatedAction {
  type: ActionTypes.setAuthenticated;
}

export interface SetUnauthenticatedAction {
  type: ActionTypes.setUnauthenticated;
}

export interface Credentials {
  email: string;
  password: string;
}

export const getUserData = () => (dispatch: Dispatch) => {
  dispatch<LoadingUserAction>({ type: ActionTypes.loadingUser });
  const url = '/api/v1/auth/me';

  axios
    .get<ResponseData>(url)
    .then((res: AxiosResponse<ResponseData>) => {
      dispatch<SetUserAction>({
        type: ActionTypes.setUser,
        payload: res.data.data
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

const boundActions = bindActionCreators({ getUserData }, store.dispatch);

export const loginUser = (credentials: Credentials, history: any) => (
  dispatch: Dispatch
) => {
  dispatch<LoadingUiAction>({ type: ActionTypes.loadingUi });
  const url = '/api/v1/auth/login';

  axios
    .post(url, credentials)
    .then((res) => {
      const token = `Bearer ${res.data.token}`;
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      axios.defaults.headers.common['Authorization'] = token;
      console.log(getCookie('Token'));
      boundActions.getUserData();
      dispatch<SetAuthenticatedAction>({ type: ActionTypes.setAuthenticated });
      dispatch<ClearErrorsAction>({ type: ActionTypes.clearErrors });
      toastr.success('Welcome !', 'Logged in successfully');
      history.push('/admin');
    })
    .catch((err) => {
      console.log(err);
      dispatch<SetErrorsAction>({
        type: ActionTypes.setErrors,
        payload: err.response.data
      });
      toastr.error(
        'Invalid credentials',
        'Something went wrong, please try again'
      );
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

export const logoutUser = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch<SetUnauthenticatedAction>({
    type: ActionTypes.setUnauthenticated
  });
  window.location.href = '/login';
};
