import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDpcz5d7_B72r0CSNlQuskbn9ZCPtiPF_w",
  authDomain: "crwn-db-e095f.firebaseapp.com",
  projectId: "crwn-db-e095f",
  storageBucket: "crwn-db-e095f.appspot.com",
  messagingSenderId: "60310541147",
  appId: "1:60310541147:web:a5a6d75750e8343501007e",
  measurementId: "G-HZ9YEWLSM1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
