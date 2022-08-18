// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBVgVCNoymmJ650hFKxJH2akqXNirP5aV0",
//   authDomain: "restaurant-native-project.firebaseapp.com",
//   projectId: "restaurant-native-project",
//   storageBucket: "restaurant-native-project.appspot.com",
//   messagingSenderId: "908819311286",
//   appId: "1:908819311286:web:b1243bbfba8152ab6a9417"
// };

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVgVCNoymmJ650hFKxJH2akqXNirP5aV0',
  authDomain: 'restaurant-native-project.firebaseapp.com',
  projectId: 'restaurant-native-project',
  storageBucket: 'restaurant-native-project.appspot.com',
  messagingSenderId: '908819311286',
  appId: '1:908819311286:web:b1243bbfba8152ab6a9417',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
