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
              <i className="fab fa-linkedin-square"  style={{color: '#0077B5'}} />
            </a>
            <a href="https://github.com/dgwn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square"  style={{color: '#6e5494'}}/>
            </a>
          </div>
        </div>


      </div>
    )
  }
}

export default Contact;
