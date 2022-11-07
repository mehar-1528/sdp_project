import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWOhtdiIiCJhZsQj_NNR0p9dGxlT76waM",
  authDomain: "jobzilla-33136.firebaseapp.com",
  projectId: "jobzilla-33136",
  storageBucket: "jobzilla-33136.appspot.com",
  messagingSenderId: "48313078767",
  appId: "1:48313078767:web:a896dc8cfb1c5e687f5c1a",
  measurementId: "G-15RJHXH9J0"
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const storage = getStorage(app);
export default firebaseConfig;