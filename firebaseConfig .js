// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsM1FrHv1-iMAiZ5NP-7ZKhxk8Bub8XT0",
    authDomain: "blogapp-2077c.firebaseapp.com",
    projectId: "blogapp-2077c",
    storageBucket: "blogapp-2077c.appspot.com",
    messagingSenderId: "706401751264",
    appId: "1:706401751264:web:5beaced5296944c4af0085",
    measurementId: "G-FFWKGG6RPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app)

export {
    storage,
    db
}