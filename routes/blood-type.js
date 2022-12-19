const express = require("express");
const router = express.Router();
const characters = require("../characters.json");

router.get("/:bloodType", (req, res) => {
  const { bloodType } = req.params;
  console.log(bloodType);
  console.log(characters[0]);
  const commonBloodCharacters = characters.filter(
    (character) => character.blood.toLowerCase() === bloodType.toLowerCase()
  );

  commonBloodCharacters.length > 0
    ? res.send(commonBloodCharacters)
    : res.status(404).send("no character was found");
});

module.exports = router;
