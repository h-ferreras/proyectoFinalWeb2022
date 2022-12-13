import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtTPTsXTwLO-XPrMrHpFl-xksHbQ_PFc8",
  authDomain: "proyectofinalweb-f90bd.firebaseapp.com",
  projectId: "proyectofinalweb-f90bd",
  storageBucket: "proyectofinalweb-f90bd.appspot.com",
  messagingSenderId: "352993241626",
  appId: "1:352993241626:web:c4a5028037ace279307fa3",
  measurementId: "G-60E812M19V"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
export const providerGitHub = new GithubAuthProvider();
export const db = getFirestore(app);
