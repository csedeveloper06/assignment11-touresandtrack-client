// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSfqdwqdMPgCvtbS5uqJHSci-oyZ6w9CQ",
  authDomain: "assignment9-react-auth.firebaseapp.com",
  projectId: "assignment9-react-auth",
  storageBucket: "assignment9-react-auth.appspot.com",
  messagingSenderId: "665572271407",
  appId: "1:665572271407:web:1008b0a65d246e47672dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;