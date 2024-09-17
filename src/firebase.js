import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYhYH3I9J2XA485vtXNBIrn1nD0q0vET4",
  authDomain: "daveagency-1.firebaseapp.com",
  databaseURL: "https://daveagency-1-default-rtdb.firebaseio.com",
  projectId: "daveagency-1",
  storageBucket: "daveagency-1.appspot.com",
  messagingSenderId: "57077958023",
  appId: "1:57077958023:web:cf21cd9196784b02447f22",
  measurementId: "G-CW54Q3Y2KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, analytics, auth, db}