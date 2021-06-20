import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWF0VOO7XxcVMPkoRwlepNMmlI6SRPNnI",
    authDomain: "instagram-clone-jsx.firebaseapp.com",
    databaseURL: "https://instagram-clone-jsx-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-jsx",
    storageBucket: "instagram-clone-jsx.appspot.com",
    messagingSenderId: "912529147186",
    appId: "1:912529147186:web:9bdd8f5c59b0078516c32b",
    measurementId: "G-BEYZQ50CEV"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};