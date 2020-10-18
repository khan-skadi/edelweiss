import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';

const url = '/api/v1/gallery';

export interface Gallery {
  category: string;
  createdAt: string;
  description: string;
  name: string;
  path: string;
  __v: number;
  id: number;
}

export interface FetchGalleryAction {
  type: ActionTypes.fetchGallery;
  payload: Gallery[];
}

export interface AddImageAction {
  type: ActionTypes.addImage;
  payload: Gallery;
}

export interface DeleteImageAction {
  type: ActionTypes.deleteImage;
  payload: number;
}

export const fetchGallery = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Gallery[]>(url);

    dispatch<FetchGalleryAction>({
      type: ActionTypes.fetchGallery,
      payload: response.data
    });
  };
};

export const addImage = (image: Gallery) => (dispatch: Dispatch) => {
  dispatch<AddImageAction>({ type: ActionTypes.addImage, payload: image });
};

export const deleteImage = (id: number) => (dispatch: Dispatch) => {
  dispatch<DeleteImageAction>({ type: ActionTypes.deleteImage, payload: id });
};
