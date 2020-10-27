import React from 'react'

class Contact extends React.Component{
    render(){
        return (
          <div>
            Contact:
            <div className="ui segment success">
              <form className="ui form">
                <div className="field">
                  <label>Name</label>
                  <input type="text"  placeholder="Name" />
                </div>
                <div class="field">
                  <label>E-mail</label>
                  <input type="text" name="email" placeholder="E-mail"></input>
                </div>
                <div class="field">
                  <label>Message</label>
                  <textarea
                    placeholder="Tell us what you need!"
                    rows="2"
                  ></textarea>
                </div>
                <div class="ui success message">
                    <div class="header">Form Complete</div>
                    <p>Thanks for reaching out, we will get back to you as soon as possible!</p>
                </div>
                <div class="ui submit button">Send</div>
                
              </form>
            </div>
          </div>
        );
    }
}


export default Contact;
