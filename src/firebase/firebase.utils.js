import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBILblDIYkE20MD1cHu_aGPjymoioAbKdA",
  authDomain: "cos-db.firebaseapp.com",
  databaseURL: "https://cos-db.firebaseio.com",
  projectId: "cos-db",
  storageBucket: "cos-db.appspot.com",
  messagingSenderId: "597105496441",
  appId: "1:597105496441:web:8f428ced9c77b66ad15fa8",
  measurementId: "G-P5BFT7XVKD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;