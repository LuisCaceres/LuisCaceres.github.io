import React from 'react';
import './Tile.css';

class Tile extends React.Component {

  render() {
    const { name, src } = this.props;

    return (
      <li className="tile">
        <img src={src} alt="" className="tile__image" role="presentation"/>
        <span className="tile__name-container">
          <img src="images/logo.png" alt="Channel 7 logo" className="tile__logo" />
          <span className="tile__name">{name}</span>
        </span>
      </li>
    )
  }
}

export default Tile;