// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCUoMDwPi-b56uLp9gTnpXtiTzZCFgdJhA",
  authDomain: "netflix-react-19592.firebaseapp.com",
  projectId: "netflix-react-19592",
  storageBucket: "netflix-react-19592.appspot.com",
  messagingSenderId: "723781533933",
  appId: "1:723781533933:web:ec485178e1c962882d4ce4",
  measurementId: "G-TK9DFG3PNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};