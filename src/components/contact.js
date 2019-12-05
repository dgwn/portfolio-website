import React, {Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div>
        <div className="banner-text banner-blue">
          <h3>Contact Me</h3>
          <hr />
          <p>Email: danielgawne@gmail.com</p>



          <div className="social-links">
            <a href="https://www.linkedin.com/in/dgwne/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-square"  style={{color: 'black'}} />
            </a>
            <a href="https://www.linkedin.com/in/dgwne/" target="_blank" rel="noopener noreferrer"><p>LinkedIn Profile</p></a>
            <a href="https://github.com/dgwn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square"  style={{color: 'black'}}/>
            </a>
            <a href="https://github.com/dgwn" target="_blank" rel="noopener noreferrer" text="Here"><p>Github Profile</p></a>
          </div>
        </div>


      </div>
    )
  }
}

export default Contact;
