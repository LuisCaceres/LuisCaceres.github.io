import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile';

ReactDOM.render(
    <section aria-label="List of shows">
        <ul className="tile__outer-container">
            <Tile name="Home and Away" src="images/tile-1.jpg" />
            <Tile name="Wimbledon" src="images/tile-2.jpg" />
            <Tile name="House Rules" src="images/tile-3.jpg" />
            <Tile name="S.W.A.T." src="images/tile-4.jpg" />
        </ul>
    </section>,
    document.getElementById('root')
);
