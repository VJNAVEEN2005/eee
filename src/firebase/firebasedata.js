// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrMnXChFNTuOhzEah9uZMxPa3aNiqkA5s",
  authDomain: "ptu-eee.firebaseapp.com",
  projectId: "ptu-eee",
  storageBucket: "ptu-eee.firebasestorage.app",
  messagingSenderId: "129360994107",
  appId: "1:129360994107:web:624302d4b1ecf0aba6211e",
  measurementId: "G-HLPZGRK93E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

const db = getFirestore();

export { db };