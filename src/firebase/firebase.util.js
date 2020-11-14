import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0kUVR7jUH5FtHifxTgxoQgc1zaRvnkaQ",
    authDomain: "project-1-ca0ee.firebaseapp.com",
    databaseURL: "https://project-1-ca0ee.firebaseio.com",
    projectId: "project-1-ca0ee",
    storageBucket: "project-1-ca0ee.appspot.com",
    messagingSenderId: "955623744652",
    appId: "1:955623744652:web:fea754dc85dc926cdd87a9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;