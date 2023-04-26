import { initializeApp } from "firebase/app";
import "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZhFLIJyHBabQ8e7JCE8Czlu4_Q6SVyGk",
  authDomain: "your-auth-domain-b1234.firebaseapp.com",
  databaseURL: "https://koinget-bba63-default-rtdb.firebaseio.com",
  projectId: "koinget-bba63",
  storageBucket: "koinget-bba63.appspot.com",
  messagingSenderId: "2324-681817",
  appId: "1:1234:web:ee873bd1234c0deb7eba61ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
