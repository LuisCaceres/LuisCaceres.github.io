const expect = chai.expect;

// associate()
{
  const items = [
    ['Artist 1', 'Title 1'],
    ['Artist 3', 'Title 3'],
  ];
  
  const charted = [
    { artist: 'Artist 1', title: 'Title 1', match: 'Title 1' },
    { artist: 'Artist 2', title: 'Title 2', match: 'Title 2' },
  ];
  
  const uncharted = [
    { artist: 'Artist 3', title: 'Title 3' },
  ];
  
  const value = associate(items, charted, uncharted);
  
  expect(value.chart.length).to.equal(2);
  expect(value.chart[0]).to.equal(charted[0]);  // Artist 1
  expect(value.chart[1]).to.equal(uncharted[0]);    // Artist 3
  expect(value.chart[1].hasOwnProperty('match')).to.equal(true);
  
  expect(value.charted.length).to.equal(3);
  expect(value.uncharted.length).to.equal(0);
}


// generatePlaylist()
//
{
  const entries = [
    {artist: 'Artist 20', title: 'Title 20' },
    {artist: 'Artist 19', title: 'Title 19' },
    {artist: 'Artist 18', title: 'Title 18' },
    {artist: 'Artist 17', title: 'Title 17' },
    {artist: 'Artist 16', title: 'Title 16' },
    {artist: 'Artist 15', title: 'Title 15' },
    {artist: 'Artist 14', title: 'Title 14' },
    {artist: 'Artist 13', title: 'Title 13' },
    {artist: 'Artist 12', title: 'Title 12' },
    {artist: 'Artist 11', title: 'Title 11' },
    {artist: 'Artist 10', title: 'Title 10' },
    {artist: 'Artist 09', title: 'Title 09' },
    {artist: 'Artist 08', title: 'Title 08' },
    {artist: 'Artist 07', title: 'Title 07' },
    {artist: 'Artist 06', title: 'Title 06' },
    {artist: 'Artist 05', title: 'Title 05' },
    {artist: 'Artist 04', title: 'Title 04' },
    {artist: 'Artist 03', title: 'Title 03' },
    {artist: 'Artist 02', title: 'Title 02' },
    {artist: 'Artist 01', title: 'Title 01' },
  ];
     
  const playlist = generatePlaylist(entries);
  
  expect(playlist.length).to.equal();
  expect(playlist[0]).to.equal(intro);      // curtain
  expect(playlist[1]).to.equal(entries[0]); // position 20
  expect(playlist[2]).to.equal();
  expect(playlist[3]).to.equal();
  expect(playlist[4]).to.equal();
  expect(playlist[5]).to.equal();
  expect(playlist[6]).to.equal();
  expect(playlist[7]).to.equal();
  expect(playlist[8]).to.equal();
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
