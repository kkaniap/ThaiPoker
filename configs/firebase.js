import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC85782G7id3ZdP3dj5DhU_ATLYjJJz1Ik",
  authDomain: "thaipoker-6cbd7.firebaseapp.com",
  databaseURL:
    "https://thaipoker-6cbd7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thaipoker-6cbd7",
  storageBucket: "thaipoker-6cbd7.appspot.com",
  messagingSenderId: "839698305279",
  appId: "1:839698305279:web:03ce703506e0b45e6f3cca",
  measurementId: "G-GDKS50FVJZ",
};

const app = firebase.initializeApp(firebaseConfig);
const firestoreInstance = getFirestore(app);

//method for subscribe
// onSnapshot(doc(firestoreInstance, "test", "SF"), (doc) => {
    
// });

export default firestoreInstance;

