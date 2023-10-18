// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Df4v48lS9nxbspfDDsZWsghnN7sd3ZQ",
  authDomain: "dragon-news-3fb59.firebaseapp.com",
  projectId: "dragon-news-3fb59",
  storageBucket: "dragon-news-3fb59.appspot.com",
  messagingSenderId: "616958125529",
  appId: "1:616958125529:web:92d65efa88cfd7ed7325c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;