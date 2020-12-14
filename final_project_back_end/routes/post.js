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
  const content = queryParams.content;
  const timestamp = Date.now();
  const replies = [];
  const repliedUid = [];
  messages
    // create new posts or update
    .add({ uid, content, timestamp, replies, repliedUid })
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
