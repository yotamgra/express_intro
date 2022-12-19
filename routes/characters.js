const express = require("express");
const router = express.Router();
const characters = require("../characters.json");

router.get("/", (req, res) => {
  //   res.send(JSON.parse(characters.toString()));
  // console.log(characters[0]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const character = characters.find(
    (character) => character.id === parseInt(id)
  );

  character ? res.send(character) : res.send("no character was found");
});

module.exports = router;