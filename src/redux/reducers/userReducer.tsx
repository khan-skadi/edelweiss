import { ObjectLiteral } from '../../utils/interface/interface';
import { Action, ActionTypes } from '../../redux/types';
import { UserData } from '../actions/userActions';

const initialState = {
  authenticated: false,
  credentials: null,
  loading: false
};

export interface UserReducerInterface {
  authenticated: boolean;
  credentials: UserData | null;
  loading: boolean;
}

export const userReducer = (
  state: UserReducerInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.setAuthenticated:
      return {
        ...state,
        authenticated: true
      };
    case ActionTypes.setUnauthenticated:
      return state;
    case ActionTypes.setUser:
      return {
        authenticated: true,
        loading: false,
        credentials: action.payload
      };
    case ActionTypes.loadingUser:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
