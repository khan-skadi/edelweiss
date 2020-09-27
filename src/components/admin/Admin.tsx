import React from 'react';
import useStyles from './Admin.styles';

import Gallery from '../gallery/GalleryMain';
import MiniHeader from '../header/MiniHeader';

const Admin = () => {
  const { container } = useStyles();

  return (
    <>
      <MiniHeader tab="Admin" />
      <div className={container}>
        <h1>Admin Panel</h1>
        <Gallery />
      </div>
    </>
  );
};

export default Admin;
