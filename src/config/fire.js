import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDL2TiG8P0GDL5wuhrZS5DWWJsqdTPSY_c",
    authDomain: "react-firebase-auth-d029b.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-d029b.firebaseio.com",
    projectId: "react-firebase-auth-d029b",
    storageBucket: "react-firebase-auth-d029b.appspot.com",
    messagingSenderId: "929110825428",
    appId: "1:929110825428:web:931e02b1113cd674555e41"
  };
const fire =firebase.initializeApp(firebaseConfig);
export default fire;