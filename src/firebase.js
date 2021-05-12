import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAL2mYWNYeQpmdIuCPlYbC_r9a9dA5gndU",
    authDomain: "disney-plus-clone-52fc0.firebaseapp.com",
    projectId: "disney-plus-clone-52fc0",
    storageBucket: "disney-plus-clone-52fc0.appspot.com",
    messagingSenderId: "213050555070",
    appId: "1:213050555070:web:48ec16181f9aaabe293cef",
    measurementId: "G-T2Q77CTSP7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;