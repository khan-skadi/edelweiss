import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { toastr } from 'react-redux-toastr';

const url = '/api/v1/gallery';

export interface IGallery {
  category: string;
  createdAt: string;
  description: string;
  name: string;
  path: string;
  __v: number;
  _id: number;
}

export interface FetchGalleryAction {
  type: ActionTypes.fetchGallery;
  payload: IGallery[];
}

export interface AddImageAction {
  type: ActionTypes.addImage;
  payload: IGallery;
}

export interface DeleteImageAction {
  type: ActionTypes.deleteImage;
  payload: number;
}

interface ResponseData {
  data: IGallery[];
  count: number;
  success: boolean;
}

export const fetchGallery = () => (dispatch: Dispatch) => {
  axios.get<ResponseData>(url).then((res: AxiosResponse<ResponseData>) => {
    dispatch<FetchGalleryAction>({
      type: ActionTypes.fetchGallery,
      payload: res.data.data
    });
  });
};

export const addImage = (image: IGallery) => (dispatch: Dispatch) => {
  dispatch<AddImageAction>({ type: ActionTypes.addImage, payload: image });
  toastr.success('Success !', 'Image added successfully');
};

export const deleteImage = (id: number) => (dispatch: Dispatch) => {
  dispatch<DeleteImageAction>({ type: ActionTypes.deleteImage, payload: id });
  toastr.success('Success !', 'Image deleted successfully');
};
