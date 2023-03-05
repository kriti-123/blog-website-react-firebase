import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUkHHr1UcRpv21jeWvLGGjillE5PdmeEY",
  authDomain: "react-blog-hooks-c97be.firebaseapp.com",
  projectId: "react-blog-hooks-c97be",
  storageBucket: "react-blog-hooks-c97be.appspot.com",
  messagingSenderId: "371694479199",
  appId: "1:371694479199:web:796804d12f56bf06d4f8ea"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();