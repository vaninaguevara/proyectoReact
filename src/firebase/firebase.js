// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WojCWyuFfyxvwi8l9dbiLviSf6Qjl9o",
  authDomain: "coderhouse-curso-react-aec23.firebaseapp.com",
  projectId: "coderhouse-curso-react-aec23",
  storageBucket: "coderhouse-curso-react-aec23.appspot.com",
  messagingSenderId: "296489588882",
  appId: "1:296489588882:web:687d73f9502066f95d2e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)