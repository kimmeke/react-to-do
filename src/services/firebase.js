import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDgai0e3n9t1f08_wkz7yhQncooenx3fA8",
  authDomain: "react-todo-4fac4.firebaseapp.com",
  databaseURL: "react-todo-4fac4.appspot.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
