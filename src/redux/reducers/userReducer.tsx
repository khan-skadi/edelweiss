import { ObjectLiteral } from '../../utils/interface/interface';
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from '../types';

export interface UserReducerInterface {
  authenticated: boolean;
  credentials: ObjectLiteral;
  loading: boolean;
}

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false
};

export const userReducer = (
  state: UserReducerInterface = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
