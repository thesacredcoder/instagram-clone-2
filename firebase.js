// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADOKWryxebO7aXT89qVmU5V5Zwgjjfnm0",
  authDomain: "instagram-clone-by-akash-be27b.firebaseapp.com",
  projectId: "instagram-clone-by-akash-be27b",
  storageBucket: "instagram-clone-by-akash-be27b.appspot.com",
  messagingSenderId: "477420027390",
  appId: "1:477420027390:web:419a4010ba7ed11f4a54af",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
