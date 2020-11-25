import React from 'react';
import '../css/Booking.css';
import axios from 'axios'
import Header from './Header';
import Contact from './Contact';


class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      name: "",
      email: "",
      time: "",
      sent: false,
    };
  }

  //   switchClass = () => {
  //     this.refs.calender.classList.toggle("calender-active");
  //     console.log("switch");
  //   };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      date: this.state.date,
      name: this.state.name,
      email: this.state.email,
      time: this.state.time,
    };
    axios
      .post(`/booking`, data)
      .then((rest) => {
        this.setState(
          {
            send: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      date: "",
      name: "",
      email: "",
      time: "",
    });
    setTimeout(() => {
      this.setState({
        sent: true,
      });
    }, 1000);
  };


  render() {
    return (
      <div>
        <Header />
        <div className="booking-heading">
          <h1>Appointment Bookings</h1>
        </div>

        <div className="booking-form-container">
          <form onSubmit={this.formSubmit}>
            <div className="booking-date-text">
              Date: <input type="date" onChange={this.handleDate}></input>
            </div>

            <br></br>
            <br></br>
            <div className="booking-name-text">
              Name:{" "}
              <input value={this.state.name} onChange={this.handleName}></input>
            </div>
            <br></br>
            <br></br>
            <div className="booking-email-text">
              E-mail:{" "}
              <input
                value={this.state.email}
                onChange={this.handleEmail}
              ></input>
            </div>
            <br></br>
            <br></br>
            <div className="booking-time-text">
              Time:{" "}
              <input value={this.state.time} onChange={this.handleTime}></input>
            </div>
            <button type="submit" className="booking-button">
              Make Appointment
            </button>
          </form>
        </div>
        <Contact />
      </div>
    );
  }
}

export default Booking;