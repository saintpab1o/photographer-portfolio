import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import '../css/Booking.css'

class Booking extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Appointments
        <Contact />
      </div>
    );
  }
}

export default Booking;
