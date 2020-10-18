import { Dispatch } from 'redux';
import { ObjectLiteral } from '../../utils/interface/interface';
import { ActionTypes } from '../types';

export interface ToastOpenAction {
  type: ActionTypes.toastOpen;
}

export interface ToastCloseAction {
  type: ActionTypes.toastClose;
}

export interface SetErrorsAction {
  type: ActionTypes.setErrors;
  payload: ObjectLiteral;
}

export interface ClearErrorsAction {
  type: ActionTypes.clearErrors;
}

export interface LoadingUiAction {
  type: ActionTypes.loadingUi;
}

export const toastOpen = () => (dispatch: Dispatch) => {
  dispatch<ToastOpenAction>({ type: ActionTypes.toastOpen });
};

export const toastClose = () => (dispatch: Dispatch) => {
  dispatch<ToastCloseAction>({ type: ActionTypes.toastClose });
};
