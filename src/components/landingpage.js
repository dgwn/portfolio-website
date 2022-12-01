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
                Welcome! I am a full stack web developer from the Orlando area.
                I am experienced in ReactJS, HTML, CSS/Sass, NodeJS, ExpressJS,
                vanilla Javascript, Typescript, Git/Github, PHP, and Python. I
                also have experience doing web design, software testing, UI/UX
                design, Squarespace development, and prototyping in Adobe XD and
                Photoshop. I have worked in the internet industry for over 7
                years and have done design work since 2010.
              </p>
              <p className="about-text">
                I graduated from the University of Central Florida with a B.A.
                in Philosophy and a minor in Sociology. My studies involved a
                research intensive program which developed analytic skills
                through the use of formal logic and critical thinking. My
                program included coursework focused on Ethics in Technology,
                language, communication, demographic studies, and social trends.
                These tools are indispensible both for writing clean, coherent,
                and consistent code as well as for doing UX research. I have
                also completed coursework through the University of Helsinki's
                Full Stack Open program, learning to leverage the latest
                technologies and frameworks to develop web apps. I like to use
                my toolkit to work with individuals and businesses in order to
                help them develop creative and robust online presences - whether
                it be a static web page or interactive full-stack application.
              </p>
              <p className="about-text">
                I have also completed coursework through the University of
                Helsinki's Full Stack Open program, learning to leverage the
                latest technologies and frameworks to develop web apps. I like
                to use my toolkit to work with individuals and businesses in
                order to help them develop creative and robust online presences
                - whether it be a static web page or interactive full-stack
                application.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
