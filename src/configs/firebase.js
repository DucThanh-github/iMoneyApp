import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgTRPlZe0mJ8hOxFCM263ioubftH_f8Kc",
  authDomain: "moneytest-bed15.firebaseapp.com",
  projectId: "moneytest-bed15",
  storageBucket: "moneytest-bed15.appspot.com",
  messagingSenderId: "711762700477",
  appId: "1:711762700477:web:7bd864d0287fefe22f2fd4",
  measurementId: "G-NYCMXKLZXT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStore = getFirestore(app);
const authStore = getAuth(app);

export { firebaseStore, authStore };
