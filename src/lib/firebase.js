import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b0e7d.firebaseapp.com",
  projectId: "reactchat-b0e7d",
  storageBucket: "reactchat-b0e7d.appspot.com",
  messagingSenderId: "712061919285",
  appId: "1:712061919285:web:c7f605383762909a88d17c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
