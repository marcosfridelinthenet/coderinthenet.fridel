import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARuqGjI7F25y-Kz7oExJxr9XOT25q8bZ0",
  authDomain: "react-inthenet-coderhouse.firebaseapp.com",
  projectId: "react-inthenet-coderhouse",
  storageBucket: "react-inthenet-coderhouse.appspot.com",
  messagingSenderId: "920400786672",
  appId: "1:920400786672:web:6387f34dba1245d48b3e35",
  measurementId: "G-Z3WSFEJHZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

