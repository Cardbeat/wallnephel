import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyCSUAdDt2DuZ8LITuYT2Y-nWYir-HF1Hpo",
    authDomain: "wallnephel-ws-5a2f6.firebaseapp.com",
    databaseURL: "https://wallnephel-ws-5a2f6.firebaseio.com",
    projectId: "wallnephel-ws-5a2f6",
    storageBucket: "wallnephel-ws-5a2f6.appspot.com",
    messagingSenderId: "570326460592"
};
firebase.initializeApp(config);


export default firebase;