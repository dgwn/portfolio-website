import React, {Component } from 'react';

class Tile extends Component {
  render() {
    return(
    <div className="tile">
      <h4>{this.props.title}</h4>
      <p>{this.props.blurb}</p>
      <div>
        <p>Technologies Used:</p>
        {this.props.js && <i class="fab fa-js" style={{fontSize: 30}}></i>}
        {this.props.react && <i class="fab fa-react" style={{fontSize: 30}}></i>}
      </div>
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">Click Here!</a>
    </div>
  )
  }
}

export default Tile;
