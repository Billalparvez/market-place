// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCKjhCZiPDNAQ4BYsv6d6pNorQ3ZnxuhQ",
  authDomain: "online-marketplace-client.firebaseapp.com",
  projectId: "online-marketplace-client",
  storageBucket: "online-marketplace-client.appspot.com",
  messagingSenderId: "315430817634",
  appId: "1:315430817634:web:6e9a8e9dafa8022b78a63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth