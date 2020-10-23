const express = require("express");
const router = express.Router();
const Contact = require('../../models/Contact')





router.get("/contact", (req, res) => {
  res.json({msg: 'fuck me'});
});


router.post("/contact" , (req,res) => {
 
console.log(req.body)
});


module.exports = router;