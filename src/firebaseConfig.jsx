import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBm9GyMSPgCRYeDSgklQ629hDVYP_nEUSA",
  authDomain: "login-auth-a8ae3.firebaseapp.com",
  projectId: "login-auth-a8ae3",
  storageBucket: "login-auth-a8ae3.firebasestorage.app",
  messagingSenderId: "849826194960",
  appId: "1:849826194960:web:d5a70d88f501561b1b4c95",
  measurementId: "G-3SKVWJVLWX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
