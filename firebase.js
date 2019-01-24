import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyD7uIqVtttIfGsHvnSiMzs7eO5A9-p9jQo",
    authDomain: "wallnephel.firebaseapp.com",
    databaseURL: "https://wallnephel.firebaseio.com",
    projectId: "wallnephel",
    storageBucket: "wallnephel.appspot.com",
    messagingSenderId: "1072967902894"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;