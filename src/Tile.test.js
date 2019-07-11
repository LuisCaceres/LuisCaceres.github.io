import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile';

it('displays a tile containing an image and a name', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Tile name="Home and Away" src="images/tile-0.jpg" />, div);

  const tile = div.querySelector('.tile'),
    image = tile.querySelector('.tile__image'),
    name = tile.querySelector('.tile__name');

  expect(tile.nodeName).toEqual('LI');
  expect(image.src.endsWith('images/tile-0.jpg')).toEqual(true);
  expect(name.textContent).toEqual('Home and Away');
});
