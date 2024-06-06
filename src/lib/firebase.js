import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPCdavdyJdahruFg5s-X_Ygtb-7fSEnos",
  authDomain: "kinomoe-test-5d88c.firebaseapp.com",
  projectId: "kinomoe-test-5d88c",
  storageBucket: "kinomoe-test-5d88c.appspot.com",
  messagingSenderId: "260885733432",
  appId: "1:260885733432:web:03323ae33642d2599206cd",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: "select_account ",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);
