import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZscdgWrDpGSGqVGQM_725-kwE7VPkg9I",
    authDomain: "netflix-clone-decff.firebaseapp.com",
    projectId: "netflix-clone-decff",
    storageBucket: "netflix-clone-decff.appspot.com",
    messagingSenderId: "200352291646",
    appId: "1:200352291646:web:f3921d1618b6b9aef96a6f"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db