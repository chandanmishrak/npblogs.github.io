let firebaseConfig = {
    apiKey: "AIzaSyDnYuJFl6w0FlVOZdXWxKg_-9cveHgfpPI",
    authDomain: "np-blog-22979.firebaseapp.com",
    projectId: "np-blog-22979",
    storageBucket: "np-blog-22979.appspot.com",
    messagingSenderId: "331511077457",
    appId: "1:331511077457:web:65e67b08b806adba1d7670",
    measurementId: "G-4H8J590H6R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();