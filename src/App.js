import React, { useRef } from "react";

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
        <header className="header-color nav">
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label
            htmlFor="nav-toggle"
            className="nav-hamburger"
            tabIndex="0"
            role="button"
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                document.getElementById("nav-toggle").checked =
                  !document.getElementById("nav-toggle").checked;
              }
            }}
          >
            <span className="visually-hidden">Open navigation menu</span>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav
            id="main-nav"
            className="main-nav nav-drawer"
            aria-label="Main navigation"
          >
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
                className="fas fa-external-link-alt"
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
          </nav>
        </header>
        <main tabIndex="-1" ref={contentRef}>
          <div className="page-content" />
          <Main />
          <p className="copyright">&copy; 2019 - 2026 Daniel Gawne</p>
        </main>
      </div>
    </div>
  );
}

export default App;
