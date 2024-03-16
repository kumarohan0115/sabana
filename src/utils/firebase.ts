// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDspdhYwyXlV01xCqSmZJBoOauBeY9Oio",
  authDomain: "slack-clone-7478b.firebaseapp.com",
  projectId: "slack-clone-7478b",
  storageBucket: "slack-clone-7478b.appspot.com",
  messagingSenderId: "878619537284",
  appId: "1:878619537284:web:b0d95d8a84b4efb25177d1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };

export default db;