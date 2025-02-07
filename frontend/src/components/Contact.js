import React from 'react';
import '../css/Contact.css';
import axios from 'axios';



class Contact extends React.Component{

  state={
    name: "",
    email: "",
    message: "",
    sent:false
  }

  handleName=(e) =>{
    this.setState({
      name: e.target.value
    })
  }

  handleEmail=(e) =>{
    this.setState({
      email: e.target.value
    })
  }

  handleMessage=(e) =>{
    this.setState({
      message: e.target.value
    })
  }

 formSubmit=(e)=>{
   e.preventDefault();
   let data = {
     name: this.state.name,
     email: this.state.email,
     message: this.state.message
   }
   axios.post(`/send`,data)
   .then(rest=>{
     this.setState({
       send:true
     },this.resetForm())
   }).catch(()=>{
     console.log('message not sent')
   })

 }

 resetForm =()=>{
   this.setState({
     name:"",
     email:"",
     message:"",
 
   })
   setTimeout(()=>{
     this.setState({
       sent:true
     })
   },1000)
 }


    render(){
        return (
          <div id="contact" className="footer">
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
                      <i className="fas fa-phone"></i> 631-559-9570
                    </a>
                  </span>
                  <span>
                    <a href="#12">
                      <i className="fas fa-envelope"></i>{" "}
                      paulmagioncalda@gmail.com
                    </a>
                  </span>
                </div>

                <div className="socials">
                  <a href="https://www.linkedin.com/in/paulmagioncalda/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.github.com/saintpab1o">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://angel.co/u/paul-magioncalda">
                    <i className="fab fa-angellist"></i>
                  </a>
                  {/* <a>
                    <i className="fas fa-file"></i>
                  </a> */}
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

              <div href='contact'className="footer-section contact-form">
                <h1>Contact</h1>
                <br></br>
                <div className="contact-form-container">
                  <form onSubmit={this.formSubmit}>
                    <input
                      className="text-input contact-input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleName}
                    ></input>
                    <input
                      className="text-input contact-input"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={this.state.email}
                      onChange={this.handleEmail}
                    ></input>
                    <textarea
                      name="message"
                      className="text-input contact-input contact-input-message"
                      placeholder="Place your request here!"
                      value={this.state.message}
                      onChange={this.handleMessage}
                    ></textarea>
                    <div
                      className={this.state.sent ? "messageShow" : "message"}
                    >
                      Message has been sent!
                    </div>
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
