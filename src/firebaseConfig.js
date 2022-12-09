import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTXXTjLbMeAWMSW_RncPIr1xox-AurVII",
  authDomain: "sdp-final-db.firebaseapp.com",
  projectId: "sdp-final-db",
  storageBucket: "sdp-final-db.appspot.com",
  messagingSenderId: "899502922858",
  appId: "1:899502922858:web:e5dd8eb10366c3046d3e13"
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const storage = getStorage(app);
export default firebaseConfig;
