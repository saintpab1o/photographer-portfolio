import React from 'react';
import '../css/Header.css';

class Header extends React.Component{
    render(){
        return (
          <div className="header">
            <div className="logo">
              <h1 className="logo-text">
                <span>Head</span>shots
              </h1>
            </div>

              <i id="bars" class="fa fa-bars menu-toggle"></i>
            <div className="nav">
              <ul>
                <li>
                  <a id="header-text" className="ui right floated header">
                    About
                  </a>
                </li>
                <li>
                  <a id="header-text" className="ui right floated header">
                    Catalog
                  </a>
                </li>
                <li>
                  <a id="header-text" className="ui right floated header">
                    Booking
                  </a>
                </li>
                <li>
                  <a id="header-text" className="ui right floated header">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
    }   
}

export default Header;