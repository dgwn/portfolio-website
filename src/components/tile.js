import React, { Component } from "react";

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <h2 style={{ whiteSpace: "pre-line" }} className="tileHeader">
          {this.props.title}
        </h2>
        <div className="linkStyle">
          {this.props.liveLink && (
            <a
              href={this.props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          )}
          {this.props.link && (
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              Code Link
            </a>
          )}
        </div>
        <br />
        <p>{this.props.blurb}</p>
        <div className="techUsed">
          <p>Technologies Used:</p>
          {this.props.js && (
            <i
              class="fab fa-js"
              style={{ fontSize: 30, padding: 10 }}
              alt="Javascript"
              role="img"
              title="Javascript"
            ></i>
          )}
          {this.props.react && (
            <i
              class="fab fa-react"
              style={{ fontSize: 30, padding: 10 }}
              alt="ReactJS"
              role="img"
              title="ReactJS"
            ></i>
          )}
          {this.props.node && (
            <i
              class="fab fa-node-js"
              style={{ fontSize: 30, padding: 10 }}
              alt="NodeJS"
              role="img"
              title="NodeJS"
            ></i>
          )}
          {this.props.db && (
            <i
              class="fas fa-database"
              style={{ fontSize: 30, padding: 10 }}
              alt="MongoDB"
              role="img"
              title="Database"
            ></i>
          )}
          {this.props.ss && (
            <i
              class="fab fa-squarespace"
              style={{ fontSize: 30, padding: 10 }}
              alt="Squarespace"
              role="img"
              title="Squarespace"
            ></i>
          )}
        </div>
      </div>
    );
  }
}

export default Tile;
