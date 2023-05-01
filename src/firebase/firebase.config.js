// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Twj76dya3gbNlp-JgIuNBqn1rfcCH8w",
  authDomain: "testy-recipes-client.firebaseapp.com",
  projectId: "testy-recipes-client",
  storageBucket: "testy-recipes-client.appspot.com",
  messagingSenderId: "248922088184",
  appId: "1:248922088184:web:aa0dd8f759b7834237510d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;