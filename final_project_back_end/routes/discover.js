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
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // output new posts that the current user has not replied to or not created by user
        if (doc.data().uid != uid && !doc.data().repliedUid.includes(uid)) {
          data.push(doc.id);
          data.push(doc.data());
          return res.send(data);
        }
      });
      data.push(null);
      data.push(null);
      return res.send(data);
    })
    .catch(function (error) {
      return res.send(data);
      // return res.send(error);
    });
});

module.exports = router;
