// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7yvbIb2VnpLRHGGGI-zrb1Qn-DFGn-Cs",
  authDomain: "job-app-tracker-cf0f8.firebaseapp.com",
  projectId: "job-app-tracker-cf0f8",
  storageBucket: "job-app-tracker-cf0f8.firebasestorage.app",
  messagingSenderId: "271956129526",
  appId: "1:271956129526:web:2855d1dc4867982a4e9ed7",
  measurementId: "G-BHL299HHWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default initializeApp;