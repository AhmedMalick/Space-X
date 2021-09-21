import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzS6H0Lm4k8Fjl1rqDIbBHKtXKvWNZ5qs",
  authDomain: "space-x-80eeb.firebaseapp.com",
  projectId: "space-x-80eeb",
  storageBucket: "space-x-80eeb.appspot.com",
  messagingSenderId: "936434596426",
  appId: "1:936434596426:web:5b2c3ab6fec51287ff04b3",
};

firebase.initializeApp(firebaseConfig);

const notificationConfig = () => {
  const msg = firebase.messaging();

  msg
    .requestPermission()
    .then(() => {
      return msg.getToken();
    })
    .then((token) => {
      console.log("token", token);
    });
};

export default notificationConfig;
