// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD9RBjoeT-OBKTTICg82VE13CdZyZGYYI",
    authDomain: "reactbook-august.firebaseapp.com",
    projectId: "reactbook-august",
    storageBucket: "reactbook-august.appspot.com",
    messagingSenderId: "295904514393",
    appId: "1:295904514393:web:f3c236df106e993a17bc48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase