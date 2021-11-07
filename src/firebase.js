// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDHTZrMA8zwzHPWSJNNHcdpZNDns4ksljI",
    authDomain: "whatsapp-clone-f4e6e.firebaseapp.com",
    projectId: "whatsapp-clone-f4e6e",
    storageBucket: "whatsapp-clone-f4e6e.appspot.com",
    messagingSenderId: "432267366726",
    appId: "1:432267366726:web:a8b223cddf7617856b5547",
    measurementId: "G-D4X1MCRLDJ"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;