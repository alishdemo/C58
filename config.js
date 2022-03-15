import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
    apiKey: "AIzaSyD6KB0HMrALW3EDt2qR03zvVwplN1YRX7k",
      authDomain: "classtest-d7ba5.firebaseapp.com",
      databaseURL: "https://classtest-d7ba5-default-rtdb.firebaseio.com",
      projectId: "classtest-d7ba5",
      storageBucket: "classtest-d7ba5.appspot.com",
      messagingSenderId: "1013520443612",
      appId: "1:1013520443612:web:d0e66d2d019165ff8eac19"



    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();