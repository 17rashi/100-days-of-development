const express = require("express");
const app = express();
const db = require("./db");

// it is used to parse the data and change the data format according to the requirement.
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //it will store the objects in req.body

const person = require("./models/person");

app.get("/", (req, res) => {
  res.send("server is started");
});

//Post route to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains the person data

    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

  /*
  //create a new person document using the Mongoose model
  //save the new person to the database
  newPerson.save((error, savedPerson) => {
    if (error) {
      console.log("Error in saving person", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("data saved successfully");
      res.status(200).json(savedPerson);
    }
    newPerson.name = data.name;
    newPerson.age = data.age;
    newPerson.mobile = data.mobile;
    newPerson.email = data.email;
    newPerson.address = data.address;
  */
});

//GET method to get the person
app.get("/person", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});

/*
app.get("/idli", (req, res) => {
  var cusominzed_idli = {
    name: "rava idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(cusominzed_idli);
});
*/

/*
app.post("/item", (req, res) => {
  // console.log(name);
  res.send("Data is send");
});
*/
