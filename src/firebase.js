import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArgaKqnMkkfkI85s5rNS9hwFdq9sD3P1Q",
  authDomain: "disneyplus-clone-3edbd.firebaseapp.com",
  projectId: "disneyplus-clone-3edbd",
  storageBucket: "disneyplus-clone-3edbd.appspot.com",
  messagingSenderId: "298665582607",
  appId: "1:298665582607:web:090f231ad6477ad48d837a",
  measurementId: "G-N7PBC8TEL0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider , storage};
export default db;