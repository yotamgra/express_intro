const express = require("express");
const router = express.Router();
const characters = require("../characters.json");

router.get("/:month", (req, res) => {
  const { month } = req.params;
  console.log(month);
  console.log(characters[0]);
  const commonBirthCharacters = characters.filter(
    (character) => character.born.toLowerCase().includes(month.toLowerCase())
  );

  commonBirthCharacters.length > 0
    ? res.send(commonBirthCharacters)
    : res.status(404).send("no character was found");
});

module.exports = router;
