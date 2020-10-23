const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");




router.get("/contact", (req, res) => {
  res.json({msg: 'fuck me'});
});


router.post("/contact" , (req,res) => {
    
    const newContact = new Contact({
      name: req.name,
      email: req.email,
      message: req.message

    });
    
    newContact.save().then(contact => res.json(contact));
    })






module.exports = router;