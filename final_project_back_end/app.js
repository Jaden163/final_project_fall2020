const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyDgYObNPZGh10Id8V3XQ7xeVTBmsK0r6Vk",
  authDomain: "idm-finalproject-fall2020.firebaseapp.com",
  databaseURL: "https://idm-finalproject-fall2020.firebaseio.com",
  projectId: "idm-finalproject-fall2020",
  storageBucket: "idm-finalproject-fall2020.appspot.com",
  messagingSenderId: "282462510585",
  appId: "1:282462510585:web:83b3f782b3eb7bab053128",
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const usersRoute = require("./routes/user.js");
const postRoute = require("./routes/post.js");
const replyRoute = require("./routes/reply.js");
const fetchRoute = require("./routes/fetch.js");

app.use("/user", usersRoute);
app.use("/post", postRoute);
app.use("/reply", replyRoute);
app.use("/fetch", fetchRoute);

app.listen(port, () => console.log(`Backend is running at port: ${port}`));
