import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAu_3ANqUlM-S9rHlvqIo5BTDKCnODniY8",
  authDomain: "trabalhoextra-4243d.firebaseapp.com",
  projectId: "trabalhoextra-4243d",
  storageBucket: "trabalhoextra-4243d.appspot.com",
  messagingSenderId: "408597698",
  appId: "1:408597698:web:ea29b0f8dbebac15d6f75b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}