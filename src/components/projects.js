import React, { Component } from "react";
import Tile from "./tile";

class Projects extends Component {
  render() {
    const PROJECTS = [
      {
        id: 0,
        title: "Cyclops LTI",
        blurb:
          "An OCR image-to-text app built on the LTI 1.3 standard. Allows instructors to embed image text from course files into an LMS (e.g. Canvas) rich content editor.",
        link: "https://github.com/dgwn/cyclops",
        js: false,
        react: false,
        node: false,
        db: true,
        ss: false,
        python: true
      },
      {
        id: 1,
        title: "Homeland Security\nService LLC - Website",
        blurb:
          "Squarespace site designed, deployed, and delivered by yours truly (archived link)",
        liveLink: "https://archive.ph/LJFyS",
        js: false,
        react: false,
        node: false,
        db: false,
        ss: true,
        python: false
      },
      {
        id: 2,
        title: "Blog App",
        blurb:
          "Blogging app with REST API, React frontend, Node/Express backend and MongoDB. Create a user and try it out!",
        liveLink: "https://fso-blog-mongodb.onrender.com/",
        link: "https://github.com/dgwn/fullstackopen/tree/master/part7/extended-bloglist",
        js: true,
        react: true,
        node: true,
        db: true,
        python: false
      },
      {
        id: 3,
        title: "Phonebook",
        blurb:
          "Phonebook app with REST API, Node/Express backend and MongoDB. Made to fulfill Univ. of Helsinki's Full Stack Open coursework. Self-hosted on Linux server",
        link: "https://github.com/dgwn/fullstackopen/tree/master/part3/phonebook",
        liveLink: "http://phonebook.crabdance.com",
        js: true,
        react: true,
        node: true,
        db: true,
        python: false
      },
      {
        id: 4,
        title: "Drum Machine",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Drum Machine"',
        liveLink: "https://codepen.io/dgwn/pen/eYYZEOr",
        js: true,
        react: true,
        node: false,
        db: false,
        python: false
      },
      {
        id: 5,
        title: "Markdown Previewer",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Markdown Previewer"',
        liveLink: "https://codepen.io/dgwn/pen/XWWWxXZ",
        js: true,
        react: true,
        node: false,
        db: false,
        python: false
      },
      {
        id: 6,
        title: "Random Quote Generator",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Random Quote Machine"',
        liveLink: "https://codepen.io/dgwn/pen/BaBgwBd",
        js: true,
        react: true,
        node: false,
        db: false,
        python: false
      },
      {
        id: 7,
        title: "Etch Sketch",
        blurb: "Webpage with interactive cursor drawing",
        link: "https://github.com/dgwn/etch-sketch",
        js: true,
        react: false,
        node: false,
        db: false,
        python: false
      },
      {
        id: 8,
        title: "Bookmarker",
        blurb: "Client side application to store URL bookmarks",
        link: "https://github.com/dgwn/bookmarker-web-app",
        js: true,
        react: false,
        node: false,
        db: false,
        python: false
      }
    ];

    return (
      <>
        <h1 className="subheading">Projects</h1>
        <div class="tile-container">
          {PROJECTS.map(function (item) {
            return (
              <Tile
                title={item.title}
                blurb={item.blurb}
                link={item.link}
                liveLink={item.liveLink}
                js={item.js}
                react={item.react}
                node={item.node}
                db={item.db}
                ss={item.ss}
                python={item.python}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Projects;
