import {
  SetErrorsAction,
  ClearErrorsAction,
  LoadingUiAction,
  ToastCloseAction,
  ToastOpenAction
} from './actions/uiActions';
import {
  FetchGalleryAction,
  AddImageAction,
  DeleteImageAction
} from './actions/galleryActions';
import {
  LoadingUserAction,
  SetUserAction,
  SetAuthenticatedAction,
  SetUnauthenticatedAction
} from './actions/userActions';

export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_USER = 'SET_USER';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
export const LOADING_USER = 'LOADING_USER';
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_UI = 'LOADING_UI';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export enum ActionTypes {
  fetchGallery,
  addImage,
  deleteImage,
  toastOpen,
  toastClose,
  setErrors,
  clearErrors,
  setAuthenticated,
  setUnauthenticated,
  loadingUi,
  loadingUser,
  setUser
}

export type Action =
  | FetchGalleryAction
  | AddImageAction
  | DeleteImageAction
  | ToastOpenAction
  | ToastCloseAction
  | SetErrorsAction
  | ClearErrorsAction
  | LoadingUiAction
  | LoadingUserAction
  | SetUserAction
  | SetAuthenticatedAction
  | SetUnauthenticatedAction;
