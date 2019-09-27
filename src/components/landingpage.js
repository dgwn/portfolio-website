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
              <div class="social-links">
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
            <div class="banner-text banner-yellow">
              <h3>About Me</h3>
              <p>I am a fresh web developer focusing on the front-end. I graduated from the University of Central Florida with a B.A. in Philosophy and a minor in Sociology.</p>
              <p>I am especially interested in the role technology plays in changing social structures, such as culture, politics, and the workplace. I hope to use my toolkit to work with small businesses and nonprofits so that they better meet their goals through developing an online presence and addressing application needs.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
