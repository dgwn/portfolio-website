import React, { Component } from "react";
import Tile from "./tile";

class Projects extends Component {
  render() {
    const PROJECTS = [
      {
        id: 0,
        title: "Homeland Security\nService LLC - Website",
        blurb:
          "Squarespace site designed, deployed, and delivered by yours truly (archived link)",
        link: "https://archive.ph/LJFyS",
        js: false,
        react: false,
        node: false,
        db: false,
        ss: true
      },
      {
        id: 1,
        title: "Blog App",
        blurb:
          "Blogging app with REST API, React frontend, Node/Express backend and MongoDB. Create a user and try it out!",
        link: "https://github.com/dgwn/fullstackopen/tree/master/part7/extended-bloglist",
        liveLink: "https://fso-blog-app0.herokuapp.com",
        js: true,
        react: true,
        node: true,
        db: true
      },
      {
        id: 2,
        title: "Phonebook",
        blurb:
          "Phonebook app with REST API, Node/Express backend and MongoDB. Made to fulfill Univ. of Helsinki's Full Stack Open coursework",
        link: "https://github.com/dgwn/fullstackopen/tree/master/part3/phonebook",
        liveLink: "https://phonebook-72648.herokuapp.com",
        js: true,
        react: true,
        node: true,
        db: true
      },
      {
        id: 3,
        title: "Drum Machine",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Drum Machine"',
        link: "https://codepen.io/dgwn/pen/eYYZEOr",
        liveLink: "https://codepen.io/dgwn/pen/eYYZEOr",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 4,
        title: "Markdown Previewer",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Markdown Previewer"',
        link: "https://codepen.io/dgwn/pen/XWWWxXZ",
        liveLink: "https://codepen.io/dgwn/pen/XWWWxXZ",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 5,
        title: "Random Quote Generator",
        blurb:
          'Fulfills FreeCodeCamp front-end-libraries project: "Build a Random Quote Machine"',
        link: "https://codepen.io/dgwn/pen/BaBgwBd",
        liveLink: "https://codepen.io/dgwn/pen/BaBgwBd",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 6,
        title: "Etch Sketch",
        blurb: "Webpage with interactive cursor drawing",
        link: "https://github.com/dgwn/etch-sketch",
        js: true,
        react: false,
        node: false,
        db: false
      },
      {
        id: 7,
        title: "Bookmarker",
        blurb: "Client side application to store URL bookmarks",
        link: "https://github.com/dgwn/bookmarker-web-app",
        js: true,
        react: false,
        node: false,
        db: false
      }
    ];

    return (
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
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;
