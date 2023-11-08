// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//     apiKey: "AIzaSyCl0aSEkJkM5oFL79vlAnR6nGQr0SI78zw",
//     authDomain: "meditation-project-e4404.firebaseapp.com",
//     projectId: "meditation-project-e4404",
//     storageBucket: "meditation-project-e4404.appspot.com",
//     messagingSenderId: "494989626383",
//     appId: "1:494989626383:web:e1f433dc18992ef187277a",
//     measurementId: "G-SWZMJJVX62"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();