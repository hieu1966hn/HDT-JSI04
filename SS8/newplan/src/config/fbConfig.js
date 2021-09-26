import firebase from "firebase/app"
import "firebase/firestore" // database
import 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKTRRyz0OKIpJzVpHfzajvxByutcGuQhI",
  authDomain: "hieu1966hn-newplan.firebaseapp.com",
  projectId: "hieu1966hn-newplan",
  storageBucket: "hieu1966hn-newplan.appspot.com",
  messagingSenderId: "114468945820",
  appId: "1:114468945820:web:44c4fa3f7b7f1bd93a9259"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;