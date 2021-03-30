import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import { userReducer } from "./userReducer";
import { uiReducer } from "./uiReducer";
import { galleryReducer } from "./galleryReducer";
import { StoreState } from "../store";

const rootReducer = combineReducers<StoreState>({
  toastr: toastrReducer,
  user: userReducer,
  UI: uiReducer,
  gallery: galleryReducer,
});

export default rootReducer;
