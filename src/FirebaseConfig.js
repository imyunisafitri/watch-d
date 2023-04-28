// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWHNbWO2ESaxczGZA_5iFvtDVZHGZSK-Q",
  authDomain: "watch-ceb7d.firebaseapp.com",
  projectId: "watch-ceb7d",
  storageBucket: "watch-ceb7d.appspot.com",
  messagingSenderId: "77409951729",
  appId: "1:77409951729:web:364fbcbe499311f862ee50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
