
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6fce2.firebaseapp.com",
  projectId: "interviewiq-6fce2",
  storageBucket: "interviewiq-6fce2.firebasestorage.app",
  messagingSenderId: "176915391998",
  appId: "1:176915391998:web:d5dba4ddaf1d286f238caf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}