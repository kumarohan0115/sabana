// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCx-NTe3KyWcwi2Mdiu-AdMBOesf4vfOGw",
  authDomain: "sabana-b1d93.firebaseapp.com",
  projectId: "sabana-b1d93",
  storageBucket: "sabana-b1d93.firebasestorage.app",
  messagingSenderId: "934051870506",
  appId: "1:934051870506:web:fa49a87e7e104cf1605053"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };

export default db;