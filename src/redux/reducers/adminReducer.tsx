import { ADD_IMAGE } from '../types';

const initialState = {
  images: [],
  loading: false
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    default:
      return state;
  }
}
