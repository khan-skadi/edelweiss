import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBnn5fyJZ5ugSmNWg5KfNodrF5CKOFdono',
  authDomain: 'edelweissstone-85328.firebaseapp.com',
  databaseURL: 'https://edelweissstone-85328.firebaseio.com',
  projectId: 'edelweissstone-85328',
  storageBucket: 'edelweissstone-85328.appspot.com',
  messagingSenderId: '939607873657',
  appId: '1:939607873657:web:7818a17734568829299ca8',
  measurementId: 'G-9PWLBL4632'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
