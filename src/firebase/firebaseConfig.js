
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCwYkaVG48wYrxQ1izSmXmeu7lAPGXBK60",
    authDomain: "adopt-a-new-pet.firebaseapp.com",
    projectId: "adopt-a-new-pet",
    storageBucket: "adopt-a-new-pet.appspot.com",
    messagingSenderId: "731277946616",
    appId: "1:731277946616:web:b0e16f7eb25de8c755550d",
    measurementId: "G-9MLW5G7LYC"
};

const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

export const GoogleAuth = new GoogleAuthProvider();



export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        console.log(error)
    });
}