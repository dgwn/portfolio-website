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
              <h2 className="subheading">WebDev / DevOps Engineer</h2>
              <hr />
              <p>
                Python | Linux | AWS<br></br>
                Flask | Django | NodeJS| ReactJS
                <br></br>
                OpenTofu | Terraform | Docker | CI/CD
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
              <div className="about-text-container">
                <p className="about-text">
                  Hello! I am a full stack web developer and devops engineer
                  from the St. Louis area. I am experienced in Python, the
                  Django and Flask web frameworks, AWS services, Cloud
                  Computing, Infrastructure as Code (OpenTofu/Terraform), Linux
                  server administration, Javascript, React, Node, Express, HTML,
                  CSS, Git/Github, and Docker. I also have experience doing web
                  design, QA testing, UI/UX design, and prototyping in Adobe XD
                  and Photoshop. I've worked in the internet industry for over
                  10 years and have done design work since 2010.
                </p>
                <p className="about-text">
                  I graduated from the University of Central Florida with a{" "}
                  <strong>B.A. in Philosophy</strong> and a minor in Sociology.
                  My studies involved a research intensive program which
                  developed analytic skills through the use of formal logic and
                  critical thinking. My program included coursework focused on
                  ethics in technology, formal logic, language, communication,
                  philosophy of mind, critical theory, media studies, and social
                  trends. I have also done coursework throught the University of
                  Helsinki in full stack development (primarily with the MERN
                  stack) and devops (containerization, CI/CD) and am certified
                  as an <strong>AWS Solutions Architect Associate</strong>.
                </p>
                <p className="about-text">
                  Most recently I have been working in Education Technology at{" "}
                  <strong> UCF's Center for Distributed Learning</strong> on the
                  Learning Systems & Technology team. I started with a focus in
                  backend web development with Python (Flask and Django) while
                  also picking up chops in the devops space with cloud
                  computing, Infrastructure as Code, setting up CI/CD pipelines,
                  and containerization. My work has helped to set numerous
                  standards and build templates for the team to bootstrap
                  development and deployment of new learning applications,
                  helping provide more accessible education to university
                  students, and enable faculty and instructional designers to
                  create engaging learning experiences. I have also contributed
                  to open source and open education more broadly, check out my{" "}
                  <strong>'Projects'</strong> page for more details!
                </p>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
