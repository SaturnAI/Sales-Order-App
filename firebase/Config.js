// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsTiytqZoKtG2IQp-IS_Pf4gjKogqP2G4",
  authDomain: "expense-ebb0d.firebaseapp.com",
  databaseURL: "https://expense-ebb0d-default-rtdb.firebaseio.com",
  projectId: "expense-ebb0d",
  storageBucket: "expense-ebb0d.appspot.com",
  messagingSenderId: "255847204038",
  appId: "1:255847204038:web:4b93ec4fa9a1182c5083c7",
  measurementId: "G-J2JKNGGYWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);