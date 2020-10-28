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
                    <i class="fas fa-phone">631-555-9595</i>
                    <br></br>
                   <i class="fas fa-envelope">pm@pmshoots.com</i>
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
                    <li>About</li>
                    <li>Events</li>
                    <li>Catalog</li>
                    <li>More</li>
                
                  </ul>
              </div>

              <div className="footer-section contact-form">
                  <h1>Contact</h1>
                  <br></br>
                  <form action="index.html" method="post">
                      <input className="text-input contact-input"type="email" name="email" placeholder="email"></input>
                    <textarea name="message"  className="text-inputer contact-input" placeholder="Place your request here!"></textarea>
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
