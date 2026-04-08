import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import key from "./FirebaseAPI.js"

const firebaseConfig = {
  apiKey: key,
  authDomain: "info3141-lab7-aa003.firebaseapp.com",
  projectId: "info3141-lab7-aa003",
  storageBucket: "info3141-lab7-aa003.firebasestorage.app",
  messagingSenderId: "520232652679",
  appId: "1:520232652679:web:afe97e413195fa3ca8cd22",
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);
