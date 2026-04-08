import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSpMQdnledYfv95mlAEDe-uZ7f1hkV0c0",
  authDomain: "my-fit-life-app.firebaseapp.com",
  projectId: "my-fit-life-app",
  storageBucket: "my-fit-life-app.firebasestorage.app",
  messagingSenderId: "609959190694",
  appId: "1:609959190694:web:1d9c0aca786da4ddea9467",
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);
