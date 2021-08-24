// import * firebase from 'firebase/app'
import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwu6tfgyOcu6xUA903phMV_1rJAbIB5f4",
    authDomain: "postpic-a789d.firebaseapp.com",
    projectId: "postpic-a789d",
    databaseURL:"https://PostPic.firebaseio.com",
    storageBucket: "postpic-a789d.appspot.com",
    messagingSenderId: "544571100626",
    appId: "1:544571100626:web:09583a8575e4528f3b4c0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
// initailize storage service
const projectStorage = firebase.storage()
//initialize firestore
const projectFirestore = firebase.firestore()

export {projectFirestore, projectStorage}

//  if request.auth != null;