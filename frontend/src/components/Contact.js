import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component{
    render(){
        return (
          <div className="footer">
            <div className="footer-content">
            <div className="footer-content about"></div>
            <div className="footer-content catalog"></div>
            <div className="footer-content contact-form"></div>
          </div>

          <div className="footer-bottom">
              &copy; oneaternity.com | Designed by PM.
         </div>
          </div>
        );
    }
}


export default Contact;
