import React, {Component } from 'react';

class Tile extends Component {
  render() {
    return(
    <div className="tile">
      <h4>{this.props.title}</h4>
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">Project Link</a>
      <p>{this.props.blurb}</p>
      <div className="techUsed">
        <p>Technologies Used:</p>
        {this.props.js && <i class="fab fa-js" style={{fontSize: 30, padding: 10}}></i>}
        {this.props.react && <i class="fab fa-react" style={{fontSize: 30, padding: 10}}></i>}
      </div>

    </div>
  )
  }
}

export default Tile;
