import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUJq76t_9ETNn9aWk-SY_WFyoEnzFo9BA",
  authDomain: "grounded-access-249110.firebaseapp.com",
  databaseURL: "https://grounded-access-249110.firebaseio.com",
  projectId: "grounded-access-249110",
  storageBucket: "grounded-access-249110.appspot.com",
  messagingSenderId: "237834368593",
  appId: "1:237834368593:web:019b3508631a310ad2aa70",
  measurementId: "G-XFKB06TFD5"
});

const db = fireBaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};