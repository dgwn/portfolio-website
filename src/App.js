import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header title=" " class="header-color" scroll>
                <Navigation>
                    <Link to="/home" style={{color: "black"}}>Home</Link>
                    <Link to="/resume" style={{color: "black"}}>Resume</Link>
                    <Link to="/projects" style={{color: "black"}}>Projects</Link>
                    <Link to="/contact" style={{color: "black"}}>Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu" style={{color: "black"}}>
                <Navigation>
                  <Link to="/home">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
            <p class="copyright">&copy; 2019 Daniel Gawne | Built with React</p>
        </Layout>
      </div>
      <LandingPage />
    </div>
  );
}

export default App;
