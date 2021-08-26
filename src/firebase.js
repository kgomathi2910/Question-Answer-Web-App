import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7nGXRKL01apWu9An6DVimIbsumhE4VgQ",
    authDomain: "quora-1333f.firebaseapp.com",
    projectId: "quora-1333f",
    storageBucket: "quora-1333f.appspot.com",
    messagingSenderId: "870407693505",
    appId: "1:870407693505:web:337eb6d5add852daf0e040"
  };

// Initialize the firebase application
const firebaseApp = firebase.initializeApp(firebaseConfig);

// user authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// enable db - for real time cloud read and write request
const db = firebaseApp.firestore();

export {auth, provider};
export default db;