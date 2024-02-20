const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

//mongoose maintains a default connection object represting the mongoDB connection.
const db = mongoose.connection;

//define event listeners for database connection

//connected, Error and disconnected are the keywords that mongoDB can understand

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", () => {
  console.log("MongoDB connection error: ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//export the database connection
