const express = require("express");
const router = express.Router();




router.get("/about", (req, res) => {
  About.find()
    .then((about) => res.json(about))
    .catch((err) => res.status(404).json({ noaboutfound: "No about found" }));
});

module.exports = router;