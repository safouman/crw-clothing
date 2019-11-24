/* eslint-disable consistent-return */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAjSFjcEmh-XtTgAsTxlCzG5LpsdHLzrfs',
  authDomain: 'crw-db-d86de.firebaseapp.com',
  databaseURL: 'https://crw-db-d86de.firebaseio.com',
  projectId: 'crw-db-d86de',
  storageBucket: 'crw-db-d86de.appspot.com',
  messagingSenderId: '852230783983',
  appId: '1:852230783983:web:241552d64d7940fb7fec1a',
  measurementId: 'G-QM9NGDGMVF'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
