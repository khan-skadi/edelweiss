import { ADD_IMAGE } from '../types';
import { ObjectLiteral } from '../../utils/interface/interface';

export const addImage = (image: ObjectLiteral) => (dispatch: any) => {
  console.log('Actions Image Object: ', image);
  dispatch({ type: ADD_IMAGE, payload: image });
};
