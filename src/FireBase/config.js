import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyD4S4HZHGeDUaEWf6S8bZoCyaNurOWa6Mw",
  authDomain: "happy-chat-697c4.firebaseapp.com",
  projectId: "happy-chat-697c4",
  storageBucket: "happy-chat-697c4.appspot.com",
  messagingSenderId: "882418523254",
  appId: "1:882418523254:web:84790d202253ffc5295357",
  measurementId: "G-WG6C54F82Q"
};
  
  // Initialize Firebase    
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;