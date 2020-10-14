import { SET_TOAST_OPEN, SET_TOAST_CLOSE } from '../types';

export const toastOpen = () => (dispatch: any) => {
  dispatch({ type: SET_TOAST_OPEN });
};

export const toastClose = () => (dispatch: any) => {
  dispatch({ type: SET_TOAST_CLOSE });
};
