import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component{
    render(){
        return (
          <div className="footer">
            <div className="footer-content">

              <div className="footer-section about">
                <h1 className="logo-text">
                  <span>PM</span>Shoots
                </h1>
                <p>
                  Pm Shoots is a fictional website to display design work for
                  potential photographer portfolios, each portfoilio site can be
                  customized to specifactions. Thanks for stopping by!
                </p>
                <div className="contact">
                    <a href="#"><i class="fas fa-phone"></i> 631-555-5555</a>
                    <a href="#"><i class="fas fa-envelope"></i> pm@pmshoots.com</a>
                    </div>

                  <div className="socials">
                    <span>
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span>
                      <i class="fab fa-instagram"></i>
                    </span>
                    <span>
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      <i class="fab fa-youtube"></i>
                    </span>
                  </div>

              </div>

              <div id="footer-links" className="footer-section links">
                  <h1>Quick Links</h1>
                  <br></br>
                  <ul>
                      <a href="#"><li>About</li></a>
                      <a href="#"><li>Catalog</li></a>
                      <a href="#"><li>Booking</li></a>
                      <a href="#"><li>Terms and Conditions</li></a>
                      <a href="#"><li>More</li></a>
                  </ul>
              </div>

              <div className="footer-section contact-form">
                  <h1>Contact</h1>
                  <br></br>
                  <form action="index.html" method="post">
                      <input className="text-input contact-input"type="email" name="name" placeholder="Name"></input>
                      <input className="text-input contact-input"type="email" name="email" placeholder="E-mail"></input>
                    <textarea name="message"  className="text-input contact-input" placeholder="Place your request here!"></textarea>
                    <button type="submit" class="btn btn-big">
                        <i class="fas fa-envelope"></i>
                        Send
                    </button>
                  </form>
              </div>
            </div>

            <div className="footer-bottom">
              &copy; oneaternity.com | Designed by PM.
            </div>
            
          </div>
        );
    }
}


export default Contact;
