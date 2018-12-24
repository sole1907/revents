import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbzmeDerx08sPZVb1qXFpjAK_HpFFU8gY",
  authDomain: "revents-225315.firebaseapp.com",
  databaseURL: "https://revents-225315.firebaseio.com",
  projectId: "revents-225315",
  storageBucket: "revents-225315.appspot.com",
  messagingSenderId: "1072672441389"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
