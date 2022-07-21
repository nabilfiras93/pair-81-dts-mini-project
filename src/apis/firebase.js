// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzF5aPqM4tBMzj64szjHZBYe5XUNEsWjg",
  authDomain: "dts-react.firebaseapp.com",
  projectId: "dts-react",
  storageBucket: "dts-react.appspot.com",
  messagingSenderId: "890251659686",
  appId: "1:890251659686:web:1333947be84b96f8f46767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fucntion
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {status: true, data: email+` is succesfully registered`};

    console.log(UserCredential.user);
  } catch (error) {
    return {status: false, data: error.message};
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const activeUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(activeUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  logOut,
};
