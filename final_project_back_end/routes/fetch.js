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
  const data = [
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel magna neque. Etiam non condimentum magna. Quisque ornare vehicula tempus. Duis eleifend elit lorem, vitae convallis augue rhoncus ac. Pellentesque auctor feugiat dolor sed ullamcorper. Nunc ac quam a nisl viverra placerat nec in tortor. Ut id libero vestibulum, tincidunt ligula ut, placerat mi.

Fusce bibendum rhoncus felis sit amet mattis. Etiam rutrum aliquet neque, ut porta mauris accumsan in. Phasellus tincidunt eu magna id pharetra. Pellentesque tempus feugiat consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel felis neque. Nulla commodo cursus ex. In non dignissim leo, ac pretium metus. Aenean pharetra vel orci sit amet pretium. Suspendisse potenti.

Sed volutpat est at massa ullamcorper, eu tincidunt sapien porta. Nulla lobortis venenatis dui laoreet egestas. Proin tincidunt diam vel ante auctor ornare. Pellentesque hendrerit dignissim lectus, in rutrum mi molestie ac. Praesent ut convallis purus. Morbi a pulvinar ante. Praesent interdum porta tellus ac ornare. In a purus libero. Sed lacinia varius venenatis.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis elit ante, laoreet finibus tortor eu, aliquet vestibulum nibh. Donec convallis lectus justo, at elementum nulla lacinia ut. Pellentesque in porttitor turpis. Donec pellentesque augue vel finibus facilisis. Donec et est ac quam euismod auctor et a dui. Fusce hendrerit ante odio, ac ultrices nunc lobortis vitae. Morbi eget tincidunt lorem. Sed dui arcu, volutpat a gravida non, sodales a nibh.`,
      replies: ["that is very sad indeed", "I agreed, convid has been bad"],
    },
    {
      content: "HAHAHAHAHHAHAHAHAHAHAHAH sadge",
      replies: ["boooooo", "intersting post"],
    },
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel magna neque. Etiam non condimentum magna. Quisque ornare vehicula tempus. Duis eleifend elit lorem, vitae convallis augue rhoncus ac. Pellentesque auctor feugiat dolor sed ullamcorper. Nunc ac quam a nisl viverra placerat nec in tortor. Ut id libero vestibulum, tincidunt ligula ut, placerat mi.

Fusce bibendum rhoncus felis sit amet mattis. Etiam rutrum aliquet neque, ut porta mauris accumsan in. Phasellus tincidunt eu magna id pharetra. Pellentesque tempus feugiat consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel felis neque. Nulla commodo cursus ex. In non dignissim leo, ac pretium metus. Aenean pharetra vel orci sit amet pretium. Suspendisse potenti.

Sed volutpat est at massa ullamcorper, eu tincidunt sapien porta. Nulla lobortis venenatis dui laoreet egestas. Proin tincidunt diam vel ante auctor ornare. Pellentesque hendrerit dignissim lectus, in rutrum mi molestie ac. Praesent ut convallis purus. Morbi a pulvinar ante. Praesent interdum porta tellus ac ornare. In a purus libero. Sed lacinia varius venenatis.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis elit ante, laoreet finibus tortor eu, aliquet vestibulum nibh. Donec convallis lectus justo, at elementum nulla lacinia ut. Pellentesque in porttitor turpis. Donec pellentesque augue vel finibus facilisis. Donec et est ac quam euismod auctor et a dui. Fusce hendrerit ante odio, ac ultrices nunc lobortis vitae. Morbi eget tincidunt lorem. Sed dui arcu, volutpat a gravida non, sodales a nibh.`,
      replies: ["that is very sad indeed", "I agreed, convid has been bad"],
    },
  ];
  messages
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
