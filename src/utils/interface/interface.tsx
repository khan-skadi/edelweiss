import { IGallery } from '../../redux/actions/galleryActions';

export interface ObjectLiteral {
  [key: string]: any;
}

export interface TemplateVars {
  message_html: string; // feedback
  from_name: string; // name
  reply_to: string; // senderEmail
  from_phone: string; // phone
  from_suburb: string; // suburb
}

export interface GalleryProps {
  gallery: IGallery[];
  fetchGallery: Function;
  logoutUser?: Function;
  deleteImage?: Function;
}
