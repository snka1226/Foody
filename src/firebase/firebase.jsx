import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPDhy5iNszwagKJ4uGgH-hpPlA8ZuUIHM",
  authDomain: "foody-8f6ee.firebaseapp.com",
  projectId: "foody-8f6ee",
  storageBucket: "foody-8f6ee.appspot.com",
  messagingSenderId: "1015420864450",
  appId: "1:1015420864450:web:dd3086a7eccea5efc3f85b",
  measurementId: "G-BM6ETPKTLE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);