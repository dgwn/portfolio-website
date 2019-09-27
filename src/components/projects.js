import React, {Component } from 'react';
import Tile from './tile';

class Projects extends Component {
  render() {
    const PROJECTS = [
      {
        id: 1,
        title: "Drum Machine",
        blurb: "Multiple configurations of pads which trigger different audio samples",
        link: "#",
        js: false,
        react: true
      },
      {
        id: 2,
        title: "Etch Sketch",
        blurb: "Webpage with interactive cursor drawing",
        link: "https://github.com/dgwn/etch-sketch",
        js: true,
        react: false
      }
    ]

    return(
      <div class="tile-container">

      {PROJECTS.map(function(item){
        return (<Tile title={item.title}
                      blurb={item.blurb}
                      link={item.link}
                      js={item.js}
                      react={item.react}/>)

      })}


      </div>
    )
  }
}

export default Projects;
