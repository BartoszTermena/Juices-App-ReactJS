  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDydtqi2Ip0V7Or2bMBs_p4AmYmL-d-xv4",
    authDomain: "first-project-8d93c.firebaseapp.com",
    databaseURL: "https://first-project-8d93c.firebaseio.com",
    projectId: "first-project-8d93c",
    storageBucket: "first-project-8d93c.appspot.com",
    messagingSenderId: "647321590695"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;