// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAq00jUSgJ3fSaHmyjJujZ5ro1iO7XJG0",
  authDomain: "finalpjjsi.firebaseapp.com",
  projectId: "finalpjjsi",
  storageBucket: "finalpjjsi.appspot.com",
  messagingSenderId: "870976735408",
  appId: "1:870976735408:web:410eb5c6701660f14bd375",
  measurementId: "G-4H9EJDW62N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
