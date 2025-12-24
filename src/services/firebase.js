import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfCc3suYIOvt6__zgUWccsBre5PX00U-Q",
  authDomain: "popx-auth-df525.firebaseapp.com",
  projectId: "popx-auth-df525",
  storageBucket: "popx-auth-df525.firebasestorage.app",
  messagingSenderId: "409216755476",
  appId: "1:409216755476:web:512f8d8f406ddaeb3d8401",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
