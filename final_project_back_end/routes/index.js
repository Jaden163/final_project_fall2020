const express = require("express");
const router = express.Router();

const samepleJson = [
  {
    name: "James",
    age: "21",
  },
  { name: "Bob", age: "22" },
];

router.get("/", (req, res) => res.send(samepleJson));

module.exports = router;
