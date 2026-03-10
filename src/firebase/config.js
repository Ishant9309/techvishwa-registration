import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYU1a-Fp-uOFZKSetUtOTFXjQK2Sn8gNs",
  authDomain: "event-registration-951ce.firebaseapp.com",
  projectId: "event-registration-951ce",
  storageBucket: "event-registration-951ce.firebasestorage.app",
  messagingSenderId: "315854043176",
  appId: "1:315854043176:web:c5c7b200ca37f17b955d1d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);