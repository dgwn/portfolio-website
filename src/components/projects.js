import React, {Component } from 'react';
import Tile from './tile';

class Projects extends Component {
  render() {
    const PROJECTS = [
      {
        id: 0,
        title: "Phonebook",
        blurb: "Phonebook app with REST API, Node/Express backend and MongoDB. Made to fulfill Univ. of Helsinki's Full Stack Open coursework",
        link: "https://github.com/dgwn/fullstackopen/tree/master/part3/phonebook",
        liveLink: "https://phonebook-72648.herokuapp.com",
        js: true,
        react: true,
        node: true,
        db: true
      },
      {
        id: 1,
        title: "Drum Machine",
        blurb: "Fulfills FreeCodeCamp front-end-libraries project: \"Build a Drum Machine\"",
        link: "https://codepen.io/dgwn/pen/eYYZEOr",
        liveLink: "https://codepen.io/dgwn/pen/eYYZEOr",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 2,
        title: "Markdown Previewer",
        blurb: "Fulfills FreeCodeCamp front-end-libraries project: \"Build a Markdown Previewer\"",
        link: "https://codepen.io/dgwn/pen/XWWWxXZ",
        liveLink: "https://codepen.io/dgwn/pen/XWWWxXZ",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 3,
        title: "Random Quote Generator",
        blurb: "Fulfills FreeCodeCamp front-end-libraries project: \"Build a Random Quote Machine\"",
        link: "https://codepen.io/dgwn/pen/BaBgwBd",
        liveLink: "https://codepen.io/dgwn/pen/BaBgwBd",
        js: true,
        react: true,
        node: false,
        db: false
      },
      {
        id: 4,
        title: "Etch Sketch",
        blurb: "Webpage with interactive cursor drawing",
        link: "https://github.com/dgwn/etch-sketch",
        js: true,
        react: false,
        node: false,
        db: false
      },
      {
        id: 5,
        title: "Bookmarker",
        blurb: "Client side application to store URL bookmarks",
        link: "https://github.com/dgwn/bookmarker-web-app",
        js: true,
        react: false,
        node: false,
        db: false
      }

    ]

    return(
      <div class="tile-container">

      {PROJECTS.map(function(item){
        return (<Tile title={item.title}
                      blurb={item.blurb}
                      link={item.link}
                      liveLink={item.liveLink}
                      js={item.js}
                      react={item.react}
                      node={item.node}
                      db={item.db}/>)

      })}


      </div>
    )
  }
}

export default Projects;
