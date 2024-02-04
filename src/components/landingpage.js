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
            <h1 className="name">Daniel Gawne</h1>
            <img src={headshot} alt="headshot" className="avatar-img" />
            <div className="banner-text banner-blue">
              <h2 className="subheading">Web Developer</h2>
              <hr />
              <p>
                Python | Javascript | AWS<br></br>
                Flask | Django | NodeJS| ReactJS
                <br></br>
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/dgwne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg_icon">
                    <use href={sprite + "#icon-linkedin"}></use>
                  </svg>{" "}
                  <p className="contactLink">LinkedIn</p>
                </a>
                <a
                  href="https://github.com/dgwn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg_icon">
                    <use href={sprite + "#icon-github"}></use>
                  </svg>
                  <p className="contactLink">Github</p>
                </a>
              </div>
            </div>
            <div className="banner-text banner-yellow">
              <h2 className="subheading">About Me</h2>
              <p className="about-text">
                Welcome! I am a full stack web developer from the Orlando area.
                I am experienced in Python, the Django and Flask web frameworks,
                Javascript, ReactJS, NodeJS, ExpressJS, Typescript, HTML,
                CSS/Sass, Git/Github, AWS services, Cloud Computing, and Docker.
                I also have experience doing web design, QA testing, UI/UX
                design, Squarespace development, and prototyping in Adobe XD and
                Photoshop. I have worked in the internet industry for over 8
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
                and consistent code as well as for doing UX research.
              </p>
              <p className="about-text">
                I have also completed coursework through the University of
                Helsinki. I completed the core Full Stack Open program, learning
                to leverage the latest technologies and frameworks to develop
                web apps. I also finished courses in DevOps with Docker,
                Continuous Integration / Continuous Deployment (CI/CD),
                Relational Databases, Containers, and Elements of AI. I like to
                use my toolkit to work with individuals and organizations in
                order to help them develop creative and robust tools and
                presences - whether it be an interactive full-stack application
                or a static web page. Most recently I have been working in
                Education Technology at the University of Central Florida's
                Center for Distributed Learning.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
