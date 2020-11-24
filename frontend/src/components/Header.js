import React from 'react';
import '../css/Header.css';


class Header extends React.Component {

  state = {
    count: 0,
    liked: false
}

switchClass = () => {
        this.refs.nav.classList.toggle('showing');
    }

  render() {
    return (
      <header>
        <div className="logo">
          <h1 className="logo-text">
            <i className="fas fa-camera"></i>
            <span> Head</span>shots
          </h1>
        </div>

        <i className="fa fa-bars menu-toggle" onClick={this.switchClass}></i>
        <ul ref="nav" className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          {/* <li>
            <a href="Catalog">Catalog</a>
          </li> */}
          <li>
            <a href="booking">
              {/* <i className="fa fa-user"></i> Admin User{" "}
              <i class="fa fa-chevron-down"></i> */}
              Booking
            </a>
            {/* <ul>
              <li>
                <a href="#">DashBoard</a>
              </li>
              <li>
                <a className="logout" href="#">
                  Logout
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;