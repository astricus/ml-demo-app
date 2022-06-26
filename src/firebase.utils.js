// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA7VQzdOKutvq3xAEbzv5-EjE9lB66LfMk",
  authDomain: "ml-demo-db.firebaseapp.com",
  projectId: "ml-demo-db",
  storageBucket: "ml-demo-db.appspot.com",
  messagingSenderId: "7602276154",
  appId: "1:7602276154:web:b2d906dba99eca713b7203",
  measurementId: "G-K599YW124Z",
};

const provider = new GoogleAuthProvider();

// Initialize Firebase
initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const auth = getAuth();
export const firebaseSignIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const firebaseSignOut = async () => {
  try {
    await signOut(auth);
    console.log("Signed out");
  } catch (error) {
    console.error(error);
  }
};

export const googleSignIn = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      return result.user;
      // ...
    })
    .catch((error) => {
        console.error(error);
        console.log(error);
      // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
