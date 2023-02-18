// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1260SiqMUQaEpz8WHBOroC8Xo-Qgg7og",
  authDomain: "realtor-clone-react-d6296.firebaseapp.com",
  projectId: "realtor-clone-react-d6296",
  storageBucket: "realtor-clone-react-d6296.appspot.com",
  messagingSenderId: "950905958128",
  appId: "1:950905958128:web:03f87957cfb1a70b609c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()