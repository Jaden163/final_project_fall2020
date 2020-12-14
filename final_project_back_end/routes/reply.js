const { query } = require("express");
const express = require("express");
const router = express.Router();

// Require firebase
const firebase = require("firebase");
// Initialize firestore db
const db = firebase.firestore();
// Reference db collection
const messages = db.collection("messages");

router.get("/accept", (req, res) => {
  const queryParams = req.query;
  const docid = queryParams.docid;
  const uid = queryParams.uid;
  const content = queryParams.content;
  const timestamp = Date.now();

  messages
    // create new posts or update
    .doc(docid)
    .update({
      repliedUid: firebase.firestore.FieldValue.arrayUnion(uid),
      replies: firebase.firestore.FieldValue.arrayUnion({
        uid,
        content,
        timestamp,
      }),
    })
    .then(function (doc) {
      res.send("Successful Reply");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Reply");
    });
});

router.get("/reject", (req, res) => {
  const queryParams = req.query;
  const docid = queryParams.docid;
  const uid = queryParams.uid;
  messages
    // create new posts or update
    .doc(docid)
    .update({
      repliedUid: firebase.firestore.FieldValue.arrayUnion(uid),
    })
    .then(function (doc) {
      res.send("Successful Reply");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Reply");
    });
});

module.exports = router;
