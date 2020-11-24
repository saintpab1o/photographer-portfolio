const express = require("express");
const router = express.Router();
const Booking = require('../../models/Booking')







router.get("/booking", (req, res) => {
    Booking.find()
        .then((booking) => res.json(booking))
        .catch((err) => res.status(404).json({ pageNotFound: "No page found." }));
});

router.post("/booking", (req, res) => {
    const booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    });
    booking.save()
        .then(booking => res.json(booking))
        .catch(err => console.log(err));
});




module.exports = router;