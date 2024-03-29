import React, { useRef } from "react";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import resume from "./assets/resume1.pdf";

import "./App.css";

function App() {
  const contentRef = useRef();

  const skipToContent = () => {
    contentRef.current.focus();
  };

  return (
    <div className="App">
      <div className="demo-big-content">
        <div className="button-bg"></div>
        <button onClick={skipToContent} className="skipButton">
          Skip to Main Content
        </button>
        <Layout>
          <Header title=" " class="header-color nav" scroll>
            <Navigation>
              <Link to="/" style={{ color: "black" }}>
                Home
              </Link>
              <a
                href={resume}
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume &nbsp;
                <i
                  class="fas fa-external-link-alt"
                  alt="PDF"
                  role="img"
                  title="PDF"
                ></i>
              </a>
              <Link to="/projects" style={{ color: "black" }}>
                Projects
              </Link>
              <Link to="/contact" style={{ color: "black" }}>
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Menu" style={{ color: "black" }}>
            <Navigation>
              <Link to="/">Home</Link>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume &nbsp;
                <i
                  class="fas fa-external-link-alt"
                  alt="PDF"
                  role="img"
                  title="PDF"
                ></i>
              </a>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" tabIndex="-1" ref={contentRef} />
            <Main />
            <p class="copyright">&copy; 2024 Daniel Gawne</p>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
