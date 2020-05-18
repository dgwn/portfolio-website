import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headshot from "../assets/headshot.jpg";

import sprite from "../assets/sprite.svg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1>Daniel Gawne</h1>
            <img src={headshot} alt="headshot" className="avatar-img" />
            <div className="banner-text banner-blue">
              <h3>Web Developer</h3>
              <hr />
              <p>
                Javascript | HTML | CSS/Sass <br></br> ReactJS | NodeJS/Express
                | MongoDB
              </p>
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
                  href="https://github.com/dgwn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg_icon">
                    <use href={sprite + "#icon-github"}></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="banner-text banner-yellow">
              <h3>About Me</h3>
              <p className="about-text">
                Welcome! I am a web developer from the Orlando area. My
                experience is mostly with the MERN stack (MongoDB, ExpressJS,
                ReactJS, NodeJS). I also work with HTML/CSS, Sass, Vanilla
                Javascript, UI/UX design, and prototype in Adobe XD and
                Photoshop. While coming from a background focused more in
                content than delivery, I have worked in the internet industry
                for at least 5 years and have done design work since 2010.
              </p>
              <p className="about-text">
                I graduated from the University of Central Florida with a B.A.
                in Philosophy and a minor in Sociology. While my formal
                education does not originate in STEM, my research in my B.A.
                program focused largely on the role of technology and media on
                human labor and identity development. Additionally, my study of
                philosophy honed my analytic skills through the use of formal
                logic and the ability to assume the positions of others in order
                to gain a wider understanding of a topic. These tools are
                indispensible both for doing UX research and for writing clean,
                coherent, and consistent code. I hope to use my toolkit to work
                with clients such as small businesses and nonprofits in order to
                help them develop an online presence and address application
                needs.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
