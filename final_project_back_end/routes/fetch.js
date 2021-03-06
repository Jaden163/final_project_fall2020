const { query } = require("express");
const express = require("express");
const router = express.Router();

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const messages = db.collection("messages");

router.get("/", (req, res) => {
  const queryParams = req.query;
  const uid = queryParams.uid;
  var data = [];
  messages
    .where("uid", "==", uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return res.send(data);
    })
    .catch(function (error) {
      return res.send(data);
      // return res.send(error);
    });
});

module.exports = router;
