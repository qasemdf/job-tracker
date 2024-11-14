const FIREBASE_KEY = process.env.NEXT_PUBLIC_FIREBASE_KEY
const FIREBASE_AUTHDOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN;
const FIREBASE_STORAGEBUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET;
const FIREBASE_PROJECETID = process.env.NEXT_PUBLIC_FIREBASE_PROJECETID;
const FIREBASE_MESSAGINGSENDERID = process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID;
const FIREBASE_APPID = process.env.NEXT_PUBLIC_FIREBASE_APPID;
const FIREBASE_MEASURMENTID = process.env.NEXT_PUBLIC_FIREBASE_MEASURMENTID;

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECETID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASURMENTID
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app)

export {auth, firestore, app}