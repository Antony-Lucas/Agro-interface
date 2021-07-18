import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBnLXkuCMCy8L7RpDh3VkYK6ctQZwMXdtc",
    authDomain: "agro-d56b9.firebaseapp.com",
    projectId: "agro-d56b9",
    storageBucket: "agro-d56b9.appspot.com",
    messagingSenderId: "654665516431",
    appId: "1:654665516431:web:05799b0a3869f9aa8137fa",
    measurementId: "G-2H4KGGTKPK"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();
  export default database;