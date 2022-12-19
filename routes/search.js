const { query } = require("express");
const express = require("express");
const router = express.Router();
const characters = require("../characters.json");

router.get("/", (req, res) => {
  const queries = req.query;
  const searchedCharacters = characters.filter((character) => {
    for (const query in queries) {
      if (
        !character[query].toLowerCase().includes(queries[query].toLowerCase())
      ) {
        return false;
      }
      return true;
    }
  });

  searchedCharacters.length > 0
    ? res.send(searchedCharacters)
    : res.status(404).send("no character was found");
});

module.exports = router;
