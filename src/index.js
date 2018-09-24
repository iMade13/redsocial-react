import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import AuthFirebase from './Components/Login/AuthFirebase';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
  apiKey: "AIzaSyASGPdlcAyM0wCqN4GtVaN5b_cygABwoeo",
  authDomain: "social-network-react-5f5c4.firebaseapp.com",
  databaseURL: "https://social-network-react-5f5c4.firebaseio.com",
  projectId: "social-network-react-5f5c4",
  storageBucket: "social-network-react-5f5c4.appspot.com",
  messagingSenderId: "31676279948"
})

ReactDOM.render(<AuthFirebase/>, document.getElementById('root'));
registerServiceWorker();


