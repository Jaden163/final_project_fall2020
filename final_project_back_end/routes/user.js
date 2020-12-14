const { query } = require("express");
const express = require("express");
const router = express.Router();

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const users = db.collection("users");

router.get("/"),
  (req, res) => {
    return res.send("No id provided");
  };

router.get("/get/:email", (req, res) => {
  const email = req.params.email;
  users
    .doc(email)
    .get()
    .then(function (user) {
      if (user.exists) {
        return res.send(user.data());
      } else {
        return res.send("No such user exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
