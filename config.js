import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA-kS_87J1ejPgmK3v7kS0w3qnCaXL-d5E",
    authDomain: "project-71-2581f.firebaseapp.com",
    projectId: "project-71-2581f",
    storageBucket: "project-71-2581f.appspot.com",
    messagingSenderId: "752154204448",
    appId: "1:752154204448:web:7eed28ad2031ed7fa69f45"
  };


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();