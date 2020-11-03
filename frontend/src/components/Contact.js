import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component{
    render(){
        return (
          <div className="footer">
            <div className="footer-content">
              <div className="footer-section about">
                <h1 className="logo-text">
                  <span>Head</span>
                  shots.
                </h1>
                <p className="logo-text-p">
                  Headshots is a fictional website to display design work for
                  potential photographer portfolios, each portfoilio site can
                  becustomized to specifactions. Thanks for stopping by!
                </p>

                <div className="contact" href="#21">
                  <span>
                    <a href="#20">
                      <i className="fas fa-phone"></i> 631-555-5555
                    </a>
                  </span>
                  <span>
                    <a href="#12">
                      <i className="fas fa-envelope"></i> pm@pmshoots.com
                    </a>
                  </span>
                </div>

                <div className="socials">
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                    <i className="fab fa-youtube"></i>
                  </span>
                </div>
              </div>

              <div id="footer-links" className="footer-section links">
                <h1>Quick Links</h1>

                <ul>
                  <a href="#7">
                    <li>About</li>
                  </a>
                  <a href="#8">
                    <li>Catalog</li>
                  </a>
                  <a href="#9">
                    <li>Booking</li>
                  </a>
                  <a href="#10">
                    <li>Services</li>
                  </a>
                  <a href="#11">
                    <li>Events</li>
                  </a>
                </ul>
              </div>

              <div className="footer-section contact-form">
                <h1>Contact</h1>
                <br></br>
                <div className="contact-form-container">
                  <form action="index.html" method="post">
                    <input
                      className="text-input contact-input"
                      type="email"
                      name="name"
                      placeholder="Name"
                    ></input>
                    <input
                      className="text-input contact-input"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                    ></input>
                    <textarea
                      name="message"
                      className="text-input contact-input contact-input-message"
                      placeholder="Place your request here!"
                    ></textarea>
                    <button type="submit" className="btn btn-big contact-btn">
                      <i className="fas fa-envelope"></i>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              &copy; HeadShots.com | Designed by Paul Magioncalda.
            </div>
          </div>
        );
    }
}

export default Contact;
