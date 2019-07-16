import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVhV83Q3rGtX-XsFIPlQys_FKDB6Jyxzo",
  authDomain: "crwn-db-efd94.firebaseapp.com",
  databaseURL: "https://crwn-db-efd94.firebaseio.com",
  projectId: "crwn-db-efd94",
  storageBucket: "",
  messagingSenderId: "807355916066",
  appId: "1:807355916066:web:d4b96e703370a0ec"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
