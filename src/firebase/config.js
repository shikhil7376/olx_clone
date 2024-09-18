import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzmhjoeOyDZnjlrltxMDgfmX8uBR7PHmU",
    authDomain: "olx-clone-57c9b.firebaseapp.com",
    projectId: "olx-clone-57c9b",
    storageBucket: "olx-clone-57c9b.appspot.com",
    messagingSenderId: "405550615573",
    appId: "1:405550615573:web:1c1557abf9d5cb8f3a121c",
    measurementId: "G-C31L075PB7"
  };

  export default firebase.initializeApp(firebaseConfig)