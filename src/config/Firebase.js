import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDl42OX8J1t0BPYHGSdIs_f6DqkbbLoQRo",
  authDomain: "clone-87707.firebaseapp.com",
  projectId: "clone-87707",
  storageBucket: "clone-87707.appspot.com",
  messagingSenderId: "579946620182",
  appId: "1:579946620182:web:29b72e42b65b767c119c37",
  measurementId: "G-74R49K9Y25",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
