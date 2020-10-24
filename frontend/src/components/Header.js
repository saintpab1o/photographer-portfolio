import React from 'react';
import '../css/Header.css';

class Header extends React.Component{
    render(){
        return (
          <div id="header-container" className="ui clearing segment">
            <div id="header-text-container">
            <h3 id="header-icon" className="ui icon header">
              <i className="photo icon"></i>
            </h3>
              <h3 id="header-text" className="ui right floated header">
                About
              </h3>
              <h3 id="header-text" className="ui right floated header">
                Contact
              </h3>
              <h3 id="header-text" className="ui right floated header">
                Booking
              </h3>
              <h3 id="header-text" className="ui right floated header">
                Catalog
              </h3>
            </div>
          </div>
        );
    }   
}

export default Header;