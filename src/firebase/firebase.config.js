// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCNUq6Ua-RssNLgmQaoX7zMFaqxQw7k_A",
    authDomain: "auth-practice-efb2b.firebaseapp.com",
    projectId: "auth-practice-efb2b",
    storageBucket: "auth-practice-efb2b.appspot.com",
    messagingSenderId: "907111153864",
    appId: "1:907111153864:web:4eb55fbafed644564d25fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
