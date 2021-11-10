// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ14zrpTOFdbZq-Qm-ABQiZFE73mGIp5w",
    authDomain: "super-app-1-bd399.firebaseapp.com",
    projectId: "super-app-1-bd399",
    storageBucket: "super-app-1-bd399.appspot.com",
    messagingSenderId: "721811266699",
    appId: "1:721811266699:web:fc2b1fd14e72c1c7ac488e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init the Authentication service
const auth = getAuth()
// Init the Storage service
const storage = getStorage(app);
// Init the Firestore service
const db = getFirestore();
export { auth, storage, db }
