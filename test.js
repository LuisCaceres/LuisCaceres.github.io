const expect = chai.expect;

// associate()
{
  const items = [
    [encode('Artist 1'), encode('Title 1')],
    [encode('Artist 3'), encode('Title 3')],
  ];
  
  const videos = [
    { artist: 'Artist 1', title: 'Title 1', match: encode('Title 1') },
    { artist: 'Artist 2', title: 'Title 2', match: encode('Title 2') },
  ];
  
  const pool = [
    { artist: 'Artist 3', title: 'Title 3' },
  ];
  
  const value = associate(items, videos, pool);
  
  expect(value.items.length).to.equal(2);
  expect(values.items[0]).to.equal(videos[0]);  // Artist 1
  expect(values.items[1]).to.equal(pool[0]);    // Artist 3
  
  expect(value.pool.length).to.equal(0);
  expect(value.pool[0].hasOwnProperty('match')).to.equal(true);
  
  expect(value.videos.length).to.equal(3);
}

// encode()
// encode a string
{
  const value = encode('Hello world!');
  const expectation = 'Ifmmp!xpsme\"';
  expect(expectation).to.equal(value);
}

// parse()
{
  const HTML = `
    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>Title</th>
        <th>Artist</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 1</td>
        <td>Artist 1</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 2</td>
        <td>Artist 2</td>
      </tr>
    </table>
  `;
  
  const table = (new DOMParser()).parseFromString(HTML, 'text/html');
  const value = parse(table);
  expectation = [['Artist 2', 'Title 2'], ['Artist 1', 'Title 1']];
  
  expect(value.length).to.equal(expectation.length);       // 2
  expect(value[0].length).to.equal(expectation[0].length); // 2 
  expect(value[0][0]).to.equal(expectation[0][0]);         // 'Artist 2' 
  expect(value[0][1]).to.equal(expectation[0][1]);         // 'Title 2' 
}

// random()
// return a random number
{
  const value = random(1);
  const expectation = 1;
  expect(value).to.equal(expectation);
}

// return a random number no greater than another number.
{
  const limit = 20;
  const value = random(limit);
  const expectation = value <= limit;
  expect(expectation).to.equal(true);
}
