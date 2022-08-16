import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBVgVCNoymmJ650hFKxJH2akqXNirP5aV0',
  authDomain: 'restaurant-native-project.firebaseapp.com',
  projectId: 'restaurant-native-project',
  storageBucket: 'restaurant-native-project.appspot.com',
  messagingSenderId: '908819311286',
  appId: '1:908819311286:web:b1243bbfba8152ab6a9417',
};

!firebaseConfig.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export default firebase;
