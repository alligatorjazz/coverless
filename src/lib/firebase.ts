import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCF7NbSHpwQuy6EMW9US5fqirU6c4MRVM4",
	authDomain: "coverless-io.firebaseapp.com",
	projectId: "coverless-io",
	storageBucket: "coverless-io.appspot.com",
	messagingSenderId: "114161640235",
	appId: "1:114161640235:web:6c7cc0baa5127b9082db6e",
	measurementId: "G-CTBL0KSB76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);