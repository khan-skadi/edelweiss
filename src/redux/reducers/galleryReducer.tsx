import { Gallery } from '../actions/galleryActions';
import { Action, ActionTypes } from '../types';

const initialState = {
  gallery: []
};

export interface GalleryReducerInterface {
  gallery: Gallery[];
}

export const galleryReducer = (
  state: GalleryReducerInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchGallery:
      return {
        gallery: action.payload
      };
    case ActionTypes.addImage:
      return {
        ...state,
        gallery: [...state.gallery, action.payload]
      };
    case ActionTypes.deleteImage:
      return {
        gallery: state.gallery.filter(
          (image: Gallery) => image.id !== action.payload
        )
      };
    default:
      return state;
  }
};
