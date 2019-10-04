import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import headshot from '../assets/headshot.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1>Daniel Gawne</h1>
            <img src={headshot} alt="headshot" className="avatar-img"/>
            <div className="banner-text banner-blue">
              <h3>Front End Web Developer</h3>
              <hr />
              <p>HTML/CSS  /  Javascript  /  ReactJS  /  Graphic Design</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/dgwne/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-square"  style={{color: '#0077B5'}}/>
                </a>
                <a href="https://github.com/dgwn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square"  style={{color: '#6e5494'}}/>
                </a>
                <a href="https://www.freecodecamp.org/dgwn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-free-code-camp"  style={{color: '#00471b'}}/>
                </a>
              </div>
            </div>
            <div className="banner-text banner-yellow">
              <h3>About Me</h3>
              <p className="about-text">Welcome! I am a web developer from the Orlando area. My focus is primarily on the front-end and UI/UX, but I also dabble in other parts of the stack. I work with HTML/CSS, Vanilla Javascript, React, Sass, and prototype in Adobe XD and Photoshop. While coming from a background focused more in content than delivery, I have worked in the internet industry for at least 5 years and have done design work since 2010.</p>
              <p className="about-text">I graduated from the University of Central Florida with a B.A. in Philosophy and a minor in Sociology. While my formal education does not fall neatly into the STEM category, my research in my B.A. program focused largely on the role of technology and media on human labor and development. Additionally, my study of philosophy honed my analytic skills through the use of formal logic and ability to assume the positions of others in order to gain a wider understanding of a topic. These tools are indispensible both for doing UX research and for writing clean, coherent, and consistent code. I hope to use my toolkit to work with clients such as small businesses and nonprofits in order to help them develop an online presence and address application needs.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
