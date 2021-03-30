import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { ToastrState as ToasterReducer } from "react-redux-toastr";

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

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
