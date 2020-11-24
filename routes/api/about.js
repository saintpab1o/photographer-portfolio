const express = require("express");
const router = express.Router();


// router.get("/groupname", (req, res) => {
//   res.json({ msg: "fuck you" });
// });

router.get("/about", (req, res) => {
  About.find()
    .then((about) => res.json(about))
    .catch((err) => res.status(404).json({ noaboutfound: "No about found" }));
});

module.exports = router;