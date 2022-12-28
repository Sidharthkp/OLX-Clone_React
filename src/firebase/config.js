import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY-vSZU5V8i9C56zM6A2v6WmdyzBMJh9w",
    authDomain: "olx-react-ad3f6.firebaseapp.com",
    projectId: "olx-react-ad3f6",
    storageBucket: "olx-react-ad3f6.appspot.com",
    messagingSenderId: "899840632458",
    appId: "1:899840632458:web:364177fbec107c6e042f73",
    measurementId: "G-JQ414TM1RQ"
};

export default firebase.initializeApp(firebaseConfig)