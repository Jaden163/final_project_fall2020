import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import "./App.css";

import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyDgYObNPZGh10Id8V3XQ7xeVTBmsK0r6Vk",
  authDomain: "idm-finalproject-fall2020.firebaseapp.com",
  databaseURL: "https://idm-finalproject-fall2020.firebaseio.com",
  projectId: "idm-finalproject-fall2020",
  storageBucket: "idm-finalproject-fall2020.appspot.com",
  messagingSenderId: "282462510585",
  appId: "1:282462510585:web:83b3f782b3eb7bab053128",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  // initialize app when ready
  useEffect(() => {
    // only initialize when not exists
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  // login func
  function LogInFunction(e) {
    // stop form from submitting as normal
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }

  // logout func
  function LogOutFunction(e) {}

  // acc creation
  function SignUpFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION ERROR", error);
      });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogOutFunction={LogOutFunction} />
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp SignUpFunction={SignUpFunction} />
          </Route>
          <Route path="/login">
            <LogIn LogInFunction={LogInFunction} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
