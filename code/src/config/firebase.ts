import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: Constants.manifest.extra.apiKey,
//   authDomain: Constants.manifest.extra.authDomain,
//   projectId: Constants.manifest.extra.projectId,
//   storageBucket: Constants.manifest.extra.storageBucket,
//   messagingSenderId: Constants.manifest.extra.messagingSenderId,
//   appId: Constants.manifest.extra.appId
// };

const firebaseConfig = {
	apiKey: "AIzaSyCejyG_0gD5mKzKAqrx6m7R9e8S6SwClx0",
	authDomain: "uere-f4a4d.firebaseapp.com",
	projectId: "uere-f4a4d",
	storageBucket: "uere-f4a4d.appspot.com",
	messagingSenderId: "699903336633",
	appId: "1:699903336633:web:905ff44fa01b52b2713b68",
	measurementId: "G-XXDRYQ8SCC"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
