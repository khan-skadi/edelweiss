import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { uiReducer } from './reducers/uiReducer';
import { galleryReducer } from './reducers/galleryReducer';

import { UserReducerInterface } from './reducers/userReducer';
import { UiReducerInterface } from './reducers/uiReducer';
import { GalleryReducerInterface } from './reducers/galleryReducer';

const initialState = {};
const middleware = [thunk];

//this is for redux devtool purpose
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

export interface StoreState {
  user: UserReducerInterface;
  UI: UiReducerInterface;
  gallery: GalleryReducerInterface;
}

const reducer = combineReducers<StoreState>({
  user: userReducer,
  UI: uiReducer,
  gallery: galleryReducer
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) as any
  )
);

export default store;
