import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1w96CM4Nvzx7J_koXx1arJSfl-3_jgL0",
    authDomain: "messenger-clone-c589b.firebaseapp.com",
    databaseURL:"https://messenger-clone-c589b-default-rtdb.firebaseio.com/",
    projectId: "messenger-clone-c589b",
    storageBucket: "messenger-clone-c589b.appspot.com",
    messagingSenderId: "45668674839",
    appId: "1:45668674839:web:b94350e47639fc76939b52",
    measurementId: "G-J1Y9846H1E"
});


  const db=firebaseApp.firestore();
  export default db;