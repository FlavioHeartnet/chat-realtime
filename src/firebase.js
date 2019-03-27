import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnbFbj9lbOVcVpSZrNMvPzCTRP3MkvVfs",
    authDomain: "testecomentarios-784af.firebaseapp.com",
    databaseURL: "https://testecomentarios-784af.firebaseio.com",
    projectId: "testecomentarios-784af",
    storageBucket: "testecomentarios-784af.appspot.com",
    messagingSenderId: "1029481016089"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();