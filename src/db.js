// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMNt6XWbvLBDShcEHvoT-ZLzvRvQ78UuI",
  authDomain: "mangeons-ensemble.firebaseapp.com",
  projectId: "mangeons-ensemble",
  storageBucket: "mangeons-ensemble.appspot.com",
  messagingSenderId: "895760608779",
  appId: "1:895760608779:web:fdcd4bf6561f899cef610e",
  measurementId: "G-MRJTX0FYNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
