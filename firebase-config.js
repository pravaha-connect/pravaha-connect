// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-nMdM6vJIrAP2IpmGmeHab7F6eGs2yh0",
    authDomain: "parvah-connect.firebaseapp.com",
    projectId: "parvah-connect",
    storageBucket: "parvah-connect.firebasestorage.app",
    messagingSenderId: "512208446416",
    appId: "1:512208446416:web:9fbf9984a79c1cf0514fd5",
    measurementId: "G-DNE4S0J6SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export {
    app,
    analytics,
    auth,
    googleProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};