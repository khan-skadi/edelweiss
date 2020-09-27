import React from 'react';
import useStyles from './Admin.styles';

import MiniHeader from '../header/MiniHeader';

const Admin = () => {
  const { container, adminTitle } = useStyles();

  return (
    <>
      <MiniHeader tab="Admin" />
      <div className={container}>
        <h1 className={adminTitle}>Admin Panel</h1>
      </div>
    </>
  );
};

export default Admin;
