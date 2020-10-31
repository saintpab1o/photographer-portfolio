import React from 'react';
import '../css/Header.css';


class Header extends React.Component{
  

    // toggleClass = () =>{
    
    // }
  
    render(){
        return (
          <header>
            <div class="logo" >
              <h1 class="logo-text">
                <span>Head</span>shots
              </h1>
            </div>
            <i class="fa fa-bars menu-toggle" onClick={this.toggleClass}></i>
            <ul class="nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-user"></i> Admin User{" "}
                  <i class="fa fa-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">DashBoard</a>
                  </li>
                  <li>
                    <a class="logout" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </header>
        );
    }   
}

export default Header;