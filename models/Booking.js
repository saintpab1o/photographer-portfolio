const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bookings', BookingSchema);