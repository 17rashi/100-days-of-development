const express = require("express");
const app = express();
const db = require("./db");

//now its a time to parse the data recieved
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //it will store the objects in req.body

//now its a time to write get and post method for menu.js
app.get("/", (req, res) => {
  res.send("server is started");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Port is listening to 3000");
});
