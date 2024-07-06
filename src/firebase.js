
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Ed6s9XCw0lPRAZxtCXU25ISdEwDXKjk",
  authDomain: "drive-c78e0.firebaseapp.com",
  projectId: "drive-c78e0",
  storageBucket: "drive-c78e0.appspot.com",
  messagingSenderId: "482784712819",
  appId: "1:482784712819:web:b28a57241755632c9ef206",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
