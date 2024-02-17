/*
function callback() {
  console.log("This is my callback function");
}
function add(a, b, callbackDefined) {
  console.log("result :" + a + b);
  callbackDefined();
}

add(3, 4, callback);
*/

/*
var os = require("os");

var user = os.userInfo();
console.log(user.username);

console.log(os);
*/

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("welcome to my node js' first server");
});

app.get("/idli", function (req, res) {
  var customised_idli = {
    name: "rava idli",
    size: "10cm radius",
    is_sambhar: true,
  };
  res.send(customised_idli);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});

// app.set(3000);
