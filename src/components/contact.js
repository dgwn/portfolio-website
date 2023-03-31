import React, { Component } from "react";

import sprite from "../assets/sprite.svg";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="banner-text banner-blue" id="contact-box">
          <h1 className="subheading">Contact Me</h1>
          <hr />
          <p>Email: danielgawne@gmail.com</p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/dgwne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="svg_icon">
                <use href={sprite + "#icon-linkedin"}></use>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dgwne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LinkedIn Profile</p>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/dgwn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="svg_icon">
                <use href={sprite + "#icon-github"}></use>
              </svg>
            </a>
            <a
              href="https://github.com/dgwn"
              target="_blank"
              rel="noopener noreferrer"
              text="Here"
            >
              <p>Github Profile</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
