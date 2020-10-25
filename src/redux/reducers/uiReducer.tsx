import { ObjectLiteral } from '../../utils/interface/interface';
import { Action, ActionTypes } from '../types';

const initialState = {
  loading: false,
  toastOpen: false,
  errors: null
};

export interface UiReducerInterface {
  loading: boolean;
  toastOpen: boolean;
  errors: ObjectLiteral | null;
}

export const uiReducer = (
  state: UiReducerInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.setErrors:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case ActionTypes.clearErrors:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case ActionTypes.loadingUi:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.toastOpen:
      return {
        ...state,
        toastOpen: true
      };
    case ActionTypes.toastClose:
      return {
        ...state,
        toastOpen: false
      };
    default:
      return state;
  }
};
