const express = require("express");
const router = express.Router();
const Group = require("../../models/ImageGroup");

// router.get("/groupname", (req, res) => {
//   res.json({ msg: "fuck you" });
// });

router.get("/groupname", (req, res) => {
  Group.find()
    .then((group) => res.json(group))
    .catch((err) => res.status(404).json({ nogroupsfound: "No groups found" }));
});

router.post("/groupname", (req, res) => {

  const group = new Group({
    projectname: req.body.projectname,
    srcs: req.body.srcs
   
  });

  group
    .save()
    .then((group) => res.json(group))
    .catch((err) => console.log(err));
});

module.exports = router;
