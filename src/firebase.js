// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7jMaxThXpd-1lfe8Bqe-v6iQKjrzoxI0",
    authDomain: "health-app-2b1f7.firebaseapp.com",
    projectId: "health-app-2b1f7",
    storageBucket: "health-app-2b1f7.appspot.com",
    messagingSenderId: "924474915252",
    appId: "1:924474915252:web:49daf92e00d47dedf05ae1",
    measurementId: "G-355HK6G7F7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
//const analytics = getAnalytics(app);