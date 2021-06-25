import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyApkSp-DxAB5Y0TvLLaDtNlkB8uyoeJ_5o",
  authDomain: "linkup-93df7.firebaseapp.com",
  projectId: "linkup-93df7",
  storageBucket: "linkup-93df7.appspot.com",
  messagingSenderId: "390180428423",
  appId: "1:390180428423:web:9ceb8f4a43f509577c7622",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { projectStorage, projectFirestore, timestamp, auth, provider };
