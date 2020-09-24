import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { UserList } from './UserList';
import { PostList, PostCreate } from './posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Test = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} create={PostCreate} />
      </Admin>
    </div>
  );
};

export default Test;
