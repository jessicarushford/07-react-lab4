import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCVGzSRjIc6yWDKFXLIy78OVyeA6nVWf4",
  authDomain: "giphy-9a470.firebaseapp.com",
  projectId: "giphy-9a470",
  storageBucket: "giphy-9a470.appspot.com",
  messagingSenderId: "900151962091",
  appId: "1:900151962091:web:68670f7675ad0ae81c51ae",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
