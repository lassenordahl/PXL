import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSchYMlo8VxnDJlrWyRv-G6SBjlrvxa3Q",
    authDomain: "outsidehacks2018.firebaseapp.com",
    databaseURL: "https://outsidehacks2018.firebaseio.com",
    projectId: "outsidehacks2018",
    storageBucket: "outsidehacks2018.appspot.com",
    messagingSenderId: "736100271444"
  };
 var fire =  firebase.initializeApp(config);
 export default fire
