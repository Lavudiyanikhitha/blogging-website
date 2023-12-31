const firebaseConfig = {
    apiKey: "AIzaSyDcm8-pDgv0m2yiHiu9k7xwJwWP6Zx_bQU",
    authDomain: "blogging-website-7d296.firebaseapp.com",
    projectId: "blogging-website-7d296",
    storageBucket: "blogging-website-7d296.appspot.com",
    messagingSenderId: "740575288725",
    appId: "1:740575288725:web:434c3fefe81c150a9caa9c"
  };
  
  
  const app = initializeApp(firebaseConfig);

  let db = firebase.firestore();