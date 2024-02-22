const express = require("express");
const router = express.Router();

const menu = require("./../models/menu");

//POST route to add a menu
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menu(data);

    const response = await newMenu.save();
    console.log("menu data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//GET method to get the menu
router.get("/", async (req, res) => {
  try {
    const data = await menu.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
