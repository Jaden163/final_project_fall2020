import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

import "./App.css";

import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import UserProfile from "./containers/UserProfile";

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      // check if user login
      if (user) {
        setLoggedIn(true);
        setUserInfo(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

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
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.warn("LOGIN ERROR", error);
      });
  }

  // logout func
  function LogOutFunction(e) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserInfo({});
      })
      .catch(function (error) {
        console.warn("LOGOUT ERROR", error);
      });
  }

  // acc creation
  function SignUpFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.warn("ACCOUNT CREATION ERROR", error);
      });
  }

  // if still loading, return nothing
  if (loading) return null;

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogOutFunction={LogOutFunction} />
      <Router>
        <Route exact path="/signup">
          <SignUp SignUpFunction={SignUpFunction} />
        </Route>
        <Route exact path="/user">
          <UserProfile userInfo={userInfo} />
        </Route>
        <Route exact path="/login">
          <LogIn LogInFunction={LogInFunction} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
