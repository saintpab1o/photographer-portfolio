const express = require("express");
const router = express.Router();
const Contact = require('../../models/Contact')







router.get("/contact", (req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(404).json({ nocontactsfound: "No contacts found" }));
});

router.post("/contact" , (req,res) => {
  const contact = new Contact ({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
    contact.save()
      .then(contact => res.json(contact))
      .catch(err => console.log(err));
});


module.exports = router;