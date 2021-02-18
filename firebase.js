import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoPDZ_g9O_ifnFkB9uMorHFhC9qKq2xgI",
  authDomain: "fix-it-ca77b.firebaseapp.com",
  projectId: "fix-it-ca77b",
  storageBucket: "fix-it-ca77b.appspot.com",
  messagingSenderId: "605243386800",
  appId: "1:605243386800:web:ffdd8adece16d8ccf2c475",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
