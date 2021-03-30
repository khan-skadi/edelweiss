import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { ToastrState as ToasterReducer } from "react-redux-toastr";
import { rootReducer } from "./reducers/rootReducer";

import { UserReducerInterface } from "./reducers/userReducer";
import { UiReducerInterface } from "./reducers/uiReducer";
import { GalleryReducerInterface } from "./reducers/galleryReducer";

const initialState = {};
const middleware = [thunk];

export interface StoreState {
  user: UserReducerInterface;
  UI: UiReducerInterface;
  gallery: GalleryReducerInterface;
  toastr: ToasterReducer;
}

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleware))
// );

// export default store;

export function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
