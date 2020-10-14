import {
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_TOAST_OPEN,
  SET_TOAST_CLOSE
} from '../types';

const initialState = {
  loading: false,
  toastOpen: false,
  errors: null
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case SET_TOAST_OPEN:
      return {
        ...state,
        toastOpen: true
      };
    case SET_TOAST_CLOSE:
      return {
        ...state,
        toastOpen: false
      };
    default:
      return state;
  }
}
